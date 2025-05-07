import { Button } from "antd";
import { Trash } from "lucide-react";
import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";

const Card = ({ img, title, price, count, userPrice, id }) => {
  const { _, dispatch } = useContext(ShopContext);
  return (
    <>
      <div className="mini_boxs">
        <img src={img} alt="" className="img" />
        <p className="title">{title}</p>
        <p className="title">{price.toLocaleString()} So'm</p>
        <Button onClick={() => dispatch({ type: "increment", id })}>+</Button>
        <span>{count}</span>

        <Button Click={() => dispatch({ type: "decrement", id })}>-</Button>
        <button onClick={() => dispatch({ type: "delete", id })}>
          <Trash className="pointer" />
        </button>

        <span>{userPrice.toLocaleString()}So'm</span>
      </div>
    </>
    
  );
};

export default Card;
