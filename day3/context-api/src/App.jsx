import "./App.css";
import ChangeTheme from "./components/ChangeTheme";
import { ThemeContextProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import { LangContextProvider } from "./context/LangContext";
import ChangeLang from "./components/ChangeLang";

const App = () => {
  return (
    <LangContextProvider>
      <ThemeContextProvider>
        <Header />
        <ChangeTheme />
        <ChangeLang />
      </ThemeContextProvider>
    </LangContextProvider>
  );
};

export default App;
