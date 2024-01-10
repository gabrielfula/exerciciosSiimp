import { useState } from "react";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (event) => {
    event.preventDefault();

    const clearInput = () => {
      setValue("");
      setValue2("");
    };

    let number = 0;

    const end = Math.max(value, value2);
    const start = Math.min(value, value2);

    for (let i = start; i <= end; i++) {
      number += i;
    }
    if (value2 === value) {
      setResult(value);
    }

    if (value2 < value) {
      setResult(0);
      clearInput();
      return;
    }

    clearInput();

    setResult(number);
  };

  return (
    <section>
      <div className="app">
        <h1>Soma de Números</h1>
        <form action="">
          <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          -
          <input
            type="text"
            value={value2}
            onChange={(event) => setValue2(event.target.value)}
          />
          <button onClick={handleClick}>Verificar</button>
        </form>
        <div className="result">
          <p>
            A soma dos número entre os valores são: <strong>{result}</strong>
          </p>
        </div>
        <p className="footer">By: Gabriel Fulaneto</p>
      </div>
    </section>
  );
}
