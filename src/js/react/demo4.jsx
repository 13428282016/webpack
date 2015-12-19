var React = require('react');
var ReactDOM = require('react-dom');
var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];
var CommentBox = React.createClass({

    getInitialState:function(){

        return {data:[]};
    },
    loadData:function(){

      var $=  require('jquery');
      $.getJSON(this.props.url,function(data){

          this.setState({data:data});
      }.bind(this))

    },


    componentDidMount:function(){

        this.loadData();

        setInterval(this.loadData,this.props.interval);

    }
    ,
    render: function () {

        return (

            <div className="commentBox">
                <h1> Comments </h1>
                <CommentList data={this.state.data}/>
                <CommentForm />

            </div >
        )


    }


});
var CommentList = React.createClass({

    render: function () {


        var commentNodes = this.props.data.map(function (comment) {

            return (

                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );

        });
        return (

            < div className="commentList">
                {commentNodes}
            </div >
        )
    }

});

var CommentForm = React.createClass({

    render: function () {

        return (
            <div className="commentForm">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Say something..." />
                <input type="submit" value="Post" />
            </div>

        )


    }


});


var Comment = React.createClass({

    render: function () {

        return (

            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}

            </div>
        )

    }


});



ReactDOM.render(
    <CommentBox /*data={data}*/ url="http://localhost:63343/react/data/comments.json" interval="500"/>,
    document.getElementById('comment_box')
);
