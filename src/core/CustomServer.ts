import express, { Router } from 'express';

import { AppMiddleware } from './Interfaces/AppMiddleware.Interface';
import { RouteInterface } from './Interfaces/Route.Interface';

export class CustomServer {
   private readonly _server = express();

   route(router: RouteInterface) {
      this._server.use(router.getPath(), router.getRouter());
      return this._server;
   }
   listen(port: number) {
      console.log(`Server is listening at http://localhost:${port}`);
      this._server.listen(port);
   }

   middleware(middleware: AppMiddleware) {
      this._server.use(middleware.getMiddleware());
   }
}
