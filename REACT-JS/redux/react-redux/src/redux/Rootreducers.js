import { combineReducers } from "redux";
import cakeReducer from "./cake/cakereducer";
import icecreamreducer from "./icecreams/iceCreamreducer";

const rootreducer = combineReducers({
    cake : cakeReducer,
    icecream : icecreamreducer
})

export default rootreducer