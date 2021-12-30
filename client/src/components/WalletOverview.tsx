import React from 'react'
//create Crypto wallet Ethereum
const WalletOverview = () => {
    return (
        <div className='card'>
            <div className='card-header'>
                <h3>Wallet Overview</h3>
            </div>
            <div className='card-body d-flex flex-column justify-content-center'>
                <div className='row text-center'>
                    <h4>Ethereum Balance</h4>
                    <p>0</p>
                </div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Public Key</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Private Key</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Change</button>
                </form>
                <div className='row text-center mt-2'>
                    <h4>Update Balance</h4>
                    <div className='col-md-6'>
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-outline-success" style={{width:"100px"}}>Add</button>
                        </form>
                    </div>
                    <div className='col-md-6'>
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-outline-danger" style={{width:"100px"}}>Subtract</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletOverview
