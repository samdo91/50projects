/** @jsxImportSource @emotion/react */
import React from 'react';
import { TitleComp } from './Title/TitleComp';
import { BoardComp } from './Board/BoardComp';
import { EventTextComp } from './Board/EventText/EventTextComp';
import { Headercomp } from './Header/Headercomp';
import { css } from '@emotion/react';

export const MarketingWebsite = () => {
  const MarketingWebsiteCss = css`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background-color: pink;
    min-height: 1000px;
  `;
  
  return (
    <div>
      <Headercomp />
      <div css={MarketingWebsiteCss}>
        <TitleComp />
        <EventTextComp />
        <BoardComp />
      </div>
    </div>
  );
};
