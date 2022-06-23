import { Request, Response } from 'express';
import { promises as fsPromises } from 'fs';
import sharp from 'sharp';
import path from 'path';

export class ImageController {
   private fullImagesPath = path.resolve(__dirname, '../../assets/full');
   private thumbImagesPath = path.resolve(__dirname, '../../assets/thumb');

   instructions = (req: Request, res: Response): Response => {
      return res.status(200).json({
         message:
            'Url like this => http://localhost:4000/images?filename=fjord&width=200&height=200'
      });
   };

   /**
    * Get Image
    */

   getImage = async (
      req: Request,
      res: Response
   ): Promise<Response | unknown> => {
      const imgName: string = req.query.filename as string;
      const imgWidth: number = req.query.width as unknown as number;
      const imgHeight: number = req.query.height as unknown as number;

      if (!(await this.checkThumbImageExists(imgName))) {
         return res.status(404).json({
            message: "Image does't Exist"
         });
      }

      let imagePath: string = this.getImagePath(imgName, imgWidth, imgHeight);

      if (imgWidth && imgHeight) {
         imagePath = await this.resize(
            this.getImagePath(imgName),
            imgName,
            imgWidth,
            imgHeight
         );
      }

      return res.status(200).sendFile(imagePath);
   };

   /**
    * Resize Image based on Width and Height
    */
   resize = async (
      imagePath: string,
      imgName: string,
      imgWidth: number,
      imgHeight: number
   ): Promise<string> => {
      let doesImgExist: boolean = await this.checkThumbImageExists(imagePath);

      if (!doesImgExist) {
         let targetImage = path.resolve(
            this.thumbImagesPath,
            `${imgName}_thumb`
         );

         try {
            await sharp(imagePath)
               .resize(+imgWidth, +imgHeight)
               .toFile(`${targetImage}.jpg`);

            return `${targetImage}.jpg`;
         } catch (err) {
            console.log(err);
            return 'Error happened';
         }
      }

      return imagePath;
   };

   /**
    * Get full or thumb image Path
    */
   getImagePath = (
      imageName: string,
      width: number = 0,
      height: number = 0
   ): string => {
      let imagePath: string;

      // Return Thumb Image Path
      if (width && height)
         imagePath = path.resolve(
            this.thumbImagesPath,
            `${imageName}_thumb.jpg`
         );
      // Return Full Image Path
      else imagePath = path.resolve(this.fullImagesPath, `${imageName}.jpg`);

      return imagePath;
   };

   /**
    * Check Image Exists or Not
    */
   checkImageExists = async (imagePath: string) => {
      try {
         await fsPromises.access(imagePath);
         return imagePath;
      } catch {
         return null;
      }
   };

   /**
    * Check Thumb Image Exists
    */
   checkThumbImageExists = async (imgName: string): Promise<boolean> => {
      let imgPath: string = this.getImagePath(imgName);

      if (await this.checkImageExists(imgPath)) return true;
      return false;
   };
}
