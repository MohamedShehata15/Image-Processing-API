import { Response, NextFunction, RequestHandler } from 'express';

export interface AppMiddleware {
   getMiddleware(): RequestHandler;
}
