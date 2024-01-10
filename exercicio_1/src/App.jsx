import { useState } from "react";
import "./styles/App.css";

export default function App() {
  const [value, setValue] = useState();
  const [data, setData] = useState();

  function removeVogais(string) {
    return string.replace(/[^b-dB-Df-hF-Hj-nJ-Np-tP-Tv-zV-Z-0-9]/g, "");
  }

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    setData(removeVogais(value));
    setValue("");
  };

  return (
    <section>
      <div className="app">
        <h1>Removedor de Vogais</h1>
        <form action="">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={handleClick}>Verificar</button>
        </form>
        <div className="result">
          <p>
            O seu resultado é:<strong>{data}</strong>
          </p>
        </div>
        <p className="footer">By: Gabriel Fulaneto</p>
      </div>
    </section>
  );
}
