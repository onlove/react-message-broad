/**
 * Created by DT274 on 2016/9/8.
 */
import React, { Component } from 'react';

export default class Comment extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="list-group-item">
                {this.props.author}:
                {this.props.date}:
                {this.props.children}
            </div>
        )
    }
}
