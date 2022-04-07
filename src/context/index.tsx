import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './store/reducers/index.reducer'
import promise from 'redux-promise-middleware'


const middleware = applyMiddleware(promise, thunk)
export default createStore(reducers, middleware) 