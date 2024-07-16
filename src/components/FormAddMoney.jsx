import { useState } from "react";
import "../components/formaddMoney.css";

export default function FormAddMoney({ setCount, setIsValid }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (input === "" || Number(input) < 0) {
      setError(true);
      return;
    }
    setError(false);
    setCount(Number(input));
    setIsValid(true);
  };

  return (
    <div className="form-add-money">
      <form action="" onSubmit={handleForm}>
        <p>agregar presupuesto</p>
        <input
          type="number"
          name=""
          placeholder="300$"
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Agregar" />
        {error ? <p className="error">Presupuesto invalido</p> : null}
      </form>
    </div>
  );
}
