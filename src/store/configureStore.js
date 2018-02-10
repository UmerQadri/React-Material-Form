import { createStore, applyMiddleware } from 'redux'
import authReducer from './reducers'
import thunk from 'redux-thunk';

console.log(authReducer.state)

export default function configureStore() {
    return createStore(authReducer, applyMiddleware(thunk));
}
  