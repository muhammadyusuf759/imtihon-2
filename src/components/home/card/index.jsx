import { Button, notification, Rate } from "antd";
import { Heart, ShoppingBasket } from "lucide-react";
import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";

const Card = (value) => {
  const { state, dispatch } = useContext(ShopContext);
  let { id, title, price, img, rate } = value;
  return (
    <div className="boxs">
      <img src={img} alt="" className="img_bigg" />
      <p className="">{title}</p>
      <Rate count={5} className="rate" defaultValue={rate} />
      <div className="flex">
        <p className="price">{price.toLocaleString()}So'm</p>
        <Button
          onClick={() => {
            dispatch({ type: "add_product", data: value });
          }}
          type="primary"
        >
          Buy
        </Button>
        <Heart />
      </div>
    </div>
  );
};

export default Card;
