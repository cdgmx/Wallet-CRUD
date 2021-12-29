import mongoose from 'mongoose';

const WalletSchema = new mongoose.Schema({
    balance : {
        type : Number,
        default : 0
    },
    wallet_address : {
        type : String,
        required : true
    }
});

const Wallet = mongoose.model("Wallet", WalletSchema);

export default Wallet;
