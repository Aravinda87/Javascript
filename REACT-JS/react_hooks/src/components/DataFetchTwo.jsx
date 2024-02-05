import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

    const initialize = {
        loading : true,
        errer : '',
        post : {}
    }

    const reducer = (state ,action) => {
        switch(action.type)
        {
            case 'fetch_successfull' :
                return{
                    loading : false,
                    errer : '',
                    post : action.payload 
                }
            case 'fetch_unsuccessfull' :
                return {
                    loading : false,
                    errer : 'error',
                    post : {} 
                }
            default :
                return state
        }
    }

function DataFetchTwo() {
    const [state,dispatch] = useReducer(reducer,initialize)

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {dispatch({type:'fetch_successfull', payload : res.data})})
        .catch(err => {dispatch({type : 'fetch_unsuccessfull'})})
    },[])
  return (
    <div>
        {state.loading ? 'loading' : post.title}
        {state.errer ? errer : null}
    </div>
  )
}

export default DataFetchTwo