import { useState } from "react";
import "./App.css";

export default function App() {
  const [value, setValue] = useState();
  const [result, setresult] = useState();

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    let sum = 0;

    for (let i = 0; i < value.length; i++) {
      sum += parseInt(value[i]);
    }
    setresult(sum);
  };

  return (
    <section>
      <div className="app">
        <h1>Soma dos Números digitados</h1>
        <form action="">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={handleClick}>Verificar</button>
        </form>
        <div className="result">
          <p>
            A soma dos números digitados é:<strong>{result}</strong>
          </p>
        </div>
        <p className="footer">By: Gabriel Fulaneto</p>
      </div>
    </section>
  );
}
