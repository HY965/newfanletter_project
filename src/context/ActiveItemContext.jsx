import { createContext, useState } from "react";

export const ActiveItemContext = createContext(null);

function ActiveItemContextProvider({ children }) {
  const [activeItem, setActiveItem] = useState("권혁우 튜터님");
  return (
    <ActiveItemContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </ActiveItemContext.Provider>
  );
}

export default ActiveItemContextProvider;
