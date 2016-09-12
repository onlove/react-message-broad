/**
 * Created by DT274 on 2016/9/8.
 */
import React, { Component } from 'react';

export default class CommentForm extends Component {
    handleSubmit(event){
        event.preventDefault();
        var author = this.refs.author.value;
        var text = this.refs.text.value;
        this.props.handleCommentSubmit({name: author, text: text, date: "刚刚"})

    }
    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <input
                        type="text"
                        ref="author"
                        className="form-control"
                        placeholder="姓名"
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
                        placeholder="留言"
                    >
                    </textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">发表评论</button>
                </div>
            </form>
        )
    }
}


