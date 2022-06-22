// import supertest, { SuperTest, Test } from 'supertest';
import { promises as fsPromises } from 'fs';
import path from 'path';

import { ImageController } from '../Controllers/ImageController';

const imageController = new ImageController();

describe('Test ImageController Functions', (): void => {
   describe('Save Resized Image', (): void => {
      it('Resize Image', async (): Promise<void> => {
         const fullImagesPath = path.resolve(
            __dirname,
            '../../assets/full',
            'fjord'
         );

         const image = await imageController.resize(
            fullImagesPath,
            'fjord',
            300,
            300
         );

         expect(image).toBeTruthy();
      });
   });
});
