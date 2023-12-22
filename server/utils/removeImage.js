import { unlink } from 'node:fs';

const removeImage = (file) => {
    unlink('./uploads/' + file, (err) => {
        if (err && err.code == 'ENOENT') {
            console.info("File doesn't exist, won't remove it.");
        } else if (err) {
            console.error("Error occurred while trying to remove file");
        } else {
            console.info(`removed`);
        }
    });
}

export default removeImage