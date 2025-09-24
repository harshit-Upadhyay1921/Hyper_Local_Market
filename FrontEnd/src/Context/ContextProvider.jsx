import React, { createContext, useState} from 'react';


// eslint-disable-next-line react-refresh/only-export-components
export const StateContext = createContext();


const initialState = {
  showPassword: false
};

export const ContextProvider = ({ children }) => {
  // Manage password visibility toggle
  const [password, setPassword] = useState(false);

  // Track clicked UI items
  const [isClicked, setIsClicked] = useState(initialState);

  // Theme mode (Light or Dark)
  const [mode, setMode] = useState("Light");

  // Change theme mode
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  // Track what was clicked (e.g., showPassword)
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        password,
        setPassword,
        isClicked,
        setIsClicked,
        mode,
        handleModeChange,
        handleClick
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

