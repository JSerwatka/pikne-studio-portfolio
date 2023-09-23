export function isHoverSupported() {
    const hoverQuery = window.matchMedia("(hover: hover)");
    return hoverQuery.matches;
}
