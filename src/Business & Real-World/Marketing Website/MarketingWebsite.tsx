import React from "react";
import { TitleComp } from "./Title/TitleComp";
import style from "./MarketingWebsite.module.css";
import { BoardComp } from "./Board/BoardComp";
import { EventTextComp } from "./Board/EventText/EventTextComp";
import { Headercomp } from "./Header/Headercomp";

export const MarketingWebsite = () => {
  return (
    <div>
        <Headercomp/>
      <div className={style.MarketingWebsiteCss}>
        <TitleComp />
        <EventTextComp />
        <BoardComp />
      </div>
    </div>
  );
};
