import React, { Component } from 'react';
import PropTypes from 'prop-types'


export default class Counter extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increment:PropTypes.func.isRequired,
        decrement:PropTypes.func.isRequired,
        incrementAsync:PropTypes.func.isRequired,

    }

    increment = () =>{
        // 得到原来的number值
        // const {number} = this.props.store

        const val = this.selector.value * 1
        //更新值
        // this.props.store.dispatch(actions.incrementAction(val))
        // this.setState({number:number + val})
        this.props.increment(val);

    }


    decrement = () =>{
        // 得到原来的number值
        // const {number} = this.props.store
        const val = this.selector.value * 1
        //更新值
        // this.props.store.dispatch(actions.decrementAction(val))
        // this.setState({number:number - val})
        this.props.decrement(val);

    }


    asyncIncrement = () => {
        const val = this.selector.value * 1
        this.props.incrementAsync(val)

        // setTimeout(() => {
        //
        //     const val = this.selector.value * 1
        //
        //     //更新值
        //     // this.props.store.dispatch(actions.incrementAction(val))
        //     // this.setState({number:number + val})
        //     this.props.increment(val);
        //
        // },1000);


    }


    render() {
        // const number = this.props.store.getState()
        const {count} = this.props


        return (
            <div>
                <p>number:{count}</p>
                <div>
                    <select ref={x=>this.selector = x}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                    &nbsp;
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.asyncIncrement}>async add</button>
                </div>
            </div>
        );
    }
}

