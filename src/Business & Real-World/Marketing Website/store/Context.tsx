import { createContext, Dispatch, useContext, useReducer } from 'react';

import { cartListReducer } from './cartListReducer';
import { tcartAction, tProductList, tProducts } from './interfaces ';
import { loadCartList } from './LocalStorage';
import { Product } from './ProductList';

export const ProductList = createContext<any>([]);
const cartLisContext = createContext<any>([]);
const cartListDispatchContext = createContext<Dispatch<tcartAction> | null>(
  null
);

export const Context = (props: tProductList) => {
  const [cartList, cartListDispatch] = useReducer(cartListReducer, {
    cartList: loadCartList(),
  });

  return (
    <ProductList.Provider value={Product}>
      <cartLisContext.Provider value={cartList}>
        <cartListDispatchContext.Provider value={cartListDispatch}>
          {props.children}
        </cartListDispatchContext.Provider>
      </cartLisContext.Provider>
    </ProductList.Provider>
  );
};

export const useCartList = () => {
  const value = useContext(cartLisContext);

  if (!value) {
    throw new Error('에러뜸 유즈투드리스트야');
  }
  return value;
};

export const useCartListDispatch = () => {
  const value = useContext(cartListDispatchContext);
  if (!value) {
    throw new Error('에러뜸 유즈투드리스트야');
  }
  return value;
};
