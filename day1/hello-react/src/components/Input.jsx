import { useState } from "react";

function Input() {
  const [value, setValue] = useState("");
  const [gender, setGender] = useState("e");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>{value === "" ? "Input boş" : value}</div>

      {value.length !== 0 && <div>{value.length} karakter girdiniz.</div>}

      <br />
      <br />

      <label>Cinsiyet</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="k">Kadın</option>
        <option value="e">Erkek</option>
      </select>

      <div>Seçilen cinsiyet: {gender === "k" ? "Kadın" : "Erkek"}</div>
    </div>
  );
}

export default Input;
