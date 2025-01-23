import React from 'react'
import './ProjectItem.css'
import Carrousel from '../carrousel/Carrousel';

import { FaGithub } from "react-icons/fa";
import { data, useNavigate } from 'react-router-dom';

    function ProjectItem({item,index}) {
        const navigate = useNavigate();


        const navigateTo = (url) => {
        if (url.startsWith('http')) {
            // Abrir URL externa
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            // Navegar para uma rota interna
            navigate(url);
        }
    };

    return (
        <article className={`project ${index > 0 ? "mt-5" : "pt-5"}`}  id={`project-${item.id}`} >
            <div className="box-1">
                <div className="content-txt">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <div className='link-project' >
                        <button
                            type='button'
                            className='bt'
                            onClick={()=> navigateTo(item.url_projeto)}
                        >Visitar projeto</button>
                        <button
                            type='button'
                            className='bt'
                            onClick={()=> navigateTo(item.url_download)}
                        >Download do projeto</button>
                    </div>
                    <button type='button' className='bt-gitLink' onClick={()=> navigateTo(item.url_repositorio)} ><FaGithub/></button>
                </div>
                <Carrousel images={item.images} />
            </div>
            <div className="box-1">
                <div className="movie">
                    {
                        item.movie.link && <iframe src={item.url_video_project} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    }
                </div>
                <div className="content-txt">
                    <h2>{item.movie.title}</h2>
                    <p>{item.movie.text}</p>
                </div>
            </div>
        </article>
    )
}

export default ProjectItem