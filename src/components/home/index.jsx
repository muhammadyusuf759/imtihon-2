import React from "react";
import { useAxiosGet } from "../../hooks/UseAxios/hooks";
import imgg from "../../assets/img/Container.png";
import img1 from "../../assets/img/4.png";
import img2 from "../../assets/img/3.png";
import img3 from "../../assets/img/2.png";
import img4 from "../../assets/img/1.png";

import Card from "./card";

const HomeComponents = () => {
  const { data, loading } = useAxiosGet({ url: "Products" });

  return (
    <section className="container">
      <img src={imgg} alt="" className="big_img" />
      <div className="img_box">
        <img src={img1} alt="" className="pointer" />
        <img src={img2} alt="" className="pointer" />
        <img src={img3} alt="" className="pointer" />
        <img src={img4} alt="" className="pointer" />
      </div>
      <div className="div_boxs">
        {data.map((value) => (
          <Card key={value.id} {...value} />
        ))}
      </div>
    </section>
  );
};

export default HomeComponents;
