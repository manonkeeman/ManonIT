const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_LAT = 52.5569967;
const PLACE_LNG = 4.6553783;

export const handler = async () => {
    if (!API_KEY) {
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ reviews: [], rating: null, totalRatings: 0 }),
        };
    }

    try {
        const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": API_KEY,
                "X-Goog-FieldMask": "places.reviews,places.rating,places.userRatingCount,places.displayName",
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

        const data = await res.json();
        const place = data.places?.[0];

        const reviews = (place?.reviews || []).map((r) => ({
            author: r.authorAttribution?.displayName || "Anoniem",
            photo: r.authorAttribution?.photoUri || null,
            rating: r.rating || 5,
            text: r.text?.text || "",
            time: r.relativePublishTimeDescription || "",
        }));

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "public, s-maxage=3600",
            },
            body: JSON.stringify({
                reviews,
                rating: place?.rating || null,
                totalRatings: place?.userRatingCount || 0,
            }),
        };
    } catch (err) {
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ reviews: [], rating: null, totalRatings: 0, error: err.message }),
        };
    }
};
