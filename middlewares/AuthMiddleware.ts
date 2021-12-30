import Web3 from "web3";
import { Request, Response, NextFunction } from "express";
import ApiError from "../error/ApiError";
const walletVerification = (req:Request, res:Response, next:NextFunction) => {
    const web3 = req.body.web3;
    web3.utils.isAddress(req.body.wallet_address) ? next() : next(ApiError.badRequest("Invalid Ethereum address"));
}

export { walletVerification };