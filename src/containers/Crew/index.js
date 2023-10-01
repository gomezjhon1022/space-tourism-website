import { Header } from "../../components/Header";
import crewmember from '../../assets/crew/image-anousheh-ansari.png';
import './Crew.scss';

function Crew() {
  return (
    <>
      <Header/>
      <div className="crew__container">
      <div className="crew__title"><span>01</span> MEET YOUR CREW</div>
      <img className="crew__image" src={crewmember}></img>
      <div className="crew__options">
        <div className="crew__option"></div>
        <div className="crew__option"></div>
        <div className="crew__option"></div>
        <div className="crew__option"></div>
      </div>
      <div className="crew__position">COMMANDER</div>
      <div className="crew__name">DOUGLAS HURLEY</div>
      <p className="crew__text">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>

      </div>
    </>
  )
}

export { Crew };
