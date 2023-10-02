import data from '../../assets/data/data.json';
import { useState } from 'react';
import './Technology.scss';

function Technology () {
  const [technology, setTechnology] = useState("LAUNCH VEHICLE");
  const selectedTechnology = data.technology.find(item=>item.topic===technology);
  const technologyImage=require(`../../assets/technology/image-${selectedTechnology.image}.jpg`)
  const handleTechnology= (name)=> {
    setTechnology(name)
  }
  return (
    <>
      <div className="technology__container">
      <div className="technology__title"><span>03</span> SPACE LAUNCH 101</div>
      <img className="technology__image" src={technologyImage}></img>
      <div className="technology__options">
        {data.technology.map((item=><div key={item.id} className={`technology__option ${item.topic===technology? 'selected':''}`} onClick={()=>handleTechnology(item.topic)}>{item.id}</div>))}
      </div>
      <div className="technology__position">THE TERMINOLOGY...</div>
      <div className="technology__name">{selectedTechnology.topic}</div>
      <p className="technology__text">{selectedTechnology.description}</p>

      </div>

    </>
  )
}

export { Technology };