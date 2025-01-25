import React from 'react'
import './Course.css'

function Course({data, setCourse, setCurrentSemester}) {

  function handdlerCourseItemClicked(item){
    setCurrentSemester(0);
    setCourse(item)
  }
  
  return (
    <div className='course'>
        <h2>Cursos e Especializações</h2>
        <ul>
           {
            data.map( (item,index) => (
                <li 
                  className='course-item' 
                  key={`course-item_${index}`}
                  onClick={()=> handdlerCourseItemClicked(item)}
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
