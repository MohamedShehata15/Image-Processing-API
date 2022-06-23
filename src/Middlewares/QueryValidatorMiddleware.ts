import { Request, Response, NextFunction, RequestHandler } from 'express';

import { AppMiddleware } from './../core/Interfaces/AppMiddleware.Interface';

export class QueryValidator implements AppMiddleware {
   getMiddleware(): RequestHandler {
      return (
         req: Request,
         res: Response,
         next: NextFunction
      ): Response | void => {
         const imgWidth: string = req.query.width as string;
         const imgHeight: string = req.query.height as string;

         if (imgWidth || imgHeight) {
            if (!Number(imgWidth)) {
               return res.status(400).json({
                  message: 'Width must be number',
                  status: 'fail'
               });
            }

            if (!Number(imgHeight)) {
               return res.status(400).json({
                  message: 'Height must be number',
                  status: 'fail'
               });
            }
         }

         next();
      };
   }
}
