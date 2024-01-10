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

    const data = value.split(" ");

    for (let cont = 0; cont < data.length; cont++) {
      if (data[cont].length > data.length) {
        setresult(data[cont]);
      }
    }
  };

  return (
    <section>
      <div className="app">
        <h1>Maior Palavra</h1>
        <form action="">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={handleClick}>Verificar</button>
        </form>
        <div className="result">
          <p>
            A maior palavra do texto acima é:<strong>{result}</strong>
          </p>
        </div>
        <p className="footer">By: Gabriel Fulaneto</p>
      </div>
    </section>
  );
}
