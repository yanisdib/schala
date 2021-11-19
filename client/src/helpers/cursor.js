export const getCursorPosition = (event) => {
    const image = event.target.getBoundingClientRect();
    const x = event.clientX - image.left;
    const y = event.clientY - image.top;
    const cursor = [x, y];

    return cursor;
}

export const convertPositionToPercentage = (position, base) => (position / base) * 100;