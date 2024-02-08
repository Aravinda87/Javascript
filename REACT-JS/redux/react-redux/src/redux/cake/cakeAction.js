import { BUY_CAKES } from "./cakeType"

export const buy_cakes = (number = 1 ) => {
    return{
        type : BUY_CAKES,
        payload : number
    }
}