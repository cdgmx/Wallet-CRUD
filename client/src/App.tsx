import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import WalletOverview from './components/WalletOverview';

function App() {
  return (
    <div className="container-fluid vh-100 bg-secondary ">
      <NavBar />
      <div className='row justify-content-center'>
        <div className='col-md-3 align-items-center '>
          <WalletOverview />
        </div>
      </div>
    </div>
  );
}

export default App;
