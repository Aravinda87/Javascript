import {createStore} from 'redux'
import cakeReducer from './cake/cakereducer'

const store = createStore(cakeReducer)

export default store