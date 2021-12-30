import React from 'react'

const DeleteWallet = () => {
    return (
        <div>
            <div className="input-data d-flex flex-column mt-2">
               
                <div>
                    <h6> Public Key </h6>
                    <div className="input-group  ">
                        <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    </div>
                </div>
                <button type="button" className="btn btn-danger btn-lg mt-2">Delete Wallet</button>
            </div>
        </div>
    )
}

export default DeleteWallet
