var React = require('react');
var ReactDOM = require('react-dom');

var CheckLink = React.createClass({


        render: function () {


            /*To transform rest and spread properties using Babel 6, you need to install the es2015 preset, the transform-object-rest-spread plugin and configure them in the .babelrc file.*/
            var {x,y,...z}={x:1,y:2,a:3,b:4};
            var { checked, title, ...other } = this.props;
            return <a {...other} title={title}>{'√ '} {this.props.children}</a>;
        }

    })
    ;

ReactDOM.render(
    <CheckLink href="/checked.html" title="432423432">
        Click here!
    </CheckLink>,
    document.getElementById('demo2')
);