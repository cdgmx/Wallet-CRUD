import Web3 from "web3";
import { Request, Response, NextFunction } from "express";
import ApiError from "../error/ApiError";
const walletVerification = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const web3 = req.body.web3;
  const { signedData, wallet_address }: any = req.query;
  const publicAddress = web3.eth.accounts.recover(JSON.parse(signedData));

  if (!web3.utils.isAddress(wallet_address)) {
    next(ApiError.badRequest("Invalid Ethereum address"));
  } else if (publicAddress !== wallet_address) {
    next(ApiError.badRequest("You dont have access to this wallet"));
  }
    next();
};

export { walletVerification };
