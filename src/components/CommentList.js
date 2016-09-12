/**
 * Created by DT274 on 2016/9/8.
 */
import React, { Component } from 'react';
import Comment from './Comment';
export default class CommentList extends Component {
    render(){
        return (
            <div className="list-group">
                {
                    this.props.data.map((item, index) => {
                        return <Comment
                                 key={index}
                                 author={item.name}
                                 date={item.date}>
                                 {item.text}
                               </Comment>
                    })
                }
            </div>
        )
    }
}


import React from 'react'
export default class CommentList extends React.Component {
    render(){
        return(
            <div className="list-group">
                 <Comment author="张三" date="10分前">你好</Comment>
                 <Comment author="李四" date="5分前">你也好啊</Comment>
            </div>
    )}
}