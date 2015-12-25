var React = require('react');
var ReactDOM = require('react-dom');
var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];


var $=require('jquery');
var Bootstrap=require('bootstrap');
var CommentBox = React.createClass({

    getInitialState:function(){

        return {data:[]};
    },
    loadData:function(){


      $.getJSON(this.props.url,function(data){

          console.log(data);
          this.setState({data:data});
      }.bind(this))

    },
    handleCommentSubmit:function(comment)
    {


        var $=  require('jquery');
        var  comments=this.state.data;
        comment.id=Date.now();
        var newComments=comments.concat([comment]);
        this.setState({data:newComments})
        $.ajax({
            url:this.props.url,
            dataType:'json',
            type:'POST',
            data:comment,
            success:function(data)
            {
                //this.setState({data:data});
            }.bind(this),
            error:function(xhr,status,err)
            {
                this.setState({data:comments});
                console.error(this.props.url,status,err.toString());

            }.bind(this)
        });



    },
    componentDidMount:function(){

        this.loadData();

        //setInterval(this.loadData,this.props.interval);   //setInterval(this.loadData,this.props.interval);

    }
    ,
    render: function () {

        return (

            <div className="commentBox">
                <h1> Comments </h1>
                <CommentList data={this.state.data}/>
                <CommentForm handleCommentSubmit={this.handleCommentSubmit}/>

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
        console.log(this.props.data,commentNodes);
        return (

            < div className="commentList">
                {commentNodes}
            </div >
        )
    }

});

var CommentForm = React.createClass({


    getInitialState:function(){

        return {author:'',text:''}
    },
    handleAuthorChange:function(e){

      this.setState({author:e.target.value});
    },
    handleTextChange:function(e){
      this.setState({text:e.target.value});
    },
    handleSubmit:function(e)
    {
      e.preventDefault();
        var author=this.state.author.trim();
        var text=this.state.text.trim();
        if(!text||!author){
            return;
        }

        this.props.handleCommentSubmit({author:author,text:text});
        this.setState({author:'',text:''});

    },
    render: function () {

        return (

            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" onChange={this.handleAuthorChange} />
                <input type="text" placeholder="Say something..."  onChange={this.handleTextChange}/>
                <input type="submit" value="Post" />
            </form>

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
