import React, { Component } from "react";
import Icons from "./Icons";

class Messages extends Component {
    state = {
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
        }
        
      componentDidMount() {
        this.scrollToBottom();
      }
      
      componentDidUpdate() {
        this.scrollToBottom();
      }

    render() {
        return (
            <div>
            <div id="messageWindow">
                <ul className="messages">{this.props.allMessages}</ul>
                <div
                    ref={(msgEnd) => { this.messagesEnd = msgEnd; }}></div>
            </div>
            <div id="msgBox">
                <input id="msgInput" placeholder="Send a message" onChange={this.props.recordMsg} onKeyPress={this.props.addMsg} value={this.props.content} />
                <Icons />
            </div>
            </div>
        )
    }
}

export default Messages;