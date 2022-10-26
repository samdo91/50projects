import { ReactNode } from 'react';

export type tProductList = {
  children: ReactNode;
};
export type tProducts = {
  img: string;
  name: string;
  Volume: string;
  price: number;
  information: string;
  modelnumber: number;
  stock: number;
  productStock: number
};

export type tcartAction =
  | {
      type: 'addList';
      payload: {
        img: string;
        name: string;
        Volume: string;
        price: number;
        information: string;
        modelnumber: number;
        stock: number;
        productStock: number
       
      };
    }
  | {
      type: 'deleteList';
      payload: {
        modelnumber: number;
      };
    };

export type tcartState = {
  cartList: tProducts[];
};
