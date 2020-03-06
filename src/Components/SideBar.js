import React from "react";
import {FaTimes} from "react-icons/fa";

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
            <div>
                <p id="subHeader">CHANNELS</p>
            </div>
            <div>
                <ul id="channel-list">
                    <li># code-sharing</li>
                    <li># general</li>
                    <li># mcrmastercoding12</li>
                    <li># random</li>
                </ul>
            </div>
            <div>
                <div>
                    <p id="subHeader" >DIRECT MESSAGES</p>
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
