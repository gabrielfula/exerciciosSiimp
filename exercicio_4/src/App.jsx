import { useState } from "react";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("");
  const [numbers, setNumbers] = useState([]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    const list = [];

    for (let i = 1; i <= value; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        list.push("Hello World");
      } else if (i % 5 === 0) {
        list.push("World");
      } else if (i % 3 === 0) {
        list.push("Hello");
      } else {
        list.push(i);
      }
    }

    setValue("");
    setNumbers(list);
  };

  return (
    <section>
      <div className="app">
        <h1>Lista de Números</h1>
        <form action="">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={handleClick}>Verificar</button>
        </form>
        <div className="result">
          <p>A listagem de números é:</p>
          {numbers.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
        </div>
        <p className="footer">By: Gabriel Fulaneto</p>
      </div>
    </section>
  );
}
