
const setImageUrl = (dir, imageName) => {
    const path = `${dir}/uploads/${imageName}`;
    console.log(path)
    return new URL(path, import.meta.url).href;
}

export default setImageUrl