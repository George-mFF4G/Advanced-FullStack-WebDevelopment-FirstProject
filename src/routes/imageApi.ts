import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
const imageResizeFunc = async (
  imageName: string,
  height: number,
  width: number
) => {
  // const imageNewName = 'thumbnail_' + height + '_' + width + imageName;
  const imageNewName = `thumbnail_${height}_${width}_${imageName}`;
  const newImagePath = path.resolve('./thumb', imageNewName);
  if (!fs.existsSync(newImagePath)) {
    try {
      const oldImagePath = path.resolve('./img', imageName);
      await sharp(oldImagePath).resize(width, height).toFile(newImagePath);
      return newImagePath;
    } catch (err) {
      console.log(err);
    }
  } else {
    return newImagePath;
  }
};
export default imageResizeFunc;
