import {INCREMENT,DECREMENT} from "./reduce-types";
/*
包含所有action的 creator
 */
export const incrementAction = (number)=>({type:INCREMENT,data:number})
export const decrementAction = (number)=>({type:DECREMENT,data:number})

