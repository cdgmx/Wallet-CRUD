import express, {Router} from 'express';
import {createWallet, readWallet, updateWallet, deleteWallet} from '../controllers/WalletController';
import {walletVerification} from '../middlewares/AuthMiddleware';
const router:Router = express.Router();

router.route('/create').post(createWallet);
router.route('/read').get(walletVerification,readWallet);
router.route('/update').put(walletVerification,updateWallet);
router.route('/delete').delete(walletVerification,deleteWallet);

export default router;
