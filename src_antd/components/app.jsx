import React, { Component } from 'react';
import {Button,message} from 'antd'

export default class App extends Component {

    handleClick = () =>{
        message.success("成功了",2)
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClick} type= 'primary'>点击我</Button>
            </div>
        );
    }
}

