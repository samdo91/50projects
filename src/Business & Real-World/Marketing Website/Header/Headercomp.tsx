import React from "react";
import { Link } from "react-router-dom";
import style from './Headercomp.module.css'

export const Headercomp  =() =>{


 return(<div className={style.headercompStyle}>
      <Link className={style.backMain} to={"/"}>
        {" "}
        perfume
      </Link>
      <Link className={style.cartcopm} to={"/CartComp"} > 장바구니</Link>
    </div>)

}