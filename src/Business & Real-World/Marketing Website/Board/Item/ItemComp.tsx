/** @jsxImportSource @emotion/react */
import React from 'react';
import { tProducts } from '../../store/interfaces ';
import { css } from '@emotion/react';


export const ItemComp = (props: tProducts) => {
  const { img } = props;
  const itemStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 400px;
    margin: 60px;
  `;

  return (
    <div css={itemStyle}>
      <img src={img}></img>
    </div>
  );
};
