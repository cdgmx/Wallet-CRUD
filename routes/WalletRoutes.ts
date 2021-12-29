import express, {Router} from 'express';
import {createWallet, readWallet, updateWallet, deleteWallet} from '../controllers/WalletController';

const router:Router = express.Router();

router.route('/create').post(createWallet);
router.route('/read').get(readWallet);
router.route('/update').put(updateWallet);
router.route('/delete').delete(deleteWallet);

export default router;
