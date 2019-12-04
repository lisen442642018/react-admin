import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'lib-flexible'
import App from './App';
import {
    TodoHeader,
    TodoInput,
    TodoList
} from './components'
import LikeButton from './page/home'
import CommentApp from './page/CommentApp'
import "./page/list.css";
import * as serviceWorker from './serviceWorker';

class Title extends Component {
    hanleClickOnTitle() {
        console.log('Click on title');

    }
    render() {
        return (
            <h1 onClick={this.hanleClickOnTitle}>React 小书</h1>
        )
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
            </div>
        );
    }
}

class Index extends Component {
    static defaultProps = {
        list:[]
    }
    constructor() {
        super()

        this.state = {
            list:[]
        }
        this.handleonSubmit = this.handleonSubmit.bind(this)
    }
    handleonSubmit(comment) {
        console.log(comment);
        // this.state.list.push(comment)
        // this.setState({
        //     list:this.state.list
        // })
        this.setState({
            list:this.state.list.concat(comment)
        })

    }
    // handleonSubmit = (comment) =>{

    // }
    render() {
        return (
            <div>
                <CommentApp />
                <TodoHeader title="待办事项" x={1} y={2}>
                    今日事，今日毕
                </TodoHeader>
                <TodoInput onSubmit={this.handleonSubmit} />
                <TodoList list={this.state.list} />
                <Clock></Clock>
                <LikeButton likedText='已赞' unlikedText='赞' />

                

            </div>
        )
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
