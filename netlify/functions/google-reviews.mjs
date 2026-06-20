const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_LAT = 52.5569967;
const PLACE_LNG = 4.6553783;

export const handler = async () => {
    if (!API_KEY) {
        return json({ reviews: [], rating: null, totalRatings: 0, debug: "no_api_key" });
    }

    try {
        // Stap 1: zoek het Place ID via tekst
        const searchRes = await fetch("https://places.googleapis.com/v1/places:searchText", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": API_KEY,
                "X-Goog-FieldMask": "places.id",
            },
            body: JSON.stringify({
                textQuery: "ManonIT webdesigner",
                maxResultCount: 1,
                languageCode: "nl",
                locationBias: {
                    circle: {
                        center: { latitude: PLACE_LAT, longitude: PLACE_LNG },
                        radius: 50000,
                    },
                },
            }),
        });

        const searchData = await searchRes.json();
        const placeId = searchData.places?.[0]?.id;

        if (!placeId) {
            return json({ reviews: [], rating: null, totalRatings: 0, debug: "place_not_found" });
        }

        // Stap 2: haal reviews op via Place Details
        const detailRes = await fetch(
            `https://places.googleapis.com/v1/places/${placeId}?languageCode=nl`,
            {
                headers: {
                    "X-Goog-Api-Key": API_KEY,
                    "X-Goog-FieldMask": "reviews,rating,userRatingCount",
                },
            }
        );

        const detail = await detailRes.json();

        const reviews = (detail.reviews || []).map((r) => ({
            author: r.authorAttribution?.displayName || "Anoniem",
            photo: r.authorAttribution?.photoUri || null,
            rating: r.rating || 5,
            text: r.text?.text || "",
            time: r.relativePublishTimeDescription || "",
        }));

        return json({
            reviews,
            rating: detail.rating || null,
            totalRatings: detail.userRatingCount || 0,
            debug: "ok",
            placeId,
        }, true);

    } catch (err) {
        return json({ reviews: [], rating: null, totalRatings: 0, debug: "error", error: err.message });
    }
};

function json(data, cache = false) {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            ...(cache ? { "Cache-Control": "public, s-maxage=1800" } : {}),
        },
        body: JSON.stringify(data),
    };
}
