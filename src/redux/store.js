import {createStore,applyMiddleware} from 'redux'
import MyReducer from "./reducers";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// const store = createStore(counter)
const store = createStore(
    MyReducer,
    composeWithDevTools(applyMiddleware(thunk)) //实现异步和添加调试工具
)

export default store






