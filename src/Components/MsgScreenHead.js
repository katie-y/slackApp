import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaEllipsisV} from "react-icons/fa";
import {FaChevronDown} from "react-icons/fa";
import CA from "../CN.png";

const MsgScreenHead = (props) => {
    return (
        <div className = "msg-screen-header">
        <div className="msg-screen-header-info">
            <div id="workspace-img">
            <img src={CA} width="30px" alt="" onClick={props.showHide} />    
            </div>
            <div id= "workspace-name">
                <p>mcrmastercoding12</p>
            </div>
            <div>
            
            
        </div>
            <div id="msg-header-icons">
            <FaSearch id="search-icon"/>
            <FaEllipsisV id="ellipsis-icon" />
                
        </div>
        </div>
            <div id="contact-info">
            <div>
            Owen
            </div>
            <div id="chevron-down-icon">
            <FaChevronDown />
            </div>
        </div>
        </div>
    )

}

export default MsgScreenHead;