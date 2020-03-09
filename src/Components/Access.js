import React, { Component } from "react";

class Access extends Component {

    render() {
        const passwordBox = () => {
            if (this.props.passwordBoxShowing === true && this.props.emailBoxShowing === false) {
                return <div id="password-box">
                    <input className="password-input" type="password" onChange={this.props.recordPassword} placeholder="Enter your password" value={this.props.password}  />
                    <hr id="password-line"></hr>
                    <button id="password-button" onClick={this.props.checkPassword}>Login</button>

                </div>
            }
        }

        const userNameBox = () => {
            if (this.props.userNameBoxShowing === true && this.props.emailBoxShowing === true) {
                return <div id="create-new-account">
                    <p id="create-account-header">Create a Slack account</p>
                    <input className="email-input" type="email" onChange={this.props.recordEmail} placeholder="Please enter your email address" value={this.props.email} />
                    <input className="username-input" onChange={this.props.recordUserName} placeholder="User name" value={this.props.userName} />
                    <div id="password-box">
                        <input className="password-input" type="password" onChange={this.props.recordPassword} placeholder="Password" value={this.props.password} />
                        <hr id="password-line"></hr>
                        <button id="create-account-btn" onClick={this.props.createUser}>Create Account</button>
                    </div>
                </div>
            }
        }


        const emailBox = () => {
            if (this.props.emailBoxShowing === true && this.props.passwordBoxShowing === false && this.props.userNameBoxShowing === false) {
                return <div>
                    <div>
                        <p id="sign-in-msg">Sign in to Slack</p>
                    </div>
                    <div id="email-input-box">
                        <input type="email" className="email-input" onChange={this.props.recordEmail} placeholder="Please enter your email address" value={this.props.email}
                            onKeyPress={this.props.checkEmail} />
                    </div>
                    <hr id="home-line"></hr>
                </div>
            }
        }

        return (
            <div className="home-page">
                <div>
                    <img id="slack-img" src={this.props.icon} alt="" />
                </div>
                {emailBox()}
                {userNameBox()}
                {passwordBox()}
            </div>
        )
    }
}

export default Access;