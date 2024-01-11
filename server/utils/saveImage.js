import { writeFileSync } from 'node:fs';

const saveImage = (file, type = 'jpg') => {
    const date = new Date();
    const filename = date.getTime();

    const matches = file.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    const data = matches[2];

    const buffer = Buffer.from(data, 'base64');

    const imagePath = `./uploads/${filename}.${type}`;
    writeFileSync(imagePath, buffer);
    console.log(type)
    return `${filename}.${type}`
}

export default saveImage