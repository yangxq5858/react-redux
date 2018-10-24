/**
 * 创建redux的  store对象
 *
 * redux 默认只能处理同步
 */

import {createStore,applyMiddleware} from 'redux'
import {counter} from "./reducers";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// const store = createStore(counter)
const store = createStore(
    counter,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store