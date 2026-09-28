export function getResponsiveImage(srcBase, alt) {
    // srcBase = "/journal/scrummaster"
    return (
        <picture>
            <source
                type="image/avif"
                srcSet={`${srcBase}-400w.avif 400w, ${srcBase}-800w.avif 800w, ${srcBase}-1200w.avif 1200w`}
                sizes="(max-width: 768px) 100vw, 800px"
            />
            <source
                type="image/webp"
                srcSet={`${srcBase}-400w.webp 400w, ${srcBase}-800w.webp 800w, ${srcBase}-1200w.webp 1200w`}
                sizes="(max-width: 768px) 100vw, 800px"
            />
            <img
                src={`${srcBase}-800w.webp`}
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
                alt={alt}
            />
        </picture>
    );
}
// Mockup (desktop + telefoon) in AVIF/WebP, 400/800/1200 breed, verhouding 3:2.
// base = "/Portfolio/villa-vredestein-mockup"
export function MockupPicture({ base, alt, className, eager = false, sizes = "(max-width: 920px) 100vw, 600px" }) {
    return (
        <picture>
            <source type="image/avif" srcSet={`${base}-400w.avif 400w, ${base}-800w.avif 800w, ${base}-1200w.avif 1200w`} sizes={sizes} />
            <source type="image/webp" srcSet={`${base}-400w.webp 400w, ${base}-800w.webp 800w, ${base}-1200w.webp 1200w`} sizes={sizes} />
            <img
                src={`${base}-800w.webp`}
                width="1200"
                height="800"
                alt={alt}
                className={className}
                loading={eager ? "eager" : "lazy"}
                fetchPriority={eager ? "high" : undefined}
                decoding="async"
            />
        </picture>
    );
}
