import React from 'react'
import { FiPaperclip, FiBold } from "react-icons/fi";
import { FaBold, FaItalic } from "react-icons/fa";
import { FiItalic } from "react-icons/fi";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { GoListOrdered } from "react-icons/go";
import { MdFormatListBulleted } from "react-icons/md";
import { MdFormatIndentIncrease } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";
import { IconContext } from 'react-icons' // npm install react-icons

function Icons() {
    return (
        <IconContext.Provider value={{color: 'black', size: '1.2rem'}}>
        <div className='icons'>
            <FiPaperclip id='paperclip'/>
            <FaBold id='icon'/>
            <FiItalic id='icon'/>
            <AiOutlineStrikethrough id='icon'/>
            <FaCode id='icon'/>
            <FiLink id='icon'/>
            <GoListOrdered id='icon'/>
            <MdFormatListBulleted id='icon'/>
            <MdFormatIndentIncrease id='icon'/>
            <AiOutlineCode id='icon'/>
        </div>
        </IconContext.Provider>
    )
}

export default Icons;