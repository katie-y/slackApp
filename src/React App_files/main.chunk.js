(this["webpackJsonpslackapp"] = this["webpackJsonpslackapp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n}\n  \n#messageWindow {\n  height: 80vh;\n  width: 100vw;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.messages {\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n}\n\nul { \n    list-style: none;\n    width: 100%;\n    padding-inline-start: 0;\n    align-content: flex-end;\n}\n\nli {\n    display: flex;\n    flex-direction: row;\n    padding: 1%;\n    width: 100%;\n    word-wrap: break-word;\n}\n\n#profilePic {\n    padding: 10px;\n}\n\n#userName {\n    font-weight: bold;\n    margin: 10px;\n    font-size: large;\n}\n\n#time {\n    margin: 10px;\n    color: #bdc3c7;\n}\n\n#content {\n    margin: 0 auto;\n    width: 100%;\n    word-wrap: break-word;\n}\n\n#topLine {\n    display: flex;\n    flex-direction: row;\n}\n\n#rightBlock {\n    display: flex;\n    flex-direction: column;\n}\n\n#msgInput{\n    width: 90vw;\n    height: 5vh;\n    text-size-adjust: 3vh;\n    border-radius: 5px;\n    border-color: grey;\n    position: fixed; bottom:1vh;\n    font-size: large;\n}\n\n#msgBox {\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n}\n\n/* sidebar css */\n\n\n.sideBar {\n    background-color: #3F0E40;\n    list-style: none;\n}\n\n#header {\n    color: white;\n}\n\n#subHeader {\n    color: #CFC3CF;\n}\n\n#channel-list {\n    color: #CFC3CF;\n}\n\n#user-list {\n    color: #CFC3CF;\n}\n\n/* home screen and login/sign up */\n\n.home-page {\n    background-color:  #3F0E40;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n}\n\n#sign-in-msg {\n    color: #CFC3CF;;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-time */ "./node_modules/react-time/lib/index.js");
/* harmony import */ var react_time__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_time__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Access */ "./src/Components/Access.js");
/* harmony import */ var _Components_SideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/SideBar */ "./src/Components/SideBar.js");
/* harmony import */ var _user_male_alt_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-male-alt-icon.png */ "./src/user-male-alt-icon.png");
/* harmony import */ var _user_male_alt_icon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_user_male_alt_icon_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _user_female_alt_icon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-female-alt-icon.png */ "./src/user-female-alt-icon.png");
/* harmony import */ var _user_female_alt_icon_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_user_female_alt_icon_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/codenation/Desktop/slackApp/slackapp/src/App.js";









class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      tempEmail: "",
      tempPassword: "",
      tempUserName: "",
      tempIndex: "",
      users: [{
        email: "katie_york@hotmail.co.uk",
        userName: "Katie",
        password: "password123",
        profilePic: ""
      }, {
        email: "owen@hotmail.co.uk",
        userName: "Owen",
        password: "password1234",
        profilePic: ""
      }],
      messages: [{
        profilePic: _user_female_alt_icon_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        userName: "Katie",
        time: 12,
        content: "Hello"
      }, {
        profilePic: _user_female_alt_icon_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        userName: "Katie",
        time: 12,
        content: "How are you?"
      }, {
        profilePic: _user_male_alt_icon_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        userName: "Owen",
        time: 14,
        content: "Hi!"
      }, {
        profilePic: _user_male_alt_icon_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        userName: "Owen",
        time: 14,
        content: "I'm great thanks!"
      }],
      currentMessage: {
        profilePic: "",
        userName: "",
        time: "",
        content: ""
      }
    };

    this.recordMsgHandler = e => {
      let now = new Date();
      this.setState({
        currentMessage: {
          profilePic: _user_female_alt_icon_png__WEBPACK_IMPORTED_MODULE_7___default.a,
          userName: "Katie",
          time: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_time__WEBPACK_IMPORTED_MODULE_3___default.a, {
            value: now,
            format: "HH:mm",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }),
          content: e.target.value
        }
      });
    };

    this.addMsgHandler = e => {
      if (e.key === "Enter" && e.target.value !== "") {
        this.setState({
          messages: [...this.state.messages, this.state.currentMessage],
          currentMessage: {
            profilePic: "",
            userName: "",
            time: "",
            content: ""
          }
        });
      }
    };

    this.recordEmailHandler = e => {
      this.setState({
        tempEmail: e.target.value
      });
    };

    this.checkEmailHandler = () => {
      if (this.state.tempEmail !== "") {
        for (let i = 0; i < this.state.users.length; i++) {
          if (this.state.users[i].email === this.state.tempEmail) {
            return this.setState({
              tempIndex: i
            });
          } else {
            console.log("Email is not there");
          }
        }
      }
    };

    this.recordPasswordHandler = e => {
      this.setState({
        tempPassword: e.target.value
      });
    };

    this.checkPasswordHandler = () => {
      if (this.state.tempPassword === this.state.users[this.state.tempIndex].password) {
        console.log("correct password");
      } else {
        console.log("wrong password");
      }
    };

    this.recordUserNameHandler = e => {
      this.setState({
        tempUserName: e.target.value
      });
    };

    this.createUserHandler = () => {
      this.setState({
        users: [...this.state.users, {
          email: this.state.tempEmail,
          userName: this.state.tempUserName,
          password: this.state.tempPassword,
          profilePic: ""
        }],
        tempEmail: "",
        tempPassword: "",
        tempUserName: "",
        tempIndex: ""
      });
      console.log(this.state.users);
    };
  }

  render() {
    const allMessages = this.state.messages.map((messages, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "profilePic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: messages.profilePic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "rightBlock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "topLine",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "userName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, messages.userName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, messages.time)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, messages.content)));
    });
    const allUsers = this.state.users.map((users, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, users.userName);
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/",
      exact: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Access__WEBPACK_IMPORTED_MODULE_4__["default"], {
      recordEmail: this.recordEmailHandler,
      checkEmail: this.checkEmailHandler,
      recordPassword: this.recordPasswordHandler,
      checkPassword: this.checkPasswordHandler,
      recordUserName: this.recordUserNameHandler,
      createUser: this.createUserHandler,
      email: this.state.tempEmail,
      password: this.state.tempPassword,
      userName: this.state.tempUserName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/menu",
      component: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_SideBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        eachUser: allUsers,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/messages",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "messageWindow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "messages",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, allMessages)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "msgBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "msgInput",
      placeholder: "Send a message",
      onChange: this.recordMsgHandler,
      onKeyPress: this.addMsgHandler,
      value: this.state.currentMessage.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/Access.js":
/*!**********************************!*\
  !*** ./src/Components/Access.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/codenation/Desktop/slackApp/slackapp/src/Components/Access.js";



const Access = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "home-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "sign-in-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Sign in to Slack")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "email-input",
    onChange: props.recordEmail,
    placeholder: "Email Address",
    value: props.email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.checkEmail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Enter Email")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "password-input",
    type: "password",
    onChange: props.recordPassword,
    placeholder: "Password",
    value: props.password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.checkPassword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Enter Password")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "username-input",
    onChange: props.recordUserName,
    placeholder: "Username",
    value: props.userName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.createUser,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Create Account")));
};

/* harmony default export */ __webpack_exports__["default"] = (Access);

/***/ }),

/***/ "./src/Components/SideBar.js":
/*!***********************************!*\
  !*** ./src/Components/SideBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/codenation/Desktop/slackApp/slackapp/src/Components/SideBar.js";


const SideBar = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sideBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "subHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "CHANNELS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    id: "channel-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "# code-sharing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "# general"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "# mcrmastercoding12"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "# random"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "subHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "DIRECT MESSAGES")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    id: "user-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, props.eachUser))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/codenation/Desktop/slackApp/slackapp/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/user-female-alt-icon.png":
/*!**************************************!*\
  !*** ./src/user-female-alt-icon.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAGxUlEQVR4Ab3Be2wT9wHA8e/vd2c7jvMgDjGQQjJCKAWGIAUaiqpSitptFajRVtRpD8kr3T+lj1UIhIiUrnRW+0+rTRqbpkar/xjTOljF1G7dxlRGy6PVOlqeeQAJSsCAiePEThwnd75bIoXJs5L4zrnt8xE4LNnqXwxsBx41dGXNcKR0HgIQ3MbgS+Aj4FD1/q5uHCRwSLLVvwZ4FdgKSCaNREvQ0yo5DOAD4JXq/V1f4gDBLCVb/V7gDWAnoJBDT7kY6fMxjQxwANhbvb9rhFlQmIVkq78W+DvwJCCZguatIp32o+gppiCBRmDrrk0VH755PD5IgRQKlGz1LwOOA0uZwfWqZ0j6VlB65wtmMB/YvmtTxZ/ePB6PUQBJAZKt/mrgKHAPMxjx1HKn/DEGqzcxWrKQPO4BjkZa6qopgMSmZKtfBQ4Bi5iBieTavOcxhYIpFG4t3wFCksci4FCkpU7FJol9e4CN5HGzcjtJ7wruSs25l76vbMOCjcAebJLYkGz1VwP7yGOg5AFuzP0eufqWPMVQVQMW7Iu01C3ABok9PwJ8zCBRvJorC/ZiIsllCsmNVS8y7F9JHj7gZWyQWJRs9atAkBnEyjbRufDHGNLDdAzFTW/DbhLzN5JHMNJSp2KRxLpGoIopZGQx1+a9wNUFezCEm3xM6eLGqp3cXL4DQ/UyjSqgEYtUrFvPFGJlm+mp2oGmVmDXwMJHGQqsJdB5kPKbJ5nCeuAkFqhYV0OOAd86ri7YBQgKpbvLiXz1ORRtiJK+s+SowSKJdR5y3K5oAgRO6K/5BlPwYJHEOp3/Ihjy3odTRuYsBQQ5dCySWBcni6aUk5FenGIoRejuMnLEsUhiXQ9ZNLUCp2U85eTowSKJdW1k0VQ/TtPcFeRowyKJdeeBDJPG1Lk4TS+qIEsGOI9FEotKn+0fAtr5DwPHmSZZ2qv3dw1hkcSe00wSmDhNYJLlNDZI7DnNJEO4cJohXWQ5jQ0Sez5lUkb6cJqhesnyKTZI7OkAkoyTbafANHCMaaBePsGkJNCBDRIbSp/tzwBnGZe50ob33Hs4xXvuPczeC0w6V72/K4MNEvs6tFSGsWSGkpMHUGNdzJYa66Lk5AEy6TEyYxrj2rFJYl9PojvNBKGlKX9/N3K4j0LJ4TuUv78boaWZkI4NMq4XmyQ2xTtTw8nro9ylDEaoOPwcykAvdikDvVQc3okyGOGudDxBKto/hE0KNj2zQO8B4sBcYC5gynTC1G+1E1v8iChye7BicDhJ2Z+bDW/ssgGYgAlcAH6up9K/+eUlktggKND5p5hQAzwMrI/UPbbxyuofrPO43PhLyygpLkaRCtkyRoahVIr+ZIJRbYz6s+98Xt119BTwT+BjoGfVYQoicMiBg799BDhGFpeqoioqE/SMjqbr5Ni887vf+QcOUPkf0nQdTdf5fxDMQiAcqm10zXn569Jfi8lcAQ9hgwknEPT9xejv+Uwb+Gk02NxNgQQFCIRDS4G9wPfv85S5njYqmY13ZYz20YQO/A54PRpsvoRNAhsC4dBKYB/wNKAwrqa4jB+a89B1nUKoqsrb4jY9qQSTDOAPQCgabD6LRQILAuHQ/UAz0ARIsqhC8rPqdUSjdyhEIFDFS5HP0U2DHCbwR+An0WDzv8hDZQaBcGgt0AJsAwRT0E2DsdIiiFKQsdIidNNgCgJoAp4MhEMfAq8DJ6LBZqaiMoVAOHQ/8AqwDRDkEXOBz+MhPTqKHUUeDzEX+QjgCeAJ4JNAOPQacDQabCabIEsgHFoJvAp8ExBYtHXhvQTn1HG+owM7Vi1bRnigiw+ud2LTx0ALcDwabGaCwrhAOOT3NW35FfALYCUgsGFgLM1LDQ/T3dtLJpPBCo/bTeOaNbxx8STDuoZNtUAQWOZr2nJ0+MhHo0ogHPICnwCPA5ICDOsaX1u4lPm+Mm5Go1ixZvly+hWDX1/5gllYBTzua9pyUAIvAKuZpWO3ullSU0OgspJ8ApWVLKmp4ditbhywFtglgW/jgL9FriKE4MGGBoq9XqZT7PXyYEMDQgj+GrmKQ74lgZU4oH2wj8uJGEUeD5s3bKDU5yNXqc/H5g0bKPJ4uJyI0THYh0OWKr6mLa/hELdUeWheDW6Xi8WLFqEqChnDoNjrpb62lgdWr6bI42HC251nOBu/hUNcKmACAgcc6WnjxeWNFKsuVEVhRX09K+rryTWsaxzpacNJEgcltFHevXaBfH5/7QIJbRQHmRK4ioNaO8+Q0EaZTkIbpbXzDA67JIEdwGdAHBgEUsxCfGyEty6eYjpvXTxFfGwEB90Anv83iCdGyN/z0o0AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/user-male-alt-icon.png":
/*!************************************!*\
  !*** ./src/user-male-alt-icon.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/codenation/Desktop/slackApp/slackapp/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/codenation/Desktop/slackApp/slackapp/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/codenation/Desktop/slackApp/slackapp/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map