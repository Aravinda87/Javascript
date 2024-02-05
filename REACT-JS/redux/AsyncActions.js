const redux = require('redux')
const createStore = redux.createStore

// initialize

const initialstate = {
    loading : true,
    user : [],
    error : ''
}

// action 

const FETCH_USER_REQ = 'FETCH_USER_REQ'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

const fetch_user_req = () =>{
    return{
        type : FETCH_USER_REQ
    }
}
const fetch_user_success = () =>{
    return{
        type : FETCH_USER_SUCCESS
    }
}
const fetch_user_failure = () =>{
    return{
        type : FETCH_USER_FAILURE
    }
}

const render = (state , action) =>{
    switch(action)
    {
        case FETCH_USER_REQ :
            return{

            }
        case FETCH_USER_SUCCESS :
            return{
                
            }
        case FETCH_USER_FAILURE :
            return{
            
        }    
    }
}