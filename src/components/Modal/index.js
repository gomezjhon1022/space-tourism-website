import React from 'react';
import { Link } from 'react-router-dom';
import { SpaceWebsiteContext } from '../SpaceWebsiteContext';
import './Modal.scss';

function Modal() {
  const { menumobileisopen, setMenumobileisopen }=React.useContext(SpaceWebsiteContext);
  const handleModal = ()=>{
    setMenumobileisopen(!menumobileisopen);
  }

  return (
  <div className='modal'>
        <div className='close' onClick={handleModal}></div>
        <nav className='modal--mobile'>
          <ul>
            <li>
              <Link to={`/`} onClick={handleModal}>HOME</Link>
            </li>
            <li>
              <Link to={`/destination`} onClick={handleModal}>DESTINATION</Link>
            </li>
            <li>
              <Link to={`/crew`} onClick={handleModal}>CREW</Link>
            </li>
            <li>
              <Link to={`/technology`} onClick={handleModal}>TECHNOLOGY</Link>
            </li>
          </ul>
        </nav>
  </div>)
}

export { Modal };