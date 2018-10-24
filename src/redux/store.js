/**
 * 创建redux的  store对象
 */

import {createStore} from 'redux'
import {counter} from "./reducers";

const store = createStore(counter)
export default store