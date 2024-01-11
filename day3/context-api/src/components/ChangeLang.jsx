import { useLang } from "../context/LangContext";

const ChangeLang = () => {
  const { lang, setLang } = useLang();

  return (
    <>
      <br />
      <br />
      <div>Language: {lang}</div> <br />
      <button onClick={() => setLang("tr-TR")}>tr-TR</button>
      <button onClick={() => setLang("en-US")}>en-US</button>
    </>
  );
};

export default ChangeLang;
