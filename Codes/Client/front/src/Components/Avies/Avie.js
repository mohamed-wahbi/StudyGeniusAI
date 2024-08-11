
import React, { useRef } from 'react';
import './avie.css';
import stud1 from '../../Assets/eleveAvis/stud1.png'
import stud2 from '../../Assets/eleveAvis/studCHina.webp'
import stud3 from '../../Assets/eleveAvis/stud3.jpg'
import stud4 from '../../Assets/eleveAvis/stud4.jpg'
import parent1 from '../../Assets/eleveAvis/parent1.jpg'
import parent2 from '../../Assets/eleveAvis/parent2.png'

const Avie = () => {
  const slideRef = useRef(null);

  const handleNext = () => {
    const slide = slideRef.current;
    if (slide) {
      const items = slide.querySelectorAll('.item');
      if (items.length > 0) {
        slide.appendChild(items[0]);
      }
    }
  };

  const handlePrev = () => {
    const slide = slideRef.current;
    if (slide) {
      const items = slide.querySelectorAll('.item');
      if (items.length > 0) {
        slide.prepend(items[items.length - 1]);
      }
    }
  };

  return (
    <div className='avie'>
        <h3 className='titreAvieComponent'>Testimonien</h3>
      <div className="container">
        <div className="slide" ref={slideRef}>
          <div className="item" style={{ backgroundImage: `url(${stud1})` }}>
            <div className="content">
              <div className="name">Switzerland</div>
              <div className='post'>Student</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${stud2})`}}>
            <div className="content">
              <div className="name">Finland</div>
              <div className='post'>Student</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${stud3})`}}>
            <div className="content">
              <div className="name">Iceland</div>
              <div className='post'>Student</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${stud4})` }}>
            <div className="content">
              <div className="name">Australia</div>
              <div className='post'>Student</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${parent1})` }}>
            <div className="content">
              <div className="name">Netherland</div>
              <div className='post'>Parent</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${parent2})` }}>
            <div className="content">
              <div className="name">Ireland</div>
              <div className='post'>Parent</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            </div>
          </div>
        </div>
        <div className="button">
          <button className="prev" onClick={handlePrev}><i class="bi bi-caret-left-fill"></i></button>
          <button className="next" onClick={handleNext}><i class="bi bi-caret-right-fill"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Avie;



