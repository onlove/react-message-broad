/**
 * Created by DT274 on 2016/9/8.
 */
import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

export default class CommentBox extends Component {

    constructor(props){
        super(props);
        this.state= {comments: []}
        this.getComments();
    }

    getComments(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: data => {
                this.setState({comments: data})
            },
            error: (xhr, status, error) => {
                console.error(error)
            }
        })
    }
    handleCommentSubmit(comment){
        this.setState({comments:this.state.comments.concat(comment)})
    }
    render(){
        return (
            <div className="container">
                <div className="col-xs-12">
                    <div className="page-header">
                        <h1>评论</h1>
                    </div>
                    <CommentList data={this.state.comments}/>
                </div>
                <div className="col-xs-12">
                    <CommentForm handleCommentSubmit = {this.handleCommentSubmit.bind(this)}/>
                </div>
            </div>
        )
    }
}

