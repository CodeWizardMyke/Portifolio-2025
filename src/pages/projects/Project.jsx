import './Project.css'

import dataProject from '../../data/projects.json';
import ProjectItem from '../../components/_project_item/ProjectItem';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Project() {

  const location = useLocation();
  const hash = location.hash

  useEffect(()=>{
      if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
      }
  },[location ])

  return (
    <section className='view'>
      {
        dataProject.map((item,index) => (
          <ProjectItem item={item} index={index}  key={`project_item_id:${item.id}`}/>
        ))
      }
    </section>
  )
}

export default Project