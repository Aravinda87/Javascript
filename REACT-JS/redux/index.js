const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers //combine 

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// step 1 - action

function buy_cake(){
    return{
        type : BUY_CAKE,
        info : 'first redux'
    }
}

function buy_icecream(){
    return{
        type : BUY_ICECREAM,
        
    }
}

const initialcakes = {
    numCake : 10
}

const initialicecream = {
    numIcecream : 20
}

// step 2 - reducer function

const cakereducer = (state = initialcakes ,action) => {
    switch(action.type)
    {
        case 'BUY_CAKE' : return {
            numCake : state.numCake - 1 
        }
        default :
        return state
    }
}

const icecreamreducer = (state = initialicecream,action) => {
    switch(action.type)
    {
        case 'BUY_ICECREAM' :
            return {
                numIcecream : state.numIcecream - 1
            }
            default :
                return state
    }

}

const rootReducer = combineReducers({           // combine multiple reducers 
    cake : cakereducer,
    icecream : icecreamreducer
})

// create a redux store 

const store = createStore(rootReducer)
console.log('initial state ' , store.getState())
const unsubscribe = store.subscribe(() => console.log(' updated state ', store.getState()))
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_icecream())
store.dispatch(buy_icecream())
unsubscribe()


// store.getState() to access the state
// store.subscribe() to allow the app to sucbscribe 
// store.dispatch() to update the state
// unsubscribe()  function which retun by subscribe method