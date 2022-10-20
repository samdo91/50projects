import { ReactNode } from "react"

export type tProductList = {
    children: ReactNode

}
export type tProducts = {
    img: string,
    name: string,
    Volume: string,
    price: string,
    information: string
    modelnumber: number
}



export type tcartAction = {
    type: "addList",
    payload: {
        img: string,
        name: string,
        Volume: string,
        price: string,
        information: string
        modelnumber: number

    }
}

export type tcartState={
    cartList:tProducts[]
}