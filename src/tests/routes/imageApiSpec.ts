import imageResizeFunc from '../../routes/imageApi';
import path from 'path';

it('Expect To Add New Image In The Thumb Folder', async () => {
  const newImagePath = await imageResizeFunc('icelandwaterfall.jpg', 200, 400);
  const newImgName = 'thumbnail_200_400_icelandwaterfall.jpg';
  expect(newImagePath).toEqual(path.resolve('./thumb', newImgName));
});
