import asyncHandler from 'express-async-handler';
import { Request, Response, NextFunction } from 'express';

const createWallet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    console.log('createWallet');
});

const readWallet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    console.log('readWallet');
});

const updateWallet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    console.log('updateWallet');
});

const deleteWallet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    console.log('deleteWallet');
});

export {
    createWallet,
    readWallet,
    updateWallet,
    deleteWallet
}