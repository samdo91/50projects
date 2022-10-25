import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailpage } from "./Board/Item/ItemDetailpage";
import { CartComp } from "./Cart/CartComp";
import { LoginComp } from "./Login/LoginComp";
import { MarketingWebsite } from "./MarketingWebsite";
import { Context } from "./store/Context";


export const MainPage = () => {

    return (
        <Context>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<MarketingWebsite />} />
                    <Route path=":itemNumber" element={<ItemDetailpage />} />
                    <Route path={"/CartComp"} element={<CartComp/>} />
                    <Route path={"/LoginComp"} element={<LoginComp/>} />
                </Routes>
            </BrowserRouter>
        </Context>)


}