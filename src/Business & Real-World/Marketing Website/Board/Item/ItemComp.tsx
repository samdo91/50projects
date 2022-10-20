import React from "react";
import { tProducts } from "../../store/interfaces ";

import style from "./ItemComp.module.css"

export const ItemComp = (props: tProducts) => {
    const { img } = props





    return (<div className={style.itemStyle}>
        <img src={img}></img>

    </div>)
}