/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import { css } from '@emotion/react';
import img from '../store/perfumeImg/shutterstock_565659754.webp';

export const Headercomp = () => {
  const backMain = css`
    display: flex;
    height: 60px;
    width: 300px;
    background-image: url(${img});
    background-size: cover;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    border-radius: 5px;
  `;

  return (
    <div
      css={css`
        display: flex;
        background-color: azure;
      `}
    >
      <Link css={backMain} to={'/'}>
        {' '}
        perfume
      </Link>
      <div
        css={css`
          margin-left: auto;
          padding: 20px;
        `}
      >
        <Link to={'/LoginComp'}>로그인</Link>|
        <Link to={'/CartComp'}>
          {' '}
          <TiShoppingCart />
          장바구니
        </Link>
      </div>
    </div>
  );
};
