import { useState } from "react";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("");
  const [check, setCheck] = useState(false);

  //array dos verificados
  const [isNotPalindromo, setIsNotPalindromo] = useState([]);
  const [isPalindromo, setIsPalindromo] = useState([]);

  const clearInput = () => {
    setValue("");
  };

  const handleClick = (event) => {
    event.preventDefault();

    const filter = value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reverse = filter.split("").reverse().join("");

    if (filter === reverse) {
      setCheck(true);
      setIsPalindromo([...isPalindromo, { text: value }]);
    } else {
      setCheck(false);
      setIsNotPalindromo([...isNotPalindromo, { text: value }]);
    }

    clearInput();
  };
  return (
    <section>
      <div className="app">
        <h1>Verificar Palíndromo</h1>
        <form action="">
          <input
            type="text"
            value={value}
            placeholder="Digite o texto para verificar..."
            onChange={(event) => setValue(event.target.value)}
          />
          <button onClick={handleClick}>Verificar</button>
        </form>
        <div className="result">
          {check &&
            isPalindromo.map((item, key) => {
              return (
                <li key={key}>
                  {item.text}
                  <strong className="blue"> - É um Palíndromo</strong>
                </li>
              );
            })}

          {!check &&
            isNotPalindromo.map((item, key) => {
              return (
                <li key={key}>
                  {item.text}
                  <strong className="red"> - Não um Palíndromo</strong>
                </li>
              );
            })}
        </div>
        <p className="footer">By: Gabriel Fulaneto</p>
      </div>
    </section>
  );
}
