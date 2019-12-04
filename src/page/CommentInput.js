import React, { Component,createRef } from 'react'
//react里面通过ref来获取组件或者dom元素。要使用ref之前必须先调用react.createRef方法来创建一个ref
export default class CommentInput extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            content:''
        }
        this.inputDom = createRef()
    }
    handleUsernameChange(event){
        this.setState({
            username:event.target.value
        })
    }
    handleContentChange(event){
        this.setState({
            content:event.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            const { username,content } = this.state
            this.props.onSubmit({ username,content })  
        }
        this.setState({content:''})
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} ref={this.inputDom} />
                        
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}
