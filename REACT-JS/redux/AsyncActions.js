const redux = require('redux')
const createStore = redux.createStore

// for api fetch

const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

// initialize

const initialstate = {
    loading : false,
    user : [] ,
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
const fetch_user_success = users =>{
    return{
        type : FETCH_USER_SUCCESS,
        payload : users
    }
}
const fetch_user_failure = error =>{
    return{
        type : FETCH_USER_FAILURE,
        payload : error
    }
}

const reducer = (state = initialstate , action) =>{
    switch(action.type)
    {
        case FETCH_USER_REQ :
            return{
                ...state,
                loading : true,
                user : [],
                error : ''
            }
        case FETCH_USER_SUCCESS :
            return{
                ...state,
                loading : false,
                user : action.payload,
                error : ''
            }
        case FETCH_USER_FAILURE :
            return{
                ...state,
                loading : true,
                user : [],
                error : action.payload
        }    
    }
}

const fetchUsers = () => {
    return function(dispatch){
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data.map(user => user.id)
            dispatch(fetch_user_success(users))
        })
        .catch(error => {
            dispatch(fetch_user_failure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware)) 
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())