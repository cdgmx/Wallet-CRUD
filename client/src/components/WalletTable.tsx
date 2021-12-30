import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from '../store'
import { createWallet } from '../actions/walletActions';
import Web3 from "web3";
var web3 = new Web3(Web3.givenProvider || "http://localhost:8000");
const WalletTable = () => {
    const { newWallet, loading, error } = useSelector((state: RootState) => state.newWallet);
    const [publicKey, setPublicKey] = useState('');
    const [privateKey, setPrivateKey] = useState('');
    const dispatch = useDispatch();

    const onCreateWallet = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        dispatch(createWallet());
    }

    const copyClipboard = async (e: { preventDefault: () => void; }, key:any) => {
        navigator.clipboard.writeText(key)
    }

    useEffect(() => {
        if(newWallet){
            setPublicKey(newWallet['address']);
            setPrivateKey(newWallet['privateKey']);
        }
    }, [newWallet,loading]);


    return (

        <div className="input-data d-flex flex-column ">
            <button type="button" className="btn btn-primary btn-lg mb-3" onClick={
                onCreateWallet
            } >Create Wallet</button>
            <div>
                <h6> Public Key </h6>
                <div className="input-group  ">
                    <button className="btn btn-outline-secondary" type="button" id="button-key1"
                    onClick={e => copyClipboard(e,publicKey)}
                    >Copy</button>
                    <input type="text" className="form-control" placeholder="" 
                    value={publicKey}
                    readOnly
                    />
                </div></div>

            <div className='mt-3'>
                <h6> Private Key </h6>
                <div className="input-group  ">
                    <button className="btn btn-outline-secondary" type="button" id="button-key2"
                    onClick={e => copyClipboard(e,privateKey)}
                    >Copy</button>
                    <input type="text" className="form-control" placeholder=""
                    value={privateKey}
                    readOnly
                    />
                </div></div>
        </div>
    )
}

export default WalletTable
