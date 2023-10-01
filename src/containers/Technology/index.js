import vehicle from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import './/Technology.scss';

function Technology () {
  return (
    <>
      <div className="technology__container">
      <div className="technology__title"><span>03</span> SPACE LAUNCH 101</div>
      <img className="technology__image" src={vehicle}></img>
      <div className="technology__options">
        <div className="technology__option"><span>1</span></div>
        <div className="technology__option"><span>2</span></div>
        <div className="technology__option"><span>3</span></div>
      </div>
      <div className="technology__position">THE TERMINOLOGY...</div>
      <div className="technology__name">LAUNCH VEHICLE</div>
      <p className="technology__text">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>

      </div>

    </>
  )
}

export { Technology };