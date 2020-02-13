import React from "react";
import {withRouter} from "react-router-dom";

class Child extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps');
        console.log(this.props)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    render() {
        console.log('render');
        return (
            <div>
               <span>子组件接收到的点击次数是{this.props.count}</span>
            </div>
        )
    }
}

export default Child