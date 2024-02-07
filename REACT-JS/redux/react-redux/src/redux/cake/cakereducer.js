import { BUY_CAKES } from "./cakeType";

const initialstate = {
    noOfcakes : 10 
}

const cakeReducer = (state = initialstate , action) => {
    switch(action.type){
        case BUY_CAKES : return{
            ...state,
            noOfcakes : state.noOfcakes - 1

        }
        default : return state
    }
}

export default cakeReducer
