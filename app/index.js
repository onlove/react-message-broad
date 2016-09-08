/**
 * Created by DT274 on 2016/9/7.
 */

import Rezct, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox.js';

var data = [
    {name: '张三', date: '10分钟前', text: "你好"},
    {name: '李四', date: '5分钟前', text: "你也好"}
];

ReactDOM.render(
    <CommentBox data = {data} />,
    document.querySelector('#app')
)
