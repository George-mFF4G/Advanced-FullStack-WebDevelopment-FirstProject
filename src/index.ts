import express from 'express';
import fs from 'fs';
import path from 'path';
import imageResizeFunc from './routes/imageApi';

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Hello, Please enter your image name and your width and height');
});
app.get('/api/images', async (req: express.Request, res: express.Response) => {
  const name = req.query.filename;
  const imageName: string = name + '.jpg';
  const imageWidth: number = req.query.width as unknown as number;
  const imageHeight: number = req.query.height as unknown as number;
  const oldImagePath = path.resolve('../img', imageName);
  if (
    !fs.existsSync(oldImagePath) &&
    (imageWidth as unknown as number) > 0 &&
    (imageHeight as unknown as number) > 0
  ) {
    const newpath = await imageResizeFunc(
      String(imageName),
      Number(imageHeight),
      Number(imageWidth)
    );
    res.sendFile(String(newpath));
  } else {
    res.status(404).send('something is wrong! check your inputs');
  }
});
app.use((req: express.Request, res: express.Response) => {
  res.status(404).send('something is wrong! check your inputs');
});
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
export default app;
