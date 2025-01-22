import React from 'react'
import "./Footer.css";

import dataContact from "../../data/contact.json";

function Footer() {
  return (
    <footer>
      <div className='Footer'>
          <ul className='footer-contact'>
            {
              dataContact.map((item,index)=>(
                !item.link && (
                  <li key={`footer_contact-${index}`}>
                      <div className="list-item-f">
                        <span className='title'>{item.name}</span>
                        <span>{item.contact}</span>
                      </div>
                    </li>
                )
              ))
            }
          </ul>
         <div className='box-contact'>
          <h3>Link externos</h3>
          <ul className='contact-link'>
              {
                dataContact.map((item,index) => (
                  item.link && (
                    <li key={`contact-link-${index}`}>
                      { item.name === 'Email' && <a href={`mailto:${item.contact} `} target="_blank" >{item.name}</a> }
                      { item.name === 'Whatsapp' && <a href={`https://wa.me/${item.contact} `} target="_blank" >{item.name}</a> }
                      { item.name === 'Git Hub' && <a href={`${item.contact} `} target="_blank" >{item.name}</a> }
                      { item.name === 'linkedIn' && <a href={`${item.contact} `} target="_blank" >{item.name}</a> }
                    </li>
                  )
                ))
              }
            </ul>
         </div>
        </div>
    </footer>
  )
}

export default Footer