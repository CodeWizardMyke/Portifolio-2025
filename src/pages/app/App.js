import React from 'react';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="container">
      <Header/>
      <div className='content-outlet'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;