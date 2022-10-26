import React from 'react';
import style from './CartBoard.module.css';
import { FcFullTrash } from 'react-icons/fc';
import { tProducts } from '../../store/interfaces ';
import { Link } from 'react-router-dom';
import { useCartListDispatch } from '../../store/Context';

type tCartBoard = {
  item: tProducts;
};

export const CartBoard = (props: tCartBoard) => {
  const { item } = props;
  const cartListDispatch = useCartListDispatch();
  const HandlerCartDelete = (e: React.MouseEvent<HTMLSpanElement>) => {
    cartListDispatch({
      type: 'deleteList',
      payload: {
        modelnumber: item.modelnumber,
      },
    });
  };

  return (
    <div className={style.cartItem}>
      <img className={style.cartImg} src={item.img}></img>
      <span className={style.cartName}>
        {' '}
        <Link to={`/${item.modelnumber}`} key={item.modelnumber}>
          {' '}
          {item.name}
        </Link>
      </span>
      <span className={style.cartPrice}>{` price: ${item.price}`}</span>
      <span className={style.cartStock}> {item.productStock} </span>
      <span className={style.cartDelete} onClick={HandlerCartDelete}>
        {' '}
        <FcFullTrash>제거</FcFullTrash>
      </span>
    </div>
  );
};
