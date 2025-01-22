import React from 'react'
import './Tecnology.css'

//imports svg from react-icons
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { LiaJava } from "react-icons/lia";
import { SiMysql } from "react-icons/si";

function Tecnology({setTecSelect}) {

  return (
    <div className='wr-tec'>
       <ul className='default-list list-tec'>
        <li className='col-yellow' onClick={() => setTecSelect(1)}>
          <span>JavaScript</span>
          <IoLogoJavascript/>
        </li>
        <li className='col-blue' onClick={() => setTecSelect(5)}>
          <span>React</span>
          <FaReact/>
        </li>
        <li className='col-bronze' onClick={() => setTecSelect(4)}>
          <span>Java</span>
          <LiaJava/>
        </li>
        <li className='col-royalblue' onClick={() => setTecSelect(2)}>
          <span>MySQL</span>
          <SiMysql/>
        </li>
       </ul>
    </div>
  )
}

export default Tecnology