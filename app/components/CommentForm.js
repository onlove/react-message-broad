/**
 * Created by DT274 on 2016/9/7.
 */
import React, { Component } from 'react';

export default class CommentForm extends Component {
    handleSubmit(event){
        event.preventDefault();
        var author = this.refs.author.value;
        var text = this.refs.text.value;
        this.props.handleCommentSubmit({name:author, text:text, date: "刚刚"})
    }
    render(){
        return (
            <form>
                 <div className="form-group" onSubmit="this.handleSubmit.bind(this)">
                      <input type="text"
                             ref="author"
                             className="form-control"
                             defaultValue="姓名"
                             name="author"
                      />
                 </div>
                 <div className="form-group">
                      <textarea
                            className="form-control"
                            ref="text"
                            name="content"
                            id="text"
                            cols="60"
                            rows="7"
                            defaultValue="留言">
                      </textarea>
                 </div>
                 <div className="form-group">
                     <button type="submit" className="btn btn-primary">发表评论</button>
                 </div>
            </form>
        )
    }
}