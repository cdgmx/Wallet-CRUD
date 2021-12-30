import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from '../store'
import { deleteWallet } from '../actions/walletActions';
import Web3 from "web3";
var web3 = new Web3(Web3.givenProvider || "http://localhost:8000");

const DeleteWallet = () => {
    const { removeStatus, loading, error } = useSelector((state: RootState) => state.removeStatus);
    const dispatch = useDispatch()
    const [walletAddress, setWalletAddress] = useState('');
    const [walletPrivateKey, setWalletPrivateKey] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSucess, setIsSucess] = useState(false);


    const submitKeys = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const signedData = web3.eth.accounts.sign('test', walletPrivateKey);
            dispatch(deleteWallet(walletAddress, signedData));
        }
        catch (error) {
            setIsError(true);
            setErrorMessage('Could not sign data with private key');
        }
    }

    useEffect(() => {
        if (removeStatus['status'] === 200) {
            setIsSucess(true);
            setIsError(false);
        }
    }, [removeStatus, loading]);

    useEffect(() => {
        if (error['message']) {
            setIsError(true);
            setIsSucess(false);
            setErrorMessage(error['message']);
        }
    }, [error]);

    return (
        <div>
            <div className="input-data d-flex flex-column mt-2">
                <form onSubmit={submitKeys}>
                    {isError ? <div className="alert alert-danger" role="alert" >{errorMessage} </div>: <></>}
                    {isSucess ? <div className="alert alert-success" role="alert">{'Success!'} </div>: <></>}
                    <h6> Public Key </h6>
                    <div className="input-group  ">
                        <input type="text" className="form-control" placeholder="" 
                        onChange={(e) => setWalletAddress(e.target.value)}
                        value={walletAddress}
                        />
                    </div>
                    <h6> Private Key </h6>
                    <div className="input-group  ">
                        <input type="text" className="form-control" placeholder="" 
                        onChange={(e) => setWalletPrivateKey(e.target.value)}
                        value={walletPrivateKey}
                        />
                    </div>
                    <button type="submit" className="btn btn-danger btn-lg mt-2">Delete Wallet</button>
                </form>
            </div>
        </div>
    )
}

export default DeleteWallet
