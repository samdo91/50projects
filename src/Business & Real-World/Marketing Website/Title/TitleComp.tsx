/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import img from "../store/perfumeImg/shutterstock_565659754.webp"
export const TitleComp = () => {
    const h1= css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: brown;
    border: 1px solid black;
    height: 300px;
    width: 1800px;
    background-image: url(${img});
    background-size: cover;
    `
  return (
    
      <h1 css={h1}> perfume</h1>
   

  );
};
