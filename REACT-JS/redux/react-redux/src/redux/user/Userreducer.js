import { FETCH_USER_FAILURE, FETCH_USER_REQ, FETCH_USER_SUCCESS } from "./Usertype"

const initialstate = {
    loading : true,
    user :[],
    error :''
}

const userreducer = (state = initialstate ,action) => {
    switch(action.type)
    {
        case FETCH_USER_REQ :
            return{
                ...state,
                loading : true,
                user :[],
                error :''
            }
        case FETCH_USER_SUCCESS :
            return{
                loading : false,
                user :action.payload,
                error :''
            }
        case FETCH_USER_FAILURE :
            return{
                loading : false,
                user :[],
                error : action.payload
            }
        default : return state 
    }

}

export default userreducer