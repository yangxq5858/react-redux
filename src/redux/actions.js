import {ADDCOMMENT,DELCOMMENT,INITCOMMENT} from "./action_types";

/**
 * 同步方法  增加评论
 * @param comment 评论数据
 * @returns {{type: string, data: *}}
 */
export const addCommentFunc = (comment)=>({type:ADDCOMMENT,data:comment})


/**
 * 同步方法 删除评论 按下标删除
 * @param comment
 * @returns {{type: (function(*=)), data: *}}
 * @constructor
 */
export const delCommentFunc = (index)=>({type:DELCOMMENT,data:index})


const initComment = (comments)=>({type:INITCOMMENT,data:comments})

/**
 * 异步方法
 * @returns {Function}
 */
export const getComments = ()=> {
    return dispatch=>{
        // 模拟发送请求，获取数据
        setTimeout(()=>{

            const comments = [
                {username: "Tom", content: "React 挺好的"},
                {username: "Jack", content: "React 好难！"}
            ];

            dispatch(initComment(comments));

        },1000)


    }

}