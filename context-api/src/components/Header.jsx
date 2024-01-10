import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";

const Header = () => {
  const { theme } = useTheme();
  const { lang } = useLang();

  return (
    <div>
      <h3>Header</h3>
      Theme: {theme} <br />
      Language: {lang}
      <hr />
    </div>
  );
};

export default Header;
