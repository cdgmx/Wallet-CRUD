import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from '../store'
const WalletTable = () => {
    

    return (

        <div className="input-data d-flex flex-column ">
            <button type="button" className="btn btn-primary btn-lg mb-3">Create Wallet</button>
            <div>
                <h6> Public Key </h6>
                <div className="input-group  ">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon1">Copy</button>
                    <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div></div>

            <div className='mt-3'>
                <h6> Private Key </h6>
                <div className="input-group  ">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon1">Copy</button>
                    <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div></div>
        </div>
    )
}

export default WalletTable
