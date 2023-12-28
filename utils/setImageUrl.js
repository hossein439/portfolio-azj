
const setImageUrl = (imageName) => {
    const path = `../uploads/${imageName}`;
    return new URL(path, import.meta.url).href;
}

export default setImageUrl