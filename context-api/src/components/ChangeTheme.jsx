import { useTheme } from "../context/ThemeContext";

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div>Theme: {theme}</div> <br />
      <button
        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      >
        Use {theme === "dark" ? "Light" : "Dark"} Theme
      </button>
    </>
  );
};

export default ChangeTheme;
