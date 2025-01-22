
import React, { useState } from 'react'

import './CourseDetails.css'
import TableCourse from './TableCourse';

function CourseDetails({data,setCourse}) {
    const [semesters, setSemesters] = useState(true)
    const [dip, setDip] = useState(false)

    function alternateMenu(click){
        if(click === 'diploma'){
            setSemesters(false);
            setDip(true)
        }
        if(click === 'semesters'){
            setSemesters(true);
            setDip(false)
        }

    }

  return (
    <div className='CourseDetail'>
        <div className="course-nav">
            <div>
                <button 
                    type='button'
                    onClick={()=> alternateMenu('diploma') }
                >Diploma</button>
                <button 
                    type='button'
                    onClick={()=> alternateMenu('semesters')}
                >Semestres</button>
            </div>
            <button 
                type='button'
                onClick={()=> setCourse(null)}
            >sair</button>
        </div>
        <div>
           {
            semesters && (
                <div className="table-content">
                    {
                        data.semesters.map( (item,index) => (
                            <TableCourse data={item} key={`tableCourse_${index}`} />
                        ))
                    }
                </div>
            )
           }
           {
            dip && (
                <div className='diploma_iframe'>
                    {data.diploma ? <iframe src={`/diploma/${data.diploma}`} frameborder="0"></iframe> : <p>Nenhum diploma disponível no momento</p>}
                    
                </div>
            )
           }
        </div>
    </div>
)
}

export default CourseDetails;