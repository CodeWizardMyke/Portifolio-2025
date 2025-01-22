import React from 'react'
import './Course.css'

function Course({data, setCourse}) {
  return (
    <div className='course'>
        <h2>Cursos e Especializações</h2>
        <ul>
           {
            data.map( (item,index) => (
                <li 
                  className='course-item' 
                  key={`course-item_${index}`}
                  onClick={()=> setCourse(item)}
                >
                    <h3>{item.institution}</h3>
                    <span>{item.teaching}</span>
                    <span>{item.state}</span>
                </li>
            ))
           }  
        </ul>
    </div>
  )
}

export default Course
