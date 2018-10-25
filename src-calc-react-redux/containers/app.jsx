import React from 'react'
import {connect} from 'react-redux'


import {incrementAction,decrementAction,incrementAsync} from '../redux/actions'
import App from '../components/Counter'

export default connect(
    state => ({count:state}),
    {
        increment:incrementAction,decrement:decrementAction,incrementAsync:incrementAsync
    }
)(App)