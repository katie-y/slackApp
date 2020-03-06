import React, { Component } from 'react';
import './App.css';
import Time from "react-time";
import Access from "./Components/Access";
import SideBar from "./Components/SideBar";
import maleIcon from "./user-male-alt-icon.png";
import femaleIcon from "./user-female-alt-icon.png";
import slackIcon from "./Slack_RGB_White.png";
import MsgScreenHead from './Components/MsgScreenHead';
import Messages from "./Components/Messages";


class App extends Component {
  state = {
    tempEmail: "",
    tempPassword: "",
    tempUserName: "",
    tempIndex: "",
    passwordBoxShowing: false,
    userNameBoxShowing: false,
    emailBoxShowing: true,
    showingMessages: false,

    users: [
      { email: "katie_york@hotmail.co.uk", userName: "Katie", password: "password123", profilePic: "", loggedIn: false },
      { email: "owen@hotmail.co.uk", userName: "Owen", password: "password1234", profilePic: "", loggedIn: false }
    ],
    messages: [
      { profilePic: femaleIcon, userName: "Katie", time: "12:15", content: "Hello" },
      { profilePic: femaleIcon, userName: "Katie", time: "12:15", content: "How are you?" },
      { profilePic: maleIcon, userName: "Owen", time: "13:37", content: "Hi!" },
      { profilePic: maleIcon, userName: "Owen", time: "13:38", content: "I'm great thanks!" },

    ],
    currentMessage:
      { profilePic: "", userName: "", time: "", content: "" },

    showingSideBar: false

  }

  recordMsgHandler = (e) => {
    let now = new Date()
    this.setState({
      currentMessage:
        { profilePic: femaleIcon, userName: "Katie", time: <Time value={now} format="HH:mm" />, content: e.target.value }
    })
  }

  addMsgHandler = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      this.setState({
        messages: [...this.state.messages, this.state.currentMessage],
        currentMessage:
          { profilePic: "", userName: "", time: "", content: "" },
      })
    }
  }

  recordEmailHandler = (e) => {
    this.setState({
      tempEmail: e.target.value
    })
  }

  checkEmailHandler = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      if (this.state.tempEmail !== "") {
        for (let i = 0; i < this.state.users.length; i++) {
          if (this.state.users[i].email === this.state.tempEmail) {
            return this.setState({
              tempIndex: i,
              passwordBoxShowing: true,
              emailBoxShowing: false
            })
          }
          else {
            console.log("nope")
            return this.setState({
              userNameBoxShowing: true,
              passwordBoxShowing: true
            })
          }
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
    if (this.state.tempPassword === this.state.users[this.state.tempIndex].password) {
      this.setState({
        showingMessages: true,
        passwordBoxShowing: false
      })
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
    if (this.state.tempEmail !== "" && this.state.tempPassword !== "" && this.state.tempUserName !== "") {
      this.setState({
        users: [...this.state.users, { email: this.state.tempEmail, userName: this.state.tempUserName, password: this.state.tempPassword, profilePic: "" }],
        tempEmail: "",
        tempPassword: "",
        tempUserName: "",
        tempIndex: "",
      })
      console.log(this.state.users)
    }
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

  render() {
    const allMessages = this.state.messages.map((messages, index) => {
      return <li key={index}>
        {<div id="profilePic"><img src={messages.profilePic} alt="" /></div>}
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


    const sideBarView = () => {
      if (this.state.showingSideBar === true) {
      return <SideBar eachUser={allUsers} showhide={this.showSideBarHandler} />
    }
  }

  const messageView = () => {
    if (this.state.showingMessages === true && this.state.showingSideBar === false) {
      return <div>
        <div>
          <MsgScreenHead showHide={this.showSideBarHandler} />
        </div>
        <Messages allMessages={allMessages} recordMsg={this.recordMsgHandler} addMsg={this.addMsgHandler} content={this.state.currentMessage.content} />
      </div>
    }
  }

  const homeView = () => {
    if (this.state.showingMessages === false){
      return <Access
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
            passwordBoxShowing={this.state.passwordBoxShowing}
            userNameBoxShowing={this.state.userNameBoxShowing}
            emailBoxShowing={this.state.emailBoxShowing}
          />
    }
  }

    return (
      <div className="App">
        {homeView()} 
        {sideBarView()}
        {messageView()}
      </div>
    );
  }
}

export default App;

