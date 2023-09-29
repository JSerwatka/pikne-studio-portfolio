interface AbsoluteDomRect {
    top: number;
    left: number;
    width: number;
    height: number;
}

export function getAbsoluteBoundingClientReact(element: HTMLElement): AbsoluteDomRect {
    const rect = element.getBoundingClientRect();
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
        width: rect.width,
        height: rect.height
    };
}
