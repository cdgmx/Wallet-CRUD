import Web3 from "web3";
import { Request, Response, NextFunction } from "express";
import ApiError from "../error/ApiError";
const walletVerification = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const web3 = req.body.web3;
    const { signedData, wallet_address, private_key }: any = req.query;

    if (private_key) {
      console.log("private_key");
      const account = web3.eth.accounts.privateKeyToAccount(private_key);
      console.log(account);
      if (account.address !== wallet_address) {
        next(ApiError.badRequest("Invalid wallet address"));
      } else {
        next();
      }
    } else {
      const publicAddress = web3.eth.accounts.recover(JSON.parse(signedData));
      console.log("next");
      if (!web3.utils.isAddress(wallet_address)) {
        next(ApiError.badRequest("Invalid Ethereum address"));
      }
      if (publicAddress !== wallet_address) {
        next(ApiError.badRequest("You dont have access to this wallet"));
      }
      next();
    }
  } catch (err) {
    next(ApiError.internal("Something Went Wrong"));
  }
};

export { walletVerification };
