/** @jsxImportSource @emotion/react */
import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Headercomp } from '../../Header/Headercomp';
import { ProductList, useCartListDispatch } from '../../store/Context';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { css } from '@emotion/react';

export const ItemDetailpage = () => {
  const products = useContext(ProductList);
  const params = useParams();
  const itemNumber = Number(params.itemNumber);
  const item = products[itemNumber];
  const cartListDispatch = useCartListDispatch();
  const [productStock, setProductStock] = useState<number>(1);
  const handlerAddCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    cartListDispatch({
      type: 'addList',
      payload: {
        img: item.img,
        name: item.name,
        Volume: item.Volume,
        price: item.price,
        information: item.information,
        modelnumber: item.modelnumber,
        stock: item.stock,
        productStock: productStock,
      },
    });
  };
  const handleGoToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    cartListDispatch({
      type: 'addList',
      payload: {
        img: item.img,
        name: item.name,
        Volume: item.Volume,
        price: item.price,
        information: item.information,
        modelnumber: item.modelnumber,
        stock: item.stock,
        productStock: productStock,
      },
    });
  };

  const handlerProductStockPlus = (e: React.MouseEvent<SVGElement>) => {
    if (productStock < item.stock) {
      setProductStock(productStock + 1);
    }
  };
  const handlerProductStockMinus = (e: React.MouseEvent<SVGElement>) => {
    if (productStock > 1) {
      setProductStock(productStock - 1);
    }
  };

  const itemStyle = css`
    background-color: pink;
    min-height: 1000px;
  `;
  return (
    <div css={itemStyle}>
      <Headercomp />
      <img src={item.img}></img>
      <ul>
        <li> {item.name}</li>
        <li> {`Volume:  ${item.Volume}`}</li>
        <li> {`price: ${item.price}`} </li>
        <li> {`information: ${item.information}`}</li>
        <li> {`stock: ${item.stock}`} </li>
      </ul>
      <form>
        <input type="text" value={productStock}></input>
        <AiFillCaretUp onClick={handlerProductStockPlus} />
        <AiFillCaretDown onClick={handlerProductStockMinus} />
        <button onClick={handlerAddCart}> 장바구니 </button>
        <button onClick={handleGoToCart}>
          {' '}
          <Link to={'/CartComp'}>바로구매 </Link>{' '}
        </button>
      </form>
    </div>
  );
};
