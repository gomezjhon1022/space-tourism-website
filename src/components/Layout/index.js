import { useLocation } from "react-router-dom";
import { Header } from "../Header";
import './Layout.scss';
import { useEffect, useState } from "react";
import { Modal } from "../Modal";
import React from "react";
import { SpaceWebsiteContext } from "../SpaceWebsiteContext";

function Layout ({children}) {
  const { menumobileisopen }=React.useContext(SpaceWebsiteContext);
  const location = useLocation();
  const [deviceClass, setDeviceClass] = useState("");

  const updateDeviceClass = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setDeviceClass('mobile');
    } else if (width <= 1023) {
      setDeviceClass('tablet');
    } else {
      setDeviceClass('desktop');
    }
  };

  useEffect(()=> {
    updateDeviceClass();
    window.addEventListener('resize', updateDeviceClass);
    return () => {
      window.removeEventListener('resize', updateDeviceClass);
    };
  },[]);


  let routeClass = '';
  switch (location.pathname) {
    case "/destination":
      routeClass= 'destination';
      break;
    case "/crew":
      routeClass= 'crew';
      break;
    case "/technology":
      routeClass= 'technology';
      break;
    default:
      routeClass = 'home';
  }

  return (
    <div className={`main ${deviceClass} ${routeClass}`}>
      {!menumobileisopen&&<Modal/>}
      <Header/>
      {children}
    </div>
  )
}

export { Layout };