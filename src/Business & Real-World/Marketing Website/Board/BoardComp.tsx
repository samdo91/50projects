import React, { useContext } from "react";
import { ProductList } from "../store/Context";
import { ItemComp } from "./Item/ItemComp";
import style from "./BoardComp.module.css";
import { Link, Outlet } from "react-router-dom";

export const BoardComp = () => {
  const Product = useContext(ProductList);

  return (
    <div className={style.boardstyle}>
      {Product.map((item) => {
        return (
          <Link to={`${item.modelnumber}`} key={item.modelnumber}>
            <ItemComp
              key={item.modelnumber}
              img={item.img}
              Volume={item.Volume}
              information={item.information}
              modelnumber={item.modelnumber}
              name={item.name}
              price={item.price}
            />
          </Link>
        );
      })}
      <Outlet />
    </div>
  );
};
