import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootreducer from './Rootreducers'

const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(logger)))

export default store