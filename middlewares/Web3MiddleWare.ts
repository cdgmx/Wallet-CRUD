import Web3 from "web3";
import { Request, Response, NextFunction } from "express";
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8000'));

const Web3Middleware = (req:Request, res:Response, next:NextFunction) => {
  req.body.web3 = web3;
  next();
}

export default Web3Middleware;