import { Header } from "../../components/Header";
import moon from '../../assets/destination/background-destination-tablet.jpg';
import './Destination.scss';

function Destination() {
  return (
    <>
      <Header/>
      <div className="destination__container">
      <div className="destination__title"><span>01</span> PICK YOUR DESTINATION</div>
      <img className="destination__image" src={moon}></img>
      <div className="destionation__options">
        <div className="destionation__option">MOON</div>
        <div className="destionation__option">MARS</div>
        <div className="destionation__option">EUROPA</div>
        <div className="destionation__option">TITAN</div>
      </div>
      <h3 className="destination__name">MOON</h3>
      <p className="destionation__text">See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

      <div className="destination__distance">
        <div className="distance">AVG. DISTANCE</div>
        <h5 className="distance__km">384.400 KM</h5>
      </div>
      <div className="destination__time">
        <div className="time">EST. TRAVEL TIME</div>
        <h5 className="time__days">3 DAYS</h5>
      </div>
      </div>
    </>
  )
}

export { Destination };
