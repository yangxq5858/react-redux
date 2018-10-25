import {combineReducers} from 'redux'
import * as actions from './action_types'

// // store的初始值
// const initComments = [
//     {username: "Tom", content: "React 挺好的"},
//     {username: "Jack", content: "React 好难！"}
// ];


/**
 * 这里必须要返回一个新的state，否则redux无法更新state
 *
 * @param state
 * @param action
 * @returns {*}
 */
function commentReducer(state = [], action) {
    switch (action.type) {
        case actions.ADDCOMMENT: {
            // debugger;

            //第一种写法
            state.unshift(action.data);     //这里的data是 新增的comment对象
            const newState = [...state];
            return newState;

            // //第二种写法
            // return [action.data,...state];
        }
        case actions.DELCOMMENT: {
            // debugger;

            // 不能直接返回state，否则认为是同一个对象，且数据没有修改
            //第一种方式
            state.splice(action.data,1);
            const newState = [...state];
            return newState;

            // 第二种方式 利用filter生成一个新的数组对象
            // const newState = state.filter((comment,idx)=>idx !== action.data);

        }
        case actions.INITCOMMENT:{
            return action.data;
        }
        default:
            return state;

    }


}

/**
 * 将reducer打包 在一起
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const MyReducer = combineReducers({
    commentReducer
})

export default MyReducer