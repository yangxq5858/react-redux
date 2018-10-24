import React, { Component } from 'react';

export default class App extends Component {
    state={
        number:0
    }

    incrment = () =>{
        // 得到原来的number值
        const {number} = this.state

        const val = this.selector.value * 1
        //更新值
        this.setState({number:number + val})

    }


    decrment = () =>{
        // 得到原来的number值
        const {number} = this.state
        //更新值
        const val = this.selector.value * 1
        //更新值
        this.setState({number:number - val})

    }

    asyncincrment = () => {
        // 得到原来的number值
        const {number} = this.state
        setTimeout(() => {

            const val = this.selector.value * 1
            //更新值
            this.setState({number:number + val})

        },1000);


    }


    render() {
        const {number} = this.state

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

