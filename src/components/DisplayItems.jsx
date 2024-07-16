import SingleItem from "./SingleItem";

export default function DisplayItems({ subs }) {
  return (
    <div>
      <h2>Subscripciones</h2>
      {subs.map((item) => {
        const { price, type, id } = item;
       return  <SingleItem key={id} price={price} type={type} id={id} />;
      })}
    </div>
  );
}
