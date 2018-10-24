import React, { Component } from 'react';
import {DECRMENT, INCRMENT} from "../redux/reduce-types";

export default class App extends Component {


    incrment = () =>{
        // 得到原来的number值
        // const {number} = this.props.store

        const val = this.selector.value * 1
        //更新值
        this.props.store.dispatch({type:INCRMENT,data:val})

        // this.setState({number:number + val})

    }


    decrment = () =>{
        // 得到原来的number值
        // const {number} = this.props.store
        const val = this.selector.value * 1
        //更新值
        this.props.store.dispatch({type:DECRMENT,data:val})
        // this.setState({number:number - val})

    }

    asyncincrment = () => {
        // 得到原来的number值

        setTimeout(() => {

            const val = this.selector.value * 1

            //更新值
            this.props.store.dispatch({type:INCRMENT,data:val})
            // this.setState({number:number + val})

        },1000);


    }


    render() {
        const number = this.props.store.getState()

        return (
            <div>
                <p>number:{number}</p>
                <div>
                    <select ref={x=>this.selector = x}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                    &nbsp;
                    <button onClick={this.incrment}>+</button>
                    <button onClick={this.decrment}>-</button>
                    <button onClick={this.asyncincrment}>async add</button>
                </div>
            </div>
        );
    }
}

