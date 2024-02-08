import { BUY_ICECREAM } from "./icecreamtypes";

const initialstate = {
    noOficecreams : 20
}

const icecreamreducer = (state = initialstate , action) => {
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state,
            noOficecreams : state.noOficecreams - 1
        }
        default : return state
    }
}

export default icecreamreducer