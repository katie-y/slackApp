import React from "react";

const Access = (props) => {
    return (
        <div>
            <input onChange={props.recordEmail} placeholder="Email Address" value={props.email} />
            <button onClick={props.checkEmail}>Enter Email</button>
            <input type="password" onChange={props.recordPassword} placeholder="Password" value={props.password} />
            <button onClick={props.checkPassword}>Enter Password</button>
            <input onChange={props.recordUserName} placeholder="Username" value={props.userName} />
            <button onClick={props.createUser}>Create Account</button>
        </div>
    )
}

export default Access;