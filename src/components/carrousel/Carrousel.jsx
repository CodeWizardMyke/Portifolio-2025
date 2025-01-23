import React, { useState } from 'react'
import './Carrousel.css'

function Carrousel({images}) {
  const [current, setCurrent] = useState(0);
  const [prevIndex, setPrevIndex] = useState(images.length - 1);
  const [nextIndex, setNexIndex] = useState(1);
  
  function calculateIndexes(current, images) {
      const prev = current > 0 ? current - 1 : images.length - 1;
      const next = current < images.length - 1 ? current + 1 : 0;
  
      return { prev, next };
  }
  
  function prevButton() {
      const newCurrent = prevIndex;
      const { prev, next } = calculateIndexes(newCurrent, images);
  
      setCurrent(newCurrent);
      setPrevIndex(prev);
      setNexIndex(next);
  }
  
  function nextButton() {
      const newCurrent = nextIndex; 
      const { prev, next } = calculateIndexes(newCurrent, images);
  
      setCurrent(newCurrent);
      setPrevIndex(prev);
      setNexIndex(next);
  }

  return (
    <div className="carrousel">
      <button 
          type='button' 
          className='bt-prev' 
          onClick={prevButton}
      >
          {
              <img src={images.length ? `/project_img/${images[prevIndex].url}` : '' } alt={images.alt} />
          }
      </button>

      <div className='main-image' >
          <button onClick={prevButton} className='previus_hiden'></button>
          {
              images.map((item,index) => (
                  <img 
                      src={`/project_img/${item.url}`}
                      alt={images.alt}
                      className={current === index ? "active" : ""}
                      key={`imagem_projeto-${index}`}
                  />
              ))
          }
          <button onClick={prevButton} className='nexting_hiden'></button>
      </div>
      <button 
          type='button' 
          className='bt-next'
          onClick={nextButton}
      >
          {
              <img src={images.length ? `/project_img/${images[nextIndex ].url}` : '' } alt={images.alt}/>
          }
      </button>
    </div>
  )
}

export default Carrousel