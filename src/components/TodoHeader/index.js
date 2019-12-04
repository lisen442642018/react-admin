import React, { Component } from 'react'

export default class TodoHeader extends Component {
    render() {
        const red = { color:'#F00' }
        return (
            <div style={red}>
                <h1>{this.props.title}</h1>
                <i>{this.props.x+this.props.y}</i>
                {this.props.children}
            </div>
        )
    }
}
