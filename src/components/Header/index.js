import React from 'react';
import { Link } from 'react-router-dom';
import { SpaceWebsiteContext } from '../SpaceWebsiteContext';
import './Header.scss';

function Header () {
  const { menumobileisopen, setMenumobileisopen }=React.useContext(SpaceWebsiteContext);
  const handlemenu = ()=>{
    setMenumobileisopen(!menumobileisopen);
    console.log("ejecuta hamburgericon");
  }
  return (
    <header>
      <div className="header__left"></div>
      <div className='header__center'></div>
      <div className="header__right">
        <div className='hamburger__icon'
        onClick={handlemenu}></div>
        <nav className='header__right--desktop'>
          <ul>
            <li>
              <Link to={`/`}>HOME</Link>
            </li>
            <li>
              <Link to={`/destination`} >DESTINATION</Link>
            </li>
            <li>
              <Link to={`/crew`}>CREW</Link>
            </li>
            <li>
              <Link to={`/technology`}>TECHNOLOGY</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export { Header }