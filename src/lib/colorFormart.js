export const rgbToRgba = (rgb, a = 1) => {
	return `${rgb.replace('rgb(', 'rgba(').replace(')', `, ${a})`)}`;
};

export const paletteToCss = (palette, angle) => {
	const colorArr = palette.map((color) => {
		return rgbToRgba(color.color, color.opacity);
	});

	return `linear-gradient(${angle}deg, ${colorArr.join(',')})`;
};
