var React = require('react');
var ReactDOM = require('react-dom');
var Input1 = React.createClass({

    render: function () {

        return (
            <input value="2323" />

        )
    }
});

var Input2 = React.createClass({

    render: function () {

        return (
            <input defaultValue="2323" />

        )
    }
});

var Input3 = React.createClass({

    render: function () {

        return (
            <input ref={function(input){
                    input.value=3232323;
            }} />

        )
    }
});
ReactDOM.render(
    <Input1/>,
    document.getElementById('demo3')
);
ReactDOM.render(
    <Input2/>,
    document.getElementById('demo4')
);
ReactDOM.render(
    <Input3/>,
    document.getElementById('demo5')
);
var CheckLink = React.createClass({


        render: function () {


            /*To transform rest and spread properties using Babel 6, you need to install the es2015 preset, the transform-object-rest-spread plugin and configure them in the .babelrc file.*/
            var {x,y,...z}={x: 1, y: 2, a: 3, b: 4};
            var { checked, title, ...other } = this.props;
            return <a {...other} title={title}>{'√88 '} {this.props.children}</a>;
        }

    })
    ;


ReactDOM.render(
    <CheckLink href="/checked.html" title="432423432">
        Click here!
    </CheckLink>,
    document.getElementById('demo2')
);


