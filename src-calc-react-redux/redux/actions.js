import {INCREMENT,DECREMENT} from "./reduce-types";
/*
包含所有action的 creator
 */
export const incrementAction = (number)=>({type:INCREMENT,data:number})
export const decrementAction = (number)=>({type:DECREMENT,data:number})

// 异步action creator(返回一个函数)

export const incrementAsync = (number) => {

    return dispatch => {

        setTimeout(() => {

            dispatch(incrementAction(number))

        }, 1000)

    }

}

