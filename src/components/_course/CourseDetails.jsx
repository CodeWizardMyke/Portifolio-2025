
import React, { useState } from 'react'

import './CourseDetails.css'
import TableCourse from './TableCourse';

function CourseDetails({data,setCourse, currentSemester, setCurrentSemester}) {
    const [semesters, setSemesters] = useState(true);

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

    function nextCurrentSemester (){
        if(currentSemester < data.semesters.length -1){
            setCurrentSemester( currentSemester +1 );
        }
    }
    function prevCurrentSemester (){
        if(currentSemester > 0){
            setCurrentSemester( currentSemester -1 );
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
                    <div className="content_buttonsSemesters">
                        <button type='button' onClick={prevCurrentSemester}>voltar</button>
                        <button type='button' onClick={() => nextCurrentSemester()}>avançar</button>
                    </div>

                    {
                        <TableCourse data={data.semesters[currentSemester]} key={`tableCourse_${data.semesters[currentSemester.id]}`} />
                    }
                </div>
            )
           }
           {
            dip && (
                <div className='diploma_iframe'>
                    {data.diploma ? <iframe src={`/diploma/${data.diploma}`} title={data.institution} ></iframe> : <p>Nenhum diploma disponível no momento</p>}
                    
                </div>
            )
           }
        </div>
    </div>
)
}

export default CourseDetails;