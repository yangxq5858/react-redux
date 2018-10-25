/**
 *
 * @param store 老的store值
 * @param action 2个属性
 *              type： 动作的主题，类似于消息主题
 *              data:  动作的数据
 */
import {INCREMENT, DECREMENT} from "./reduce-types";

//计算器的 reducer（还原器）
export function counter(store = 0,action) {

    console.log(store)
    switch (action.type) {
        case INCREMENT:
            return store + action.data
        case DECREMENT:
            return store - action.data
        default:
            return store

    }
}