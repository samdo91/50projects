/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { ProductList } from '../../store/Context';
import { Link } from 'react-router-dom';
import style from './EventTextComp.module.css';
import { tProducts } from '../../store/interfaces ';
import { css } from '@emotion/react';
export const EventTextComp = () => {
  const product = useContext(ProductList);
  const eventTextStyle = css`
    display: flex;
    flex-direction: column;
    margin: 20px;
  `;

  return (
    <div css={eventTextStyle}>
      {product.map((item: tProducts) => {
        return (
          <Link to={`${item.modelnumber}`} key={item.modelnumber}>
            <div css={eventTextStyle}>{item.information}</div>
          </Link>
        );
      })}
    </div>
  );
};
