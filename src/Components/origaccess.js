import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Access = (props) => {
    return (
        <div className="home-page">
        <div>
            <img id="slack-img" src={props.icon} />
        </div>
            <div>
                <p id="sign-in-msg">Sign in to Slack</p>
            </div>
            <div>
                <input className="email-input" type="email" onChange={props.recordEmail} placeholder="Email Address" value={props.email} />
            </div>
            <div>
                <button onClick={props.checkEmail}>Enter Email</button>
            </div>
            <div>
                <input className="password-input" type="password" onChange={props.recordPassword} placeholder="Password" value={props.password} />
            </div>
            <div>
                <button onClick={props.checkPassword}>Enter Password</button>
            </div>
            <div>
                <input className="username-input" onChange={props.recordUserName} placeholder="Username" value={props.userName} />
            </div>
            <div>
                <button onClick={props.createUser}>Create Account</button>
            </div>
        </div>
    )
}

export default Access;