const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = "ChIJS87mVlv3xUcRTxO351apGuo"; // ManonIT, Bakkum

export const handler = async () => {
    if (!API_KEY) {
        return json({ reviews: [], rating: null, totalRatings: 0 });
    }

    try {
        const res = await fetch(
            `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=nl`,
            {
                headers: {
                    "X-Goog-Api-Key": API_KEY,
                    "X-Goog-FieldMask": "reviews,rating,userRatingCount",
                },
            }
        );

        const detail = await res.json();

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
        }, true);

    } catch (err) {
        return json({ reviews: [], rating: null, totalRatings: 0 });
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
