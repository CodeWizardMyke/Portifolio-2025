import React from 'react'
import './Header.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <header {...location.pathname !== '/' ? {style:{color:'#363636'}} :{} }>
        <span 
          className="t-logo"
          onClick={() => navigate('/')}
        >Digital Society.</span>
        <nav className="main-menu">
            <ul className='default-list'>
                <li
                  onClick={()=> navigate('/project')}
                ><span>Projetos</span></li>
                <li
                  onClick={() => navigate('/curriculum')}
                ><span>Curriculo</span></li>
                <li
                  onClick={()=> navigate('/#contact_footer')}
                ><span>Contato</span></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header