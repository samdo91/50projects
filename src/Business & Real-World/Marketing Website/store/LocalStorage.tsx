
import { tProducts } from "./interfaces ";

export const seveCartList =(cartList: tProducts[]) =>{

localStorage.setItem("List",JSON.stringify(cartList))}


export const loadCartList =() =>{
    
    const listJson =localStorage.getItem("List")
    if(!listJson){
        return []
    }
    try{
      return JSON.parse(listJson)  
    }catch (e){
        console.log(e)
        return []
    }
    


}