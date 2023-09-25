import React from 'react';
import { useState } from "react";

const SpaceWebsiteContext = React.createContext();

function SpaceWebsiteProvider({children}) {
  const [menumobileisopen, setMenumobileisopen]=useState("false");

  return (
    <SpaceWebsiteContext.Provider value={{
      menumobileisopen,
      setMenumobileisopen
    }}>
      {children}
    </SpaceWebsiteContext.Provider>
  )
}

export { SpaceWebsiteContext, SpaceWebsiteProvider };