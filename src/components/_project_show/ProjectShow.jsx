import React from 'react'
import './ProjectShow.css'
import { FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function ProjectShow({data}) {
    const navigate = useNavigate()

    return (
        <div className='project-show'>
            <div className="main-projects">
                <h1>Principais projetos</h1>
                <ul className="projects-list">
                    {
                        data.map((item, index) => (
                            <li 
                                key={`project-${index}`}
                                onClick={()=> navigate(`/project#project_item_${item.id}`)}
                            >
                                <h3>{item.name}</h3>
                                <p>{item.subTitle}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <a href='https://github.com/CodeWizardMyke?tab=repositories' target='_blank' className='bt-git-link'>
                <span>Repositórios</span>
                <FaGithub/>
            </a>
        </div>
    )
}

export default ProjectShow;