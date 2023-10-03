import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SpaceWebsiteContext } from '../SpaceWebsiteContext';
import './Header.scss';

function Header () {
  const { menumobileisopen, setMenumobileisopen }=React.useContext(SpaceWebsiteContext);
  const [routeSelected, setRouteSelected]=useState("/");

  const handlemenu = ()=>{
    setMenumobileisopen(!menumobileisopen);
  }

  const handleRouteSelected = (route) => {
    setRouteSelected(route);
    console.log(route);
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
            <li className={`${routeSelected==='/'?'selected':''}`}>
              <Link to={`/`} onClick={()=>handleRouteSelected('/')}>HOME</Link>
            </li>
            <li className={`${routeSelected==='/destination'?'selected':''}`}>
              <Link to={`/destination`} onClick={()=>handleRouteSelected('/destination')}>DESTINATION</Link>
            </li>
            <li className={`${routeSelected==='/crew'?'selected':''}`}>
              <Link to={`/crew`} onClick={()=>handleRouteSelected('/crew')}>CREW</Link>
            </li>
            <li className={`${routeSelected==='/technology'?'selected':''}`}>
              <Link to={`/technology`} onClick={()=>handleRouteSelected('/technology')}>TECHNOLOGY</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export { Header }