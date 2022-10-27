/** @jsxImportSource @emotion/react */
import React from 'react';
import { FcFullTrash } from 'react-icons/fc';
import { tProducts } from '../../store/interfaces ';
import { Link } from 'react-router-dom';
import { useCartListDispatch } from '../../store/Context';
import { css } from '@emotion/react';
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
  const cartItem = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 800px;
    border: 1px solid black;
    padding: 10px;
    margin: 20px;
    align-items: center;
  `;
  const cartImg = css`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 150px;
  `;
  const cartName = css` display: flex;
align-items: center;
margin-left: 40px;
width: 400px;
}
`;
  const cartPrice = css`
    display: flex;
    align-items: center;
    margin-left: 50px;
    width: 400px;
  `;
  const cartStock = css`
    display: flex;
    align-items: center;
    width: 300;
  `;

  const cartDelete = css`
    width: 300px;
    margin: 20px;
  `;
  return (
    <div css={cartItem}>
      <img css={cartImg} src={item.img}></img>
      <span css={cartName}>
        <Link to={`/${item.modelnumber}`} key={item.modelnumber}>
          {item.name}
        </Link>
      </span>
      <span css={cartPrice}>{` price: ${item.price}`}</span>
      <span css={cartStock}> {item.productStock} </span>
      <span css={cartDelete} onClick={HandlerCartDelete}>
        <FcFullTrash>제거</FcFullTrash>
      </span>
    </div>
  );
};
