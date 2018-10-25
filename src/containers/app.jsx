import React from 'react'
import {PropTypes} from 'prop-types'

import CommentAdd from '../components/comment-add/comment-add'
import CommentList from '../components/comment-list/comment-list'
import connect from "react-redux/es/connect/connect";
import {addCommentFunc, delCommentFunc,getComments} from "../redux/actions";

class App extends React.Component {
    static propTypes = {
        comments:PropTypes.array.isRequired,
        addCommentFunc:PropTypes.func.isRequired,
        delCommentFunc:PropTypes.func.isRequired,
        getComments: PropTypes.func.isRequired
    }


    componentDidMount(){
        this.props.getComments();
    }


    render() {
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.props.addCommentFunc}/>
                    <CommentList comments={this.props.comments} deleteComment={this.props.delCommentFunc} />
                </div>
            </div>
        )
    }
}

// redux包装了state和方法
export default connect(
    state => ({comments:state}),
    {
        addCommentFunc,delCommentFunc,getComments
    }
)(App)