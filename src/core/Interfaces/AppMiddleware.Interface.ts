import { Response, NextFunction } from 'express';

export interface AppMiddleware {
   getMiddleware(): any;
}
