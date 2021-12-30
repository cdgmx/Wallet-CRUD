import { Request, Response, NextFunction } from 'express';
import ApiError from './ApiError';

function apiErrorHandler(err:any, req: Request, res:Response, next:NextFunction) {

  if (err instanceof ApiError) {
      console.log(err);
    res.status(err.code).json(err.message);
    return;
  }

  res.status(500).json('something went wrong');
  return;
}

export default apiErrorHandler;