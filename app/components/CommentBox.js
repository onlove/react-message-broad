/**
 * Created by DT274 on 2016/9/7.
 */
import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.css';

export default class CommentBox extends Component {
    constructor(props){
        super(props);
        this.state = {comments: []};
        this.getComments();
    }

    getComments(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: (data) => {
                this.setState({comments: data})
            },
            error: (xhr, status, error) => {
                console.error(error)
            }
        })
    }

    handleCommentSubmit(comment){
        this.setState({comments: this.state.comments.concat(comment)})
    }

    render(){
        return (
            <div className="row">
                 <div className="col-xs-12">
                     <div class="page-header">
                        <h1>评论</h1>
                     </div>
                     <CommentList data={this.state.comments}/>
                  </div>
                  <div className="col-xs-12">
                     <CommentForm hanleCommnetSubmit={this.handleCommentSubmit.bind(this)}/>
                  </div>
            </div>
        )
    }
}
