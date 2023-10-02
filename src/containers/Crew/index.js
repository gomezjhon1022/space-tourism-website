import { useState } from 'react';
import data from '../../assets/data/data.json';
import './Crew.scss';

function Crew() {
  const [crew, setCrew] = useState("DOUGLAS HURLEY");
  const selectedCrew = data.crew.find(item=>item.name===crew);
  const crewImage = require(`../../assets/crew/image-${selectedCrew.image}.png`);

  const handleCrew= (name) => {
    setCrew(name);
  }
  return (
    <>
      <div className="crew__container">
      <div className="crew__title"><span>02</span> MEET YOUR CREW</div>
      <img className="crew__image" src={crewImage}></img>
      <div className="crew__options">
        {data.crew.map((item=><div key={item.name} className={`crew__option ${item.name===crew? 'selected':''}`} onClick={()=>handleCrew(item.name)} ></div>))
        }
      </div>
      <div className="crew__position">{selectedCrew.role}</div>
      <div className="crew__name">{selectedCrew.name}</div>
      <p className="crew__text">{selectedCrew.review}</p>

      </div>
    </>
  )
}

export { Crew };
