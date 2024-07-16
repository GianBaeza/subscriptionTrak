import { useState } from "react";

export default function FormAddSubs({
  setType,
  setPrice,
  type,
  price,
  setSubs,
  subs,
}) {
  const [error, setError] = useState(false);
  const handleSunbs = (e) => {
    e.preventDefault();
    if (price === "" || Number(price) < 0 || type === "") {
      setError(true);
      return;
    }
    setError(false);
    const data = {
      type: type,
      price: price,
      id: Date.now(),
    };
    setSubs([...subs, data]);
    setType("");
    setPrice("");
  };
  return (
    <div>
      <div className="add-subcription">
        <h3>Agregar Subcripciones</h3>

        <form onSubmit={handleSunbs}>
          <p>Servicio</p>
          <select onChange={(e) => setType(e.target.value)} value={type}>
            <option value={" "}>Elegir</option>
            <option value={"netflix"}>Netflix</option>
            <option value={"disneyPlus"}>Disney Plus</option>
            <option value={"hboMax"}>HBO MAX</option>
            <option value={"primeVideo"}>Prime Video</option>
            <option value={"spotify"}>Spotify</option>
          </select>
          <p>Cantidad</p>
          <input
            type="number"
            placeholder="20$"
            id=""
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <input type="submit" value="Agregar" />
          {error ? <p className="error"> Capos invalidos</p> : null}
        </form>
      </div>
    </div>
  );
}
