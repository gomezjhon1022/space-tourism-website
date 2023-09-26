import React from 'react';
import { Header } from '../components/Header/index';
import { Content } from '../components/Content/index';
import { Modal } from '../components/Modal';
import { SpaceWebsiteContext } from '../components/SpaceWebsiteContext';

function Home() {
  const { menumobileisopen }=React.useContext(SpaceWebsiteContext);

  return (
    <>
      <Header/>
      {!menumobileisopen&&<Modal/>}
      <Content/>
    </>
  )
}

export { Home };