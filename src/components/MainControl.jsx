import { useState } from "react";
import Balance from "./Balance";
import FormAddSubs from "./FormAddSubs";
import DisplayItems from "./DisplayItems";

export default function MainControl({ count }) {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [subs, setSubs] = useState([]);


  return (
    <>
      <div className="main-control">
        <Balance count={count} />
        <FormAddSubs
          setType={setType}
          setPrice={setPrice}
          type={type}
          price={price}
          setSubs={setSubs}
          subs={subs}
        />
      </div>
      <DisplayItems subs={subs} />
    </>
  );
}
