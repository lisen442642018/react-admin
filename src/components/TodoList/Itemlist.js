import React, { Component } from 'react'

export default class Itemlist extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div>
                <li>{this.props.name}</li>
            </div>
        )
    }
}
