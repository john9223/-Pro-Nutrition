import React, { useState } from "react";

const FoodBox = ({ food }) => {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const handleI = () => {
    const updatedQuantity = quantity + 1;
    const updatedTotal = total + food.calories;
    setQuantity(updatedQuantity);
    setTotal(updatedTotal);
  };

  const handleR = () => {
    setQuantity(0);
    setTotal(0);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.img} alt={food.name} width={"64px"} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={quantity} readOnly />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleI}>
                +
              </button>
            </div>
          </div>
          <p>{`${quantity} ${food.name} = ${total} calories`}</p>
          <div className="control">
            <button className="button reset" onClick={handleR}>
              Reset
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
