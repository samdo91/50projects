/** @jsxImportSource @emotion/react */
import React from 'react';
import { Headercomp } from '../Header/Headercomp';
import { useCartList } from '../store/Context';
import { tProducts } from '../store/interfaces ';
import { CartBoard } from './CartBoard/CartBoard';

import { css } from '@emotion/react';

export const CartComp = () => {
  const cartList = useCartList();

  const prices = cartList.cartList.map((item: tProducts) => {
    return { price: item.price, productStock: item.productStock };
  });

  const totalPrice = () => {
    if (prices.length > 0) {
      const pricelist = prices.map((product: tProducts) => {
        return product.price * product.productStock;
      });
      console.log(pricelist);

      return pricelist.reduce((a: number, b: number) => a + b);
    } else {
      return 0;
    }
  };

  return (
    <div>
      <Headercomp />
      <div
        css={css`
          background-color: pink;
          min-height: 1000px;
        `}
      >
        {cartList.cartList.map((item: tProducts) => {
          return <CartBoard key={item.modelnumber} item={item} />;
        })}
        <span>{`합계: ${totalPrice()}`}</span>
      </div>
    </div>
  );
};
