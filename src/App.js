import React, { Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Time from "react-time";
import Access from "./Components/Access";
import SideBar from "./Components/SideBar";
import maleIcon from "./user-male-alt-icon.png";
import femaleIcon from "./user-female-alt-icon.png";
import slackIcon from "./Slack_RGB_White.png";
import Icons from "./Components/Icons";
import MsgScreenHead from './Components/MsgScreenHead';
import Messages from "./Components/Messages";


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
      { profilePic: femaleIcon, userName: "Katie", time: "12:15", content: "Hello" },
      { profilePic: femaleIcon, userName: "Katie", time: "12:15", content: "How are you?" },
      { profilePic: maleIcon, userName: "Owen", time: "13:37", content: "Hi!" },
      { profilePic: maleIcon, userName: "Owen", time: "13:38", content: "I'm great thanks!" },

    ],
    currentMessage:
      {profilePic: "", userName: "", time: "", content: ""},

    showingSideBar: false
    
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

  showSideBarHandler = () => {
    if (this.state.showingSideBar === true) {
      this.setState({
        showingSideBar: false
      })
    }
    else {
      this.setState({
        showingSideBar: true
      })
    }
  }

  // scrollToBottom = () => {
  //   if (this.state.showingSideBar === false ){
  //   this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  //   }
  // }

  
  // componentDidMount() {
  //   this.scrollToBottom();
  // }
  
  // componentDidUpdate() {
  //   this.scrollToBottom();
  // }

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

    const allUsers = this.state.users.map((users, index) => {
      return <li key={index}>{users.userName}</li>
      })
    
    

      if(this.state.showingSideBar === true){
      return <SideBar eachUser = {allUsers} showhide={this.showSideBarHandler} />
    }
  

    return (
      <div className="App">
      <BrowserRouter>
      <div>
      <Route path ="/" exact>
      <Access 
      recordEmail={this.recordEmailHandler}
      checkEmail={this.checkEmailHandler}
      recordPassword={this.recordPasswordHandler}
      checkPassword={this.checkPasswordHandler}
      recordUserName={this.recordUserNameHandler}
      createUser={this.createUserHandler}
      email={this.state.tempEmail}
      password={this.state.tempPassword}
      userName={this.state.tempUserName}
      icon={slackIcon}
      emailExists={this.checkEmailHandler}
      />
      </Route>
      </div>
          <Route path="/messages">
            <div>
              <MsgScreenHead showHide={this.showSideBarHandler} />
            </div>
            {/* <div id="messageWindow">
              <ul className="messages">{allMessages}</ul>
              <div
              ref={(msgEnd) => { this.messagesEnd = msgEnd; }}></div>
            </div>
            <div id="msgBox">
              <input id="msgInput" placeholder="Send a message" onChange={this.recordMsgHandler} onKeyPress={this.addMsgHandler} value={this.state.currentMessage.content} />
              <Icons />
              </div> */}
              <Messages allMessages={allMessages} recordMsg={this.recordMsgHandler} addMsg={this.addMsgHandler} content={this.state.currentMessage.content} />
              
        </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

