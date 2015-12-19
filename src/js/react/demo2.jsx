/**
 * Created by wmj on 2015/12/19.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var CommentBox=React.createClass({

   render:function(){

       return (
         <div className="commentBox">

               Hello,world! I tam a ComentBox
         </div>

       );
   }

});

ReactDOM.render(
  <CommentBox />,
    document.getElementById('content')

);



