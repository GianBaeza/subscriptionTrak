import { useState } from "react";
import Header from "./components/Header";
import FormAddMoney from "./components/FormAddMoney";
import MainControl from "./components/MainControl";

export default function Subcripciones() {
  const [count, setCount] = useState(0);
  const [isvalid, setIsValid] = useState(false);

  const component = isvalid ? (
    <MainControl count={count} />
  ) : (
    <FormAddMoney setCount={setCount} setIsValid={setIsValid} />
  );

  return (
    <div>
      <Header />
      {component}
      <h1>main</h1>
    </div>
  );
}
