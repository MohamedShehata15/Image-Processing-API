import express, { IRouter } from 'express';

import { RouteInterface } from '../core/Interfaces/Route.Interface';
import { ImageController } from '../Controllers/ImageController';

const imageController = new ImageController();

export class ImageRouter implements RouteInterface {
   getPath(): string {
      return '/';
   }

   getRouter(): IRouter {
      const route = express.Router();

      route.get('/', imageController.instructions);
      route.get('/images', imageController.getImage);

      return route;
   }
}
