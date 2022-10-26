import React, { useContext } from 'react';
import { ProductList } from '../../store/Context';
import { Link } from 'react-router-dom';
import style from './EventTextComp.module.css';
import { tProducts } from '../../store/interfaces ';

export const EventTextComp = () => {
  const product = useContext(ProductList);
  console.log(product);

  return (
    <div className={style.eventTextStyle}>
      {product.map((item: tProducts) => {
        return (
          <Link to={`${item.modelnumber}`} key={item.modelnumber}>
            <div className={style.eventTextStyle}>{item.information}</div>
          </Link>
        );
      })}
    </div>
  );
};
