import React, { Component } from 'react'

export default class TodoInput extends Component {
    constructor(){
        super()
        this.state = {
            name:''
        }
    }
    handleNamechange(event){
        
        this.setState({
            name:event.target.value
        })
    }
    add(){
        if(this.props.onSubmit){
            const {name} = this.state
            this.props.onSubmit({name})
        }
        this.setState({
            name:''
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.handleNamechange.bind(this)} /><button onClick={this.add.bind(this)}>添加</button>
            </div>
        )
    }
}
