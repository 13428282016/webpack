var React = require('react');
var ReactDOM = require('react-dom');

var CommentBox = React.createClass({
    displayName: 'CommentBox',
    render: function () {

        return React.createElement('div',{className:"commentBox"},"Hello,world!I am 68678678a COmmentBox")

    }
});


ReactDOM.render(React.createElement(CommentBox,null),document.getElementById('content1'));