import React,{ Component } from "react"
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './CommentApp.css'

class CommentApp extends Component{
    constructor(){
        super()
        this.state = {
            comments:[]
        }
    }
    handleSubmitComment(comment){
        console.log(comment);
        this.state.comments.push(comment)
        this.setState({
            comments:this.state.comments
        })
        
    }
    render(){
        const style = { color:"#F00" }
        return(
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments} style={style} />{/*写内联样式 */}
            </div>
        )
    }
}
export default CommentApp