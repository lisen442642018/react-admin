import React, { Component } from 'react';

import { Button } from 'antd'
class LikeButton extends Component {
    constructor() {
        super()
        this.state = {
            isLiked: false,
            name: 'tony'
        }
    }
    handleClickOnLickButton() {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }
    render() {
        const likedText = this.props.likedText || '取消'
        const unlikedText = this.props.unlikedText || '点赞'
        return (
            <Button onClick={this.handleClickOnLickButton.bind(this)} type="primary">
                {this.state.isLiked ? likedText : unlikedText} 👍
            </Button>

        )
    }
}
export default LikeButton;