import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import Wallet from "../models/WalletModel";
import ApiError from "../error/ApiError";

const createWallet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createdWallet = req.body.web3.eth.accounts.create();
      const wallet = new Wallet({
        balance: 0,
        wallet_address: createdWallet.address,
      });
      const savedWallet = await wallet.save();

      savedWallet
        ? res.status(201).json({ data: savedWallet })
        : next(ApiError.internal("unable to save wallet"));
    } catch (err: any) {
      next(ApiError.internal("unable to create wallet"));
    }
  }
);

const readWallet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { wallet_address } = req.body;
      if (!wallet_address) {
        next(ApiError.badRequest("wallet address is required"));
      }
      
      const wallet = await Wallet.findOne({
        wallet_address: wallet_address,
      });

      wallet
        ? res.status(200).json({ data: wallet })
        : next(ApiError.notFound("wallet not found"));
    } catch (err: any) {
      next(ApiError.internal("unable to read wallet"));
    }
  }
);

const updateWallet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { wallet_address, amount } = req.body;
      if (!wallet_address || !amount) {
        next(ApiError.badRequest("wallet address and amount are required"));
      }
      const wallet = await Wallet.findOneAndUpdate(
        {
          wallet_address: wallet_address,
        },
        {
          $inc: {
            balance: amount,
          },
        },
        {
          new: true,
        }
      );

      wallet
        ? res.status(200).json({
            data: wallet,
          })
        : next(ApiError.notFound("wallet not found"));
    } catch (err: any) {
      next(ApiError.internal("unable to update wallet"));
    }
  }
);

const deleteWallet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { wallet_address } = req.body;
      if (!wallet_address) {
        next(ApiError.badRequest("wallet address is required"));
      }
      const wallet = await Wallet.findOneAndDelete({
        wallet_address: wallet_address,
      });

      wallet
        ? res.status(200).json({ data: wallet })
        : next(ApiError.notFound("wallet not found"));
    } catch (err: any) {
      next(ApiError.internal("unable to delete wallet"));
    }
  }
);

export { createWallet, readWallet, updateWallet, deleteWallet };
