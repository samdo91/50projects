/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { ProductList } from '../store/Context';
import { ItemComp } from './Item/ItemComp';
import { Link, Outlet } from 'react-router-dom';
import { tProducts } from '../store/interfaces ';
import { css } from '@emotion/react';

export const BoardComp = () => {
  const Product = useContext(ProductList);
  const boardstyle = css`
    display: flex;
    flex-wrap: wrap;
  `;

  return (
    <div css={boardstyle}>
      {Product.map((item: tProducts) => {
        return (
          <Link to={`${item.modelnumber}`} key={item.modelnumber}>
            <ItemComp
              key={item.modelnumber}
              img={item.img}
              Volume={item.Volume}
              information={item.information}
              modelnumber={item.modelnumber}
              name={item.name}
              price={item.price}
              stock={item.stock}
              productStock={item.productStock}
            />
          </Link>
        );
      })}
      <Outlet />
    </div>
  );
};
