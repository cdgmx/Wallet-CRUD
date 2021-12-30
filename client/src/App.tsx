import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import WalletOverview from './components/WalletOverview';
import WalletTable from './components/WalletTable';
import DeleteWallet from './components/DeleteWallet';

function App() {
  return (
    <div className="container-fluid vh-100 bg-secondary ">
      <NavBar />
      <div className='row justify-content-center'>
        <div className='col-md-3 align-items-center '>
          <WalletOverview />
        </div>
        <div className='col-md-5 mt-3'>
          <WalletTable />
          <DeleteWallet />
        </div>
      </div>
    </div>
  );
}

export default App;
