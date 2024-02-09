import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootreducer from './Rootreducers'
import thunk from 'redux-thunk'


export const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(logger,thunk)))