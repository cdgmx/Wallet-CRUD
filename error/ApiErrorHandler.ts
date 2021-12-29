import { Request, Response, NextFunction } from 'express';
import ApiError from './ApiError';

function apiErrorHandler(err:any, req: Request, res:Response, next:NextFunction) {

  if (err instanceof ApiError) {
    res.status(err.code).json(err.message);
    return;
  }

  res.status(500).json('something went wrong');
}

export default apiErrorHandler;