import React, { Component } from 'react';
import './App.css';
import Time from "react-time";
import Access from "./Components/Access";
import maleIcon from "./user-male-alt-icon.png";
import femaleIcon from "./user-female-alt-icon.png";

class App extends Component {
  state = {
    tempEmail: "",
    tempPassword: "",
    tempUserName:"",
    tempIndex: "",
    users: [
      { email: "katie_york@hotmail.co.uk", userName: "Katie", password: "password123", profilePic: "" },
      { email: "owen@hotmail.co.uk", userName: "Owen", password: "password1234", profilePic: "" }
    ],
    messages: [
      { profilePic: femaleIcon, userName: "Katie", time: 12, content: "Hello" },
      { profilePic: femaleIcon, userName: "Katie", time: 12, content: "How are you?" },
      { profilePic: maleIcon, userName: "Owen", time: 14, content: "Hi!" },
      { profilePic: maleIcon, userName: "Owen", time: 14, content: "I'm great thanks!" },

    ],
    currentMessage:
      {profilePic: "", userName: "", time: "", content: ""},
  }

  recordMsgHandler = (e) => {
    let now = new Date()
    this.setState({
      currentMessage: 
      {profilePic: femaleIcon, userName: "Katie", time: <Time value={now} format="HH:mm" />, content: e.target.value}
    })
  }

  addMsgHandler = (e) => {
    if (e.key === "Enter" && e.target.value !== ""){
      this.setState({
        messages: [...this.state.messages, this.state.currentMessage],
        currentMessage: 
        {profilePic: "", userName: "", time: "", content: ""},
      })    
    }
  }

  recordEmailHandler = (e) => {
    this.setState({
      tempEmail: e.target.value
    })
  }

  checkEmailHandler = () => {
    if (this.state.tempEmail !== "") {
      for (let i = 0; i < this.state.users.length; i++) {
        if (this.state.users[i].email === this.state.tempEmail) {
          return this.setState({
            tempIndex: i
          })
        }
        else {
        console.log("Email is not there")
        }
      }
    }
  }

  recordPasswordHandler = (e) => {
    this.setState({
      tempPassword: e.target.value
    })
  }

  checkPasswordHandler = () => {
    if(this.state.tempPassword === this.state.users[this.state.tempIndex].password){
      console.log("correct password")
    }
    else {
      console.log("wrong password")
    }
  }

  recordUserNameHandler = (e) => {
    this.setState({
      tempUserName: e.target.value
    })
  }

  createUserHandler = () => {
    this.setState({
      users: [...this.state.users, {email: this.state.tempEmail, userName: this.state.tempUserName, password: this.state.tempPassword, profilePic: ""}],
      tempEmail: "",
      tempPassword: "",
      tempUserName:"",
      tempIndex: "",
    })
    console.log(this.state.users)
  }

  render() {
    const allMessages = this.state.messages.map((messages, index) => {
      return <li key={index}> 
      {<div id="profilePic"><img src= {messages.profilePic} /></div>}
        {<div id="rightBlock">
          {<div id="topLine">
            {<div id="userName">{messages.userName}</div>}
            {<div id="time">{messages.time}</div>}  
          </div>}
        {<div id="content">{messages.content}</div>} 
      </div>}
            </li>
    })
    

    return (
      <div className="App">
      <div>
      <Access recordEmail={this.recordEmailHandler} checkEmail={this.checkEmailHandler} recordPassword={this.recordPasswordHandler} checkPassword={this.checkPasswordHandler} recordUserName={this.recordUserNameHandler} createUser={this.createUserHandler} email={this.state.tempEmail} password={this.state.tempPassword} userName={this.state.tempUserName}/>
      </div>
        <div id="messageWindow">
          <ul className="messages">{allMessages}</ul>
        </div>

        <div>
          <input id="msgInput" placeholder="Send a message" onChange={this.recordMsgHandler} onKeyPress={this.addMsgHandler} value={this.state.currentMessage.content} />
        </div>
      </div>
    );
  }
}

export default App;

