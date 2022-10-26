import React from 'react';
import { Link } from 'react-router-dom';
import style from './Headercomp.module.css';
import { TiShoppingCart } from 'react-icons/ti';

export const Headercomp = () => {
    return (
        <div className={style.headercompStyle}>
            <Link className={style.backMain} to={'/'}>
                {' '}
                perfume
            </Link>
            <div className={style.cartcopm}>
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
