import React from "react";
import Child from './User'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.clickBtn = this.clickBtn.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount');
        setInterval(() => {
            // this.setState({count: this.state.count + 1});
            // this.setState({count: this.state.count + 1});
        }, 1000)
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        //console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log('componentDidUpdate');
    }

    clickBtn=(id, e)=> {
        console.log(id, e);
        // this.setState({count: this.state.count + 1});
        // this.setState({count: this.state.count + 1});
        //
        // this.setState({count: this.state.count + 1});
        this.setState({count: this.state.count + 1});
        this.setState((state, props) => ({
            count: state.count + 1
        }));
        this.setState((state, props) => ({
            count: state.count + 1
        }))
    };

    render() {
        //console.log('render');
        return (
            <div>
                <span>点击了{this.state.count}次</span>
                <button onClick={(e)=>this.clickBtn(123, e)}>增加</button>
                <Child count={this.state.count}/>
            </div>
        )
    }
}

export default Home