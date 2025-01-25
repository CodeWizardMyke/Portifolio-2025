import React, { useEffect } from 'react';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation()

  const hash = location.hash
  
  useEffect(()=>{
      if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
      }
  },[ location, hash])


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