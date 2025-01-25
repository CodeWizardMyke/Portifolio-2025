import React from 'react'
import "./Footer.css";

import contacts from "../../data/contact.json";
import links from "../../data/links.json";

const navigateTo = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

function Footer() {
  return (
    <footer id='contact_footer'>
      <div className='Footer'>
          <ul className='footer-contact'>
            {
             contacts.map( (item,index) => <li key={`ct-${index}`}> <span>{item.name}</span> <span> {item.contact} </span> </li> ) 
            }
          </ul>
         <div className='box-contact'>
          <h3>Contato pessoal</h3>
          <ul className='contact-link'>
              {
                links.map( (item,index) => (
                  <li key={`lk-${index}`}>
                    <button 
                      type='button'
                      className='bt-link'
                      onClick={()=>
                      navigateTo(item.href)}
                    >{item.name}</button>
                  </li>
                ))
              }
            </ul>
         </div>
        </div>
    </footer>
  )
}

export default Footer