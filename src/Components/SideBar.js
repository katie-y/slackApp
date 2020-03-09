import React from "react";
import {FaTimes} from "react-icons/fa";
import {AiOutlinePlusCircle} from "react-icons/ai";


const SideBar = (props) => {
    return (
        <div className="sideBar">
        <div className="sideBar-content">
            <div>
            <div id="close-sidebar-box">
            <FaTimes id="close-sidebar" onClick={props.showhide} />
            </div>
                <p id="header">Home</p>
            </div>
            <div>
                <input id ="jump-to-input" placeholder="Jump to..."></input>
            </div>
            <div id="subheader-box">
                <p id="subHeader">CHANNELS</p>
                <AiOutlinePlusCircle id="expand-icon"/>
            </div>
            <div>
                <ul id="channel-list">
                    <li id="channel-item"><p>#</p> code-sharing</li>
                    <li className="chat-active" id="channel-item" ><p>#</p> general</li>
                    <li id="channel-item"><p>#</p> mcrmastercoding12</li>
                    <li id="channel-item"><p>#</p> random</li>
                </ul>
            </div>
            <div>
                <div id="subheader-box">
                    <p id="subHeader" >DIRECT MESSAGES</p>
                    <AiOutlinePlusCircle id="expand-icon"/>
                </div>
                <div>
                    <ul id="user-list">
                        {props.eachUser}
                    </ul>
                </div>
            </div>
            </div>
        </div>

    )
}

export default SideBar;
