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

const Section = mongoose.model("Wallet", WalletSchema);

export default Section;
