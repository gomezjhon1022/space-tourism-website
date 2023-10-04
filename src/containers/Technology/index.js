import data from '../../assets/data/data.json';
import { useEffect, useState } from 'react';
import './Technology.scss';

function Technology () {
  const [technology, setTechnology] = useState("LAUNCH VEHICLE");
  const [isDesktop, setIsDesktop]= useState(false);
  const selectedTechnology = data.technology.find(item=>item.topic===technology);

  const technologyImage= isDesktop?
  require(`../../assets/technology/image-${selectedTechnology.image2}.jpg`)
  :require(`../../assets/technology/image-${selectedTechnology.image}.jpg`);

  const handleResize = () => {
    setIsDesktop(window.innerWidth>=1024);
  }

  useEffect(()=>{
    window.addEventListener('resize', handleResize);
    handleResize();
    return ()=>{
      window.removeEventListener('resize', handleResize);
    };
  },[]);

  const handleTechnology= (name)=> {
    setTechnology(name)
  }
  return (
    <>
      {
        isDesktop?
        (
          <div className="technology__container">
            <div className='technology--left'>
              <div className="technology__title"><span>03</span> SPACE LAUNCH 101</div>
              <div className='technology__container--desktop'>
                <div className="technology__options">
                  {data.technology.map((item=><div key={item.id} className={`technology__option ${item.topic===technology? 'selected':''}`} onClick={()=>handleTechnology(item.topic)}><span>{item.id}</span></div>))}
                </div>
                <div className='information__container'>
                  <div className="technology__position">THE TERMINOLOGY...</div>
                  <div className="technology__name">{selectedTechnology.topic}</div>
                  <p className="technology__text">{selectedTechnology.description}</p>
                </div>
              </div>
            </div>
            <div className='technology--right'>
              <img className="technology__image" src={technologyImage}></img>
            </div>
          </div>
        ):
        (
          <div className="technology__container">
            <div className="technology__title"><span>03</span> SPACE LAUNCH 101</div>
            <img className="technology__image" src={technologyImage}></img>
            <div className="technology__options">
              {data.technology.map((item=><div key={item.id} className={`technology__option ${item.topic===technology? 'selected':''}`} onClick={()=>handleTechnology(item.topic)}><span>{item.id}</span></div>))}
            </div>
            <div className="technology__position">THE TERMINOLOGY...</div>
            <div className="technology__name">{selectedTechnology.topic}</div>
            <p className="technology__text">{selectedTechnology.description}</p>
          </div>
        )
      }

    </>
  )
}

export { Technology };