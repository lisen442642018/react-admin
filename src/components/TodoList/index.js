import React, { Component } from 'react'
import Itemlist from './Itemlist'
export default class TodoList extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div>
                <ul>
                    {this.props.list.map((todo,id)=>{
                        return(
                            <Itemlist key={id} {...todo} />
                        )
                    })}
                </ul>
                
            </div>
        ) 
    }
}
