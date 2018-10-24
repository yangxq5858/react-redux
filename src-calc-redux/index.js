import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'
import store from './redux/store'


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