import { useEffect, useState } from 'react';
import data from '../../assets/data/data.json';
import './Destination.scss';

function Destination() {
  const [destination, setDestination] = useState("MOON");
  const [isDesktop, setIsDesktop] = useState(false);
  const selectedDestination =data.destination.find(item=>item.name === destination);
  const destinationImage = require(`../../assets/destination/image-${selectedDestination.name.toLowerCase()}.png`);

  const handleResize = () => {
    setIsDesktop(window.innerWidth>=1024);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return ()=>{
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const handleDestination=(name) => {
    setDestination(name);
  }
  return (
    <>{isDesktop?
    (
      <div className="destination__container">
        <div className='destination--left'>
          <div className="destination__title"><span>01</span> PICK YOUR DESTINATION</div>
          <img className="destination__image" src={destinationImage}></img>
        </div>
        <div className='destination--right'>
          <div className="destionation__options">
            { data.destination.map((item=><div key={item.name} className={`destionation__option ${item.name === destination ? 'selected':''} `} onClick={()=>handleDestination(item.name)}>{item.name}</div>))
            }
          </div>
          <h3 className="destination__name">{selectedDestination.name}</h3>
          <p className="destionation__text">{selectedDestination.description}</p>
          <div className='container__data'>
            <div className="destination__distance">
              <div className="distance">AVG. DISTANCE</div>
              <h5 className="distance__km">{selectedDestination.distance_to_earth}</h5>
            </div>
            <div className="destination__time">
              <div className="time">EST. TRAVEL TIME</div>
              <h5 className="time__days">{selectedDestination.estimated_travel_time}</h5>
            </div>
          </div>
          </div>
        </div>
      )
    :(
      <div className="destination__container">
        <div className="destination__title"><span>01</span> PICK YOUR DESTINATION</div>
        <img className="destination__image" src={destinationImage}></img>
        <div className="destionation__options">
          { data.destination.map((item=><div key={item.name} className={`destionation__option ${item.name === destination ? 'selected':''} `} onClick={()=>handleDestination(item.name)}>{item.name}</div>))
          }
        </div>
        <h3 className="destination__name">{selectedDestination.name}</h3>
        <p className="destionation__text">{selectedDestination.description}</p>

        <div className="destination__distance">
          <div className="distance">AVG. DISTANCE</div>
          <h5 className="distance__km">{selectedDestination.distance_to_earth}</h5>
        </div>
        <div className="destination__time">
          <div className="time">EST. TRAVEL TIME</div>
          <h5 className="time__days">{selectedDestination.estimated_travel_time}</h5>
        </div>
      </div>
    )

    }
    </>
  )
}

export { Destination };
