import React, { useState } from 'react'

import './TecDetails.css'
import { FcPrevious } from "react-icons/fc";

function TecDetails({data, setTecSelect}) {
    const [description, setDescription] = useState('');

    return (
        <div className='tec-details'>
            <button className='close' onClick={()=> setTecSelect(null) }><FcPrevious/> VOLTAR</button>
            <div className='tec-details__header'>
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <h3>{data.experience}</h3>
            </div>
            <ul className='tec-details__list'>
                {
                    data.other.map((item, index) => (
                        <li key={`tec-${index}`} onClick={() => setDescription(item.description)}> 
                            {item.name}
                        </li>
                    ))
                }
                {
                    !data.other.length ? `${data.name} está em estudo atualmente` : ""
                }
            </ul>
            <div className="description">
                <p>{ data.other.length ? description : data.description }</p>
            </div>
        </div>
    )
}

export default TecDetails