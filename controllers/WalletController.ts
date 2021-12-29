import asyncHandler from 'express-async-handler';
import { Request, Response, NextFunction } from 'express';
import  Wallet from '../models/WalletModel';

const createWallet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try{
        const createdWallet = req.body.web3.eth.accounts.create()
        const wallet = new Wallet({
            balance: 0,
            wallet_address: createdWallet.address
        })
        await wallet.save()
        res.status(201).json({
            success: true,
            data: createdWallet
        });
    }
    catch(err){
        next(err);
    }
});

const readWallet = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
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