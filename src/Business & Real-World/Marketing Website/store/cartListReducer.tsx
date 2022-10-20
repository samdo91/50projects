
import { tcartAction, tcartState } from "./interfaces ";


export const cartListReducer=(state:tcartState ,action:tcartAction  )=>{
    switch (action.type) {
        case "addList":{
             const newList= state.cartList.concat(
             {
            img:action.payload.img,
            name:action.payload.name,
            Volume: action.payload.Volume,
            price: action.payload.price,
            information: action.payload.information,
            modelnumber: action.payload.modelnumber 
        })
            return   {cartList:newList }
        }  
        }    
        }
            
        
           




