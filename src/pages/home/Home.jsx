import React, { useState } from 'react'
import './Home.css'

import dataSkils from '../../data/skils.json'
import dataProjects from '../../data/projects.json'
import dataCourse from '../../data/course.json'

import Tecnology from '../../components/_tec/Tecnology'
import TecDetails from '../../components/_tec_details/TecDetails';
import ProjectShow from '../../components/_project_show/ProjectShow';
import AboutMe from '../../components/about/AboutMe'
import AboutIframe from '../../components/about-iframe/AboutIframe'
import Course from '../../components/_course/Course'
import CourseDetails from '../../components/_course/CourseDetails'

function Home() {
  const [tecSelect, setTecSelect] = useState(null);
  const [course, setCourse] = useState(null);
  const [currentSemester, setCurrentSemester] = useState(0);

  return (
    <>
        <section className='view'>
        <article className='parallax bg-show-abstract'>
            <div className="content__home">
                <div className="box-2">
                    <div className="text-higth"><h1>Desenvolvimento Web e Mobile</h1></div>
                    <Tecnology setTecSelect={setTecSelect} />
                </div>
                <div className="box-2">
                  {
                    dataSkils.map((item, index) => (
                        item.id === tecSelect ? (
                          <TecDetails data={item} setTecSelect={setTecSelect} key={`tec-${index}`}/>
                        ):(
                          ''
                        )
                    ))
                  }
                  {
                    !tecSelect && <ProjectShow data={dataProjects} />
                  }
                </div>
            </div>
        </article>
      </section>
      <section>
        <article className='content-def row-wrap-evelyn'>
          <div className="box-2 about-content">
            <AboutIframe />
          </div>
          <div className="box-2 about-content">
            <AboutMe/>
          </div>
        </article>
      </section>
      <section>
        <article className='content-def flex-wrap-reverse'>
          <div className="box-2">
            < Course data={dataCourse} setCourse={setCourse} setCurrentSemester={setCurrentSemester} />
          </div>
          <div className="box-2">
            {
              course && <CourseDetails
                data={course}
                setCourse={setCourse} 
                currentSemester={currentSemester}
                setCurrentSemester={setCurrentSemester}
              />
            }
            {
              !course && (
                <div className='desc_role'>
                  <ul>
                    <li>
                      <span>Cargo</span>
                      <span>Desenvolvedor Front-End / Back-end</span>
                    </li>
                    <li>
                      <span>Nível</span>
                      <span>Desenvolvedor Junior</span>
                    </li>
                    <li>
                      <span>Experiência</span>
                      <span>2 Anos</span>
                    </li>
                  </ul>
                </div>
              )
            }
          </div>
        </article>
      </section>
    </>
  )
}

export default Home