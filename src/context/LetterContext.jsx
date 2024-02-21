import { createContext, useState } from "react";
import fakeData from "shared/fakeData.json";

export const LetterContext = createContext(null);

function LetterContextProvider({ children }) {
  const [letter, setLetter] = useState(fakeData);
  return (
    <LetterContext.Provider value={{ letter, setLetter }}>
      {children}
    </LetterContext.Provider>
  );
}

export default LetterContextProvider;
