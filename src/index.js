
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox';

var data = [
    {name: "张三", date: "10分钟前", text: "你好"},
    {name: "李四", date: "5分钟前", text: "你也好"}
]

let root = document.getElementById("app");

ReactDOM.render(<CommentBox data={data}/>, root)

