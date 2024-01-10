import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState("tr-TR");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error(
      "useLang hook must be called in LangContextProvider component!"
    );
  }

  return context;
};

export default LangContext;
