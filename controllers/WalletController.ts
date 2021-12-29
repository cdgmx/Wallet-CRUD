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

      if (!savedWallet) {
        next(ApiError.internal("unable to save wallet"));
      }

      res.status(201).json({
        data: createdWallet,
      });
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

      if (!wallet) {
        next(ApiError.notFound("wallet not found"));
      }

      res.status(200).json({
        data: wallet,
      });
    } catch (err: any) {
      next(ApiError.internal("unable to read wallet"));
    }
  }
);

const updateWallet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { wallet_address, amount } = req.body;
      if (!wallet_address) {
        next(ApiError.badRequest("wallet address is required"));
      }
      const wallet = await Wallet.findOneAndUpdate(
        {
          wallet_address: wallet_address
        },
        {
          $inc: {
            balance: amount,
          },
        }
      );

      if (!wallet) {
        next(ApiError.notFound("wallet not found"));
      }

      res.status(200).json({
        data: wallet,
      });
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

      if (!wallet) {
        next(ApiError.notFound("wallet not found"));
      }

      res.status(200).json({
        data: wallet,
      });
    } catch (err: any) {
      next(ApiError.internal("unable to delete wallet"));
    }
  }
);

export { createWallet, readWallet, updateWallet, deleteWallet };
