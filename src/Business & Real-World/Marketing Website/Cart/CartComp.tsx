import React from "react";
import { useCartList } from "../store/Context";
import style  from "./CartComp.module.css";

export const CartComp= () => {

    const cartList= useCartList()
    console.log(cartList)

    return (<div className={style.cartCompStyle}> CartComp </div>)
 }

