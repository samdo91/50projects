import { tcartAction, tcartState } from './interfaces ';
import { seveCartList } from './LocalStorage';

export const cartListReducer = (state: tcartState, action: tcartAction) => {
  switch (action.type) {
    case 'addList': {
      const newList = state.cartList.concat({
        img: action.payload.img,
        name: action.payload.name,
        Volume: action.payload.Volume,
        price: action.payload.price,
        information: action.payload.information,
        modelnumber: action.payload.modelnumber,
        stock: action.payload.stock,
        productStock: action.payload.productStock
      });

      seveCartList(newList);
      return { cartList: newList };
    }
    case 'deleteList': {
      const newList = state.cartList.filter((List: any) => {
        return action.payload.modelnumber !== List.modelnumber;
      });

      seveCartList(newList);
      return { cartList: newList };
    }
  }
};
