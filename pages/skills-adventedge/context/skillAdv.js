import React, { useState } from "react";

export const SkillAdvContext = React.createContext();

const SkillAdvProvider = (props) => {
  const [currentInformation, setCurrentInformation] = useState("pm");

  const changeCurrentInformation = (id) => setCurrentInformation(id);

  return (
    <SkillAdvContext.Provider
      value={{ currentInformation, changeCurrentInformation }}
    >
      {props.children}
    </SkillAdvContext.Provider>
  );
};

export default SkillAdvProvider;
