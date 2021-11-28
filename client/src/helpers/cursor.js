export const getCursorPosition = (event) => {
    const image = event.target.getBoundingClientRect();
    const x = event.clientX - image.left;
    const y = event.clientY - image.top;
    const cursorPosition = [x, y];

    return cursorPosition;
}

// Transform a pixel position to a percentage
export const convertPositionToPercentage = (position, base) => (position / base) * 100;