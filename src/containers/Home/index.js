import React from 'react';
import { Content } from '../../components/Content/index';
import { Modal } from '../../components/Modal';
import { SpaceWebsiteContext } from '../../components/SpaceWebsiteContext';

function Home() {
  const { menumobileisopen }=React.useContext(SpaceWebsiteContext);

  return (
    <>
      {!menumobileisopen&&<Modal/>}
      <Content/>
    </>
  )
}

export { Home };