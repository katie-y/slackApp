import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AiTwotoneHourglass } from "react-icons/ai";

class Access extends Component {
    state = {
        passwordBoxShowing: false,
        userNameBoxShowing: false
    }

    showPasswordHandler = () => {
        if (this.state.passwordBoxShowing === true) {
          this.setState({
            passwordBoxShowing: false
          })
        }
        else {
          this.setState({
            passwordBoxShowing: true
          })
        }
      }
      
      showUserNameBoxHandler = () => {
        if (this.state.userNameBoxShowing === true) {
          this.setState({
            userNameBoxShowing: false
          })
        }
        else {
          this.setState({
            userNameBoxShowing: true
          })
        }
      }

      updatePasswordBoxHandler = () => {
          if (this.props.emailExists === true){
              this.setState({
                  passwordBoxShowing:true
              })
          }
      }

    render() {
        const passwordBox = () => {
        if(this.state.passwordBoxShowing === true){
            return <div>
            <input className="password-input" type="password" onChange={this.props.recordPassword} placeholder="Password" value={this.props.password} />
            <button onClick={this.props.checkPassword}>Enter Password</button>
        </div>
        }
    }
    
    const userNameBox = () => {
        if(this.state.userNameBoxShowing === true){
            return <div>
            <input className="username-input" onChange={this.props.recordUserName} placeholder="Username" value={this.props.userName} />
            <button onClick={this.props.createUser}>Create Account</button>
        </div>
        }
    }

    return (
        <div className="home-page">
        <div>
            <img id="slack-img" src={this.props.icon} />
        </div>
            <div>
                <p id="sign-in-msg">Sign in to Slack</p>
            </div>
            <div>
                <input className="email-input" type="email" onChange={this.props.recordEmail} placeholder="Email Address" value={this.props.email} />
            </div>
            <div>
                <button onClick={this.props.checkEmail}>Enter Email</button>
            </div>
            <div>{userNameBox()}</div>
            <div>{passwordBox()}</div>
        </div>
    )
}
}

export default Access;