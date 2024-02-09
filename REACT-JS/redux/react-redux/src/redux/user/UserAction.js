import { FETCH_USER_REQ,FETCH_USER_SUCCESS,FETCH_USER_FAILURE } from "./Usertype";
import axios from 'axios'

export const fetch_user_sucess = () => {
    return {
        type :'FETCH_USER_REQ'
    }
}
export const fetch_user_req = users => {
    return {
        type :'FETCH_USER_SUCCESS',
        payload : users
    }
}
export const fetch_user_failure = error => {
    return {
        type :'FETCH_USER_FAILURE',
        payload : error
    }
}

export const fetchUsers = () => {
    return(dispatch)=> {
        dispatch(fetch_user_req)
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetch_user_sucess(users))
        })
        .catch(error =>{
            const errormsg = error.message
            dispatch(fetch_user_failure(errormsg))
        })
    }
}