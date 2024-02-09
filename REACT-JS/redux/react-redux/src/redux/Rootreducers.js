import { combineReducers } from "redux";
import cakeReducer from "./cake/cakereducer";
import icecreamreducer from "./icecreams/iceCreamreducer";
import userreducer from "./user/Userreducer";

const rootreducer = combineReducers({
    cake : cakeReducer,
    icecream : icecreamreducer,
    user : userreducer
})

export default rootreducer