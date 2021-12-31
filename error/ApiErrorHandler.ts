import { Request, Response, NextFunction } from 'express';
import ApiError from './ApiError';

function apiErrorHandler(err:any, req: Request, res:Response, next:NextFunction) {
  console.log("api handler");
  if (err instanceof ApiError) {
    console.log(err);
    res.status(err.code)
    res.json({
      message: err.message
    });
    return;
  }

  res.status(500).json({
    message: 'Something went wrong'
  });
  return;
}

export default apiErrorHandler;