export const getCursorPosition = (e) => {
    const image = e.target.getBoundingClientRect();
    const x = e.clientX - image.left;
    const y = e.clientY - image.top;
    const cursor = [x, y];

    return cursor;
}

export const convertPositionToPercentage = (position, base) => (position / base) * 100;