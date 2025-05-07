import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Card from "./card";
import { Empty } from "antd";

const ShopComponents = () => {
  const { state, dispatch } = useContext(ShopContext);
  if (!state.data.length) {
    return <Empty />;
  }
  return (
    <>
      <section className=" div_flex container">
        <div className="box">
          {state.data.map((value) => (
            <Card key={value.id} {...value} />
          ))}
        </div>
      </section>
     
    </>
  );
};

export default ShopComponents;
