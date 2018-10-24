import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import {counter} from "./redux/reducers";
import App from './components/app'


const store = createStore(counter)


function render() {
    ReactDOM.render(
        (
            <App store={store}/>
        ),
        document.getElementById('root'))
}

// 初始化组件
render()

// 但有消息时，需要重新渲染
store.subscribe(()=>{
    render()
})