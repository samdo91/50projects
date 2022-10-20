import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { Headercomp } from "../../Header/Headercomp";
import { ProductList, useCartListDispatch } from "../../store/Context";
import style from "./ItemDetailpage.module.css";
export const ItemDetailpage = () => {
  const products = useContext(ProductList);
  const params = useParams();
  const itemNumber = Number(params.itemNumber);
  const item = products[itemNumber];
  const cartListDispatch = useCartListDispatch();
  const handlerCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    cartListDispatch({
      type: "addList",
      payload: {
        img: item.img,
        name: item.name,
        Volume: item.Volume,
        price: item.price,
        information: item.information,
        modelnumber: item.modelnumber,
      },
    });
  };

  return (
    <div className={style.itemStyle}>
      <Headercomp />
      <img src={item.img}></img>
      <ul>
        <li> {item.name}</li>
        <li> {`Volume:  ${item.Volume}`}</li>
        <li> {`price: ${item.price}`} </li>
        <li> {`information: ${item.information}`}</li>
      </ul>
      <button onClick={handlerCart}> 장바구니 </button>
      <button> 바로구매 </button>
    </div>
  );
};
