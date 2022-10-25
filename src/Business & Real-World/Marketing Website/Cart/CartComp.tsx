import React from "react";
import { Headercomp } from "../Header/Headercomp";
import { useCartList } from "../store/Context";
import { tProducts } from "../store/interfaces ";
import { CartBoard } from "./CartBoard/CartBoard";
import style from "./CartComp.module.css";

export const CartComp = () => {
  const cartList = useCartList();

  const prices = cartList.cartList.map((item: tProducts) => {
    return item.price;
  });

  const totalPrice = () => {
    if (prices.length > 0) {
      return prices.reduce((a: number, b: number) => a + b);
    } else{
      return 0
    }
  };
  return (
    <div>
      <Headercomp />
      <div className={style.cartCompStyle}>
        {" "}
        {cartList.cartList.map((item: tProducts) => {
          return <CartBoard key={item.modelnumber} item={item} />;
        })}{" "}
        <span>{`합계: ${totalPrice()}`}</span>
      </div>
    </div>
  );
};
