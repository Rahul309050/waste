import React, { useState } from "react";

export const CybersecurityContext = React.createContext();

const CybersecurityProvider = (props) => {
  const [currentInformation, setCurrentInformation] = useState("sa");

  const changeCurrentInformation = (id) => setCurrentInformation(id);

  return (
    <CybersecurityContext.Provider
      value={{ currentInformation, changeCurrentInformation }}
    >
      {props.children}
    </CybersecurityContext.Provider>
  );
};

export default CybersecurityProvider;
