import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from '../store'
import { getWallet,updateWallet } from '../actions/walletActions';
import Web3 from "web3";
var web3 = new Web3(Web3.givenProvider || "http://localhost:8000");
const WalletOverview = () => {
    const { wallet, loading, error } = useSelector((state: RootState) => state.wallet);
    const {updateBalance, loading:updateLoading,error:updateError,} = useSelector((state: RootState) => state.updateWallet);
    const dispatch = useDispatch()
    const [walletAddress, setWalletAddress] = useState('');
    const [walletPrivateKey, setWalletPrivateKey] = useState('');
    const [balance, setBalance] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [incrementAmount, setIncrementAmount] = useState(0);
    const [decrementAmount, setDecrementAmount] = useState(0);
    const submitKeys = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const signedData = web3.eth.accounts.sign('test', walletPrivateKey);
            dispatch(getWallet(walletAddress, walletPrivateKey, signedData));
        }
        catch (error) {
            setIsError(true);
            setErrorMessage('Could not sign data with private key');
        }
    }

    const onIncrement = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const signedData = web3.eth.accounts.sign('test', walletPrivateKey);
            dispatch(updateWallet(walletAddress,Math.abs(incrementAmount), signedData));
        }
        catch (error) {
            setIsError(true);
            setErrorMessage('Could not sign data with private key');
        }
    }

    const onDecrement = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const signedData = web3.eth.accounts.sign('test', walletPrivateKey);
            dispatch(updateWallet(walletAddress,-Math.abs(decrementAmount), signedData));
        }
        catch (error) {
            setIsError(true);
            setErrorMessage('Could not sign data with private key');
        }
    }

    useEffect(() => {
        if(updateBalance){
            setBalance(updateBalance['balance']);
            setIsError(false);
        }
    }, [updateBalance]);

    useEffect(() => {
        if (wallet['wallet_address']) {
            setBalance(wallet['balance']);
            setIsError(false);
        }
    }, [wallet, loading]);
    useEffect(() => {
        if (error['message']) {
            setErrorMessage(error['message']);
            setIsError(true);
        }
    }, [error]);

    useEffect(() => {
        if (updateError['message']) {
            setErrorMessage(updateError['message']);
            setIsError(true);
        }
    }, [updateError]);

    return (
        <div className='card'>
            <div className='card-header'>
                <h3>Wallet Overview</h3>
            </div>
            <div className='card-body d-flex flex-column justify-content-center'>
                <div className='row text-center'>
                    {isError ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>{errorMessage}</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                            onClick={() => setIsError(false)}
                        ></button>
                    </div> : <>  </>}
                    <h4>Ethereum Balance</h4>
                    <p>{balance}</p>
                </div>
                <form onSubmit={submitKeys}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Public Key</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            onChange={(e) => setWalletAddress(e.target.value)}
                            value={walletAddress}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Private Key</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"
                            onChange={(e) => setWalletPrivateKey(e.target.value)}
                            value={walletPrivateKey}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Change</button>
                </form>
                <div className='row text-center mt-2'>
                    <h4>Update Balance</h4>
                    <div className='col-md-6'>
                        <form onSubmit={onIncrement}>
                            <div className="mb-3">
                            <input type="number" className="form-control" 
                            onChange={event => setIncrementAmount(parseInt(event.target.value))}
                            />
                            </div>
                            <button type="submit" className="btn btn-outline-success" style={{ width: "100px" }}>Add</button>
                        </form>
                    </div>
                    <div className='col-md-6'>
                        <form onSubmit={onDecrement}>
                            <div className="mb-3">
                            <input type="number" className="form-control" 
                            onChange={event => setDecrementAmount(parseInt(event.target.value))}
                            />
                            </div>
                            <button type="submit" className="btn btn-outline-danger" style={{ width: "100px" }}>Subtract</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletOverview
