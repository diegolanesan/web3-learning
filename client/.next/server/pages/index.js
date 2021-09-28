"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Diego Lanes\xE1n\\Desktop\\workspace\\dapps\\my-wave-portal\\client\\src\\components\\Header.js";



const Header = ({
  currentAccount,
  setCurrentAccount,
  connectWallet
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    justify: "flex-end",
    w: "90%",
    h: 10,
    my: 6,
    children: !currentAccount && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
      colorScheme: "orange",
      bg: "orange.400",
      rounded: "3xl",
      onClick: () => connectWallet(setCurrentAccount),
      children: "Connect wallet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Waves.js":
/*!*********************************!*\
  !*** ./src/components/Waves.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Diego Lanes\xE1n\\Desktop\\workspace\\dapps\\my-wave-portal\\client\\src\\components\\Waves.js";



const Waves = ({
  allWaves
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    w: {
      base: '100%',
      md: '80%',
      xl: '80%'
    },
    direction: {
      base: 'column',
      md: "row",
      xl: "row"
    },
    my: 10,
    mx: 8,
    wrap: "wrap",
    justify: "center",
    align: "center",
    children: allWaves.sort((a, b) => b.timestamp - a.timestamp).map((wave, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        minW: "280px",
        maxW: "300px",
        minH: "120px",
        direction: "column",
        align: "center",
        bg: "gray.600",
        boxShadow: "xl",
        rounded: "xl",
        color: "white",
        m: 4,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          py: 4,
          px: 8,
          textAlign: "center",
          fontSize: 16,
          maxW: "100%",
          children: wave.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Spacer, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.HStack, {
          spacing: 20,
          pb: 4,
          justify: "space-between",
          color: "gray.300",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
            href: `https://rinkeby.etherscan.io/address/0x272b0924D541fd0dFdE3Acb95bb20d3B5394c666?fromaddress=${wave.address}`,
            isExternal: true,
            textDecoration: "underline",
            fontWeight: "bold",
            children: ["\uD83D\uDD0E", wave.address.slice(-6)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
            color: "gray.300",
            children: [wave.timestamp.toString().slice(4, 15), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Waves);

/***/ }),

/***/ "./src/hooks/useEthereum.js":
/*!**********************************!*\
  !*** ./src/hooks/useEthereum.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_checkIfWalletIsConnected__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/checkIfWalletIsConnected */ "./src/utils/checkIfWalletIsConnected.js");



const useEthereum = () => {
  const {
    0: currentAccount,
    1: setCurrentAccount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_utils_checkIfWalletIsConnected__WEBPACK_IMPORTED_MODULE_1__.checkIfWalletIsConnected)().then(account => {
      setCurrentAccount(account);
    });
  }, []);
  return {
    currentAccount,
    setCurrentAccount
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEthereum);

/***/ }),

/***/ "./src/hooks/useMessage.js":
/*!*********************************!*\
  !*** ./src/hooks/useMessage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useMessage = () => {
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: isDisabled,
    1: setIsDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    message.length > 0 ? setIsDisabled(false) : setIsDisabled(true);
  }, [message]); // const handleMessage = (e) => {
  //     setMessage(e.target.value)
  //   }

  return {
    message,
    setMessage,
    isDisabled
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMessage);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_WavePortal_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/WavePortal.json */ "./src/utils/WavePortal.json");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_checkIfWalletIsConnected__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/checkIfWalletIsConnected */ "./src/utils/checkIfWalletIsConnected.js");
/* harmony import */ var _utils_connectWallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/connectWallet */ "./src/utils/connectWallet.js");
/* harmony import */ var _utils_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/wave */ "./src/utils/wave.js");
/* harmony import */ var _utils_getAllWaves__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getAllWaves */ "./src/utils/getAllWaves.js");
/* harmony import */ var _hooks_useMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useMessage */ "./src/hooks/useMessage.js");
/* harmony import */ var _hooks_useEthereum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useEthereum */ "./src/hooks/useEthereum.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Waves__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Waves */ "./src/components/Waves.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\Diego Lanes\xE1n\\Desktop\\workspace\\dapps\\my-wave-portal\\client\\src\\pages\\index.js";
















const Index = () => {
  const {
    currentAccount,
    setCurrentAccount
  } = (0,_hooks_useEthereum__WEBPACK_IMPORTED_MODULE_10__.default)();
  const {
    message,
    setMessage,
    isDisabled
  } = (0,_hooks_useMessage__WEBPACK_IMPORTED_MODULE_9__.default)();
  const {
    0: allWaves,
    1: setAllWaves
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (currentAccount) {
      (0,_utils_getAllWaves__WEBPACK_IMPORTED_MODULE_8__.getAllWaves)(setAllWaves);
    }
  }, [currentAccount]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("title", {
        children: "Web3 Learning"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
      direction: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      bg: "gray.800",
      w: "100%",
      minH: "100vh",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_11__.default, {
        currentAccount: currentAccount,
        setCurrentAccount: setCurrentAccount,
        connectWallet: _utils_connectWallet__WEBPACK_IMPORTED_MODULE_6__.connectWallet
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
        direction: "column",
        align: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
          size: "2xl",
          mb: 6,
          children: " \uD83D\uDC68\u200D\uD83D\uDE80\uFE0F "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
          as: "h1",
          size: "xl",
          color: "white",
          children: " Web3 Learning "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
        as: "h2",
        mt: 6,
        mx: 6,
        color: "white",
        fontSize: "lg",
        fontWeight: "thin",
        textAlign: "center",
        children: "Connect your wallet to discover what others are working on in the Web3 space and share your learning goal! \uD83D\uDE80"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        spacing: 4,
        mt: 12,
        w: {
          base: "80%",
          md: "40%",
          xl: "25%"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {
          placeholder: "Enter your learning goal",
          onChange: e => setMessage(e.target.value),
          bg: "white",
          rounded: "2xl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
          bg: "cyan.400",
          colorScheme: "cyan",
          rounded: "2xl",
          onClick: () => (0,_utils_wave__WEBPACK_IMPORTED_MODULE_7__.wave)(message),
          isDisabled: isDisabled,
          children: "Share my goal!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Waves__WEBPACK_IMPORTED_MODULE_12__.default, {
        allWaves: allWaves
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "./src/utils/checkIfWalletIsConnected.js":
/*!***********************************************!*\
  !*** ./src/utils/checkIfWalletIsConnected.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIfWalletIsConnected": () => (/* binding */ checkIfWalletIsConnected)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getAllWaves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAllWaves */ "./src/utils/getAllWaves.js");


const checkIfWalletIsConnected = async () => {
  try {
    const {
      ethereum
    } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }
    /*
    * Check if we're authorized to access the user's wallet
    */


    const accounts = await ethereum.request({
      method: 'eth_accounts'
    });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      return account;
    } else {
      console.log("No authorized account found");
    }
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "./src/utils/connectWallet.js":
/*!************************************!*\
  !*** ./src/utils/connectWallet.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectWallet": () => (/* binding */ connectWallet)
/* harmony export */ });
const connectWallet = async setCurrentAccount => {
  try {
    const {
      ethereum
    } = window;

    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    }

    const accounts = await ethereum.request({
      method: "eth_requestAccounts"
    });
    console.log("Connected", accounts[0]);
    setCurrentAccount(accounts[0]);
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "./src/utils/contractAddress.js":
/*!**************************************!*\
  !*** ./src/utils/contractAddress.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contractAddress": () => (/* binding */ contractAddress)
/* harmony export */ });
const contractAddress = "0x272b0924D541fd0dFdE3Acb95bb20d3B5394c666";

/***/ }),

/***/ "./src/utils/getAllWaves.js":
/*!**********************************!*\
  !*** ./src/utils/getAllWaves.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllWaves": () => (/* binding */ getAllWaves)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contractAddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contractAddress */ "./src/utils/contractAddress.js");
/* harmony import */ var _WavePortal_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WavePortal.json */ "./src/utils/WavePortal.json");



const getAllWaves = async setAllWaves => {
  try {
    const {
      ethereum
    } = window;

    if (ethereum) {
      const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const wavePortalContract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(_contractAddress__WEBPACK_IMPORTED_MODULE_1__.contractAddress, _WavePortal_json__WEBPACK_IMPORTED_MODULE_2__.abi, signer);
      /*
       * Call the getAllWaves method from your Smart Contract
       */

      const waves = await wavePortalContract.getAllWaves();
      /*
       * We only need address, timestamp, and message in our UI so let's
       * pick those out
       */

      let wavesCleaned = [];
      waves.forEach(wave => {
        wavesCleaned.push({
          address: wave.waver,
          timestamp: new Date(wave.timestamp * 1000),
          message: wave.message
        });
      });
      /*
       * Store our data in React State
       */

      setAllWaves(wavesCleaned);
      /**
       * Listen in for emitter events!
       */

      wavePortalContract.on("NewWave", (from, timestamp, message) => {
        console.log("NewWave", from, timestamp, message);
        setAllWaves(prevState => [...prevState, {
          address: from,
          timestamp: new Date(timestamp * 1000),
          message: message
        }]);
      });
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "./src/utils/wave.js":
/*!***************************!*\
  !*** ./src/utils/wave.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wave": () => (/* binding */ wave)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contractAddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contractAddress */ "./src/utils/contractAddress.js");
/* harmony import */ var _WavePortal_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WavePortal.json */ "./src/utils/WavePortal.json");



const wave = async message => {
  try {
    const {
      ethereum
    } = window;

    if (ethereum) {
      const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      /*
      * You are defining contractABI right here. Let's change this!
      */

      const waveportalContract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(_contractAddress__WEBPACK_IMPORTED_MODULE_1__.contractAddress, _WavePortal_json__WEBPACK_IMPORTED_MODULE_2__.abi, signer);
      let count = await waveportalContract.getTotalWaves();
      console.log("Retrieved total wave count...", count.toNumber());
      const waveTxn = await waveportalContract.wave(message, {
        gasLimit: 300000
      });
      console.log("Mining...", waveTxn.hash);
      await waveTxn.wait();
      console.log("Mined -- ", waveTxn.hash);
      count = await waveportalContract.getTotalWaves();
      console.log("Retrieved total wave count...", count.toNumber());
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./src/utils/WavePortal.json":
/*!***********************************!*\
  !*** ./src/utils/WavePortal.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"WavePortal","sourceName":"contracts/WavePortal.sol","abi":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"NewWave","type":"event"},{"inputs":[],"name":"getAllWaves","outputs":[{"components":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastWavedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"wave","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040526200004f6040518060400160405280601e81526020017f49276d206120636f6e7472616374206265696e67206465706c6f7965642100008152506200005560201b620006491760201c565b620001e9565b620000f5816040516024016200006c919062000162565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620000f860201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200012e8262000186565b6200013a818562000191565b93506200014c818560208601620001a2565b6200015781620001d8565b840191505092915050565b600060208201905081810360008301526200017e818462000121565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620001c2578082015181840152602081019050620001a5565b83811115620001d2576000848401525b50505050565b6000601f19601f8301169050919050565b61115780620001f96000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b6004803603810190610066919061098c565b6100d9565b005b6100756104d7565b6040516100829190610cf9565b60405180910390f35b6100a560048036038101906100a09190610963565b6104e0565b6040516100b29190610cf9565b60405180910390f35b6100c36104f8565b6040516100d09190610bf5565b60405180910390f35b42610384600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101279190610e0b565b10610167576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015e90610cb9565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bd9190610e0b565b925050819055506102036040518060400160405280600d81526020017f2573206861732077617665642100000000000000000000000000000000000000815250336106e2565b600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102c2929190610843565b506040820151816002015550506000606460025442446102e29190610e0b565b6102ec9190610e0b565b6102f69190610f42565b90506103376040518060400160405280601181526020017f52616e646f6d206e756d6265723a2025730000000000000000000000000000008152508261077e565b806002819055506005811015610483576103866040518060400160405280600781526020017f257320776f6e2100000000000000000000000000000000000000000000000000815250336106e2565b6000655af3107a40009050478111156103d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103cb90610cd9565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516103fa90610be0565b60006040518083038185875af1925050503d8060008114610437576040519150601f19603f3d011682016040523d82523d6000602084013e61043c565b606091505b5050905080610480576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047790610c99565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea71642846040516104cb929190610d14565b60405180910390a25050565b60008054905090565b60036020528060005260406000206000915090505481565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561064057838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105a590610edf565b80601f01602080910402602001604051908101604052809291908181526020018280546105d190610edf565b801561061e5780601f106105f35761010080835404028352916020019161061e565b820191906000526020600020905b81548152906001019060200180831161060157829003601f168201915b505050505081526020016002820154815250508152602001906001019061051c565b50505050905090565b6106df8160405160240161065d9190610c17565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061081a565b50565b61077a82826040516024016106f8929190610c39565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061081a565b5050565b6108168282604051602401610794929190610c69565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061081a565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461084f90610edf565b90600052602060002090601f01602090048101928261087157600085556108b8565b82601f1061088a57805160ff19168380011785556108b8565b828001600101855582156108b8579182015b828111156108b757825182559160200191906001019061089c565b5b5090506108c591906108c9565b5090565b5b808211156108e25760008160009055506001016108ca565b5090565b60006108f96108f484610d69565b610d44565b90508281526020810184848401111561091157600080fd5b61091c848285610e9d565b509392505050565b6000813590506109338161110a565b92915050565b600082601f83011261094a57600080fd5b813561095a8482602086016108e6565b91505092915050565b60006020828403121561097557600080fd5b600061098384828501610924565b91505092915050565b60006020828403121561099e57600080fd5b600082013567ffffffffffffffff8111156109b857600080fd5b6109c484828501610939565b91505092915050565b60006109d98383610b72565b905092915050565b6109ea81610e61565b82525050565b6109f981610e61565b82525050565b6000610a0a82610daa565b610a148185610dcd565b935083602082028501610a2685610d9a565b8060005b85811015610a625784840389528151610a4385826109cd565b9450610a4e83610dc0565b925060208a01995050600181019050610a2a565b50829750879550505050505092915050565b6000610a7f82610db5565b610a898185610de9565b9350610a99818560208601610eac565b610aa28161102f565b840191505092915050565b6000610ab882610db5565b610ac28185610dfa565b9350610ad2818560208601610eac565b610adb8161102f565b840191505092915050565b6000610af3602783610dfa565b9150610afe82611040565b604082019050919050565b6000610b16600083610dde565b9150610b218261108f565b600082019050919050565b6000610b39600f83610dfa565b9150610b4482611092565b602082019050919050565b6000610b5c603483610dfa565b9150610b67826110bb565b604082019050919050565b6000606083016000830151610b8a60008601826109e1565b5060208301518482036020860152610ba28282610a74565b9150506040830151610bb76040860182610bc2565b508091505092915050565b610bcb81610e93565b82525050565b610bda81610e93565b82525050565b6000610beb82610b09565b9150819050919050565b60006020820190508181036000830152610c0f81846109ff565b905092915050565b60006020820190508181036000830152610c318184610aad565b905092915050565b60006040820190508181036000830152610c538185610aad565b9050610c6260208301846109f0565b9392505050565b60006040820190508181036000830152610c838185610aad565b9050610c926020830184610bd1565b9392505050565b60006020820190508181036000830152610cb281610ae6565b9050919050565b60006020820190508181036000830152610cd281610b2c565b9050919050565b60006020820190508181036000830152610cf281610b4f565b9050919050565b6000602082019050610d0e6000830184610bd1565b92915050565b6000604082019050610d296000830185610bd1565b8181036020830152610d3b8184610aad565b90509392505050565b6000610d4e610d5f565b9050610d5a8282610f11565b919050565b6000604051905090565b600067ffffffffffffffff821115610d8457610d83611000565b5b610d8d8261102f565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610e1682610e93565b9150610e2183610e93565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e5657610e55610f73565b5b828201905092915050565b6000610e6c82610e73565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610eca578082015181840152602081019050610eaf565b83811115610ed9576000848401525b50505050565b60006002820490506001821680610ef757607f821691505b60208210811415610f0b57610f0a610fd1565b5b50919050565b610f1a8261102f565b810181811067ffffffffffffffff82111715610f3957610f38611000565b5b80604052505050565b6000610f4d82610e93565b9150610f5883610e93565b925082610f6857610f67610fa2565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b50565b7f57616974203135206d696e757465730000000000000000000000000000000000600082015250565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e2074686520636f6e74726163742068617321000000000000000000000000602082015250565b61111381610e61565b811461111e57600080fd5b5056fea2646970667358221220d97cdc759c673422b68528738176103a4a5a35fa4eb633bcd4e157f69923ffc264736f6c63430008040033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b6004803603810190610066919061098c565b6100d9565b005b6100756104d7565b6040516100829190610cf9565b60405180910390f35b6100a560048036038101906100a09190610963565b6104e0565b6040516100b29190610cf9565b60405180910390f35b6100c36104f8565b6040516100d09190610bf5565b60405180910390f35b42610384600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101279190610e0b565b10610167576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015e90610cb9565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bd9190610e0b565b925050819055506102036040518060400160405280600d81526020017f2573206861732077617665642100000000000000000000000000000000000000815250336106e2565b600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102c2929190610843565b506040820151816002015550506000606460025442446102e29190610e0b565b6102ec9190610e0b565b6102f69190610f42565b90506103376040518060400160405280601181526020017f52616e646f6d206e756d6265723a2025730000000000000000000000000000008152508261077e565b806002819055506005811015610483576103866040518060400160405280600781526020017f257320776f6e2100000000000000000000000000000000000000000000000000815250336106e2565b6000655af3107a40009050478111156103d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103cb90610cd9565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516103fa90610be0565b60006040518083038185875af1925050503d8060008114610437576040519150601f19603f3d011682016040523d82523d6000602084013e61043c565b606091505b5050905080610480576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047790610c99565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea71642846040516104cb929190610d14565b60405180910390a25050565b60008054905090565b60036020528060005260406000206000915090505481565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561064057838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105a590610edf565b80601f01602080910402602001604051908101604052809291908181526020018280546105d190610edf565b801561061e5780601f106105f35761010080835404028352916020019161061e565b820191906000526020600020905b81548152906001019060200180831161060157829003601f168201915b505050505081526020016002820154815250508152602001906001019061051c565b50505050905090565b6106df8160405160240161065d9190610c17565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061081a565b50565b61077a82826040516024016106f8929190610c39565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061081a565b5050565b6108168282604051602401610794929190610c69565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061081a565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461084f90610edf565b90600052602060002090601f01602090048101928261087157600085556108b8565b82601f1061088a57805160ff19168380011785556108b8565b828001600101855582156108b8579182015b828111156108b757825182559160200191906001019061089c565b5b5090506108c591906108c9565b5090565b5b808211156108e25760008160009055506001016108ca565b5090565b60006108f96108f484610d69565b610d44565b90508281526020810184848401111561091157600080fd5b61091c848285610e9d565b509392505050565b6000813590506109338161110a565b92915050565b600082601f83011261094a57600080fd5b813561095a8482602086016108e6565b91505092915050565b60006020828403121561097557600080fd5b600061098384828501610924565b91505092915050565b60006020828403121561099e57600080fd5b600082013567ffffffffffffffff8111156109b857600080fd5b6109c484828501610939565b91505092915050565b60006109d98383610b72565b905092915050565b6109ea81610e61565b82525050565b6109f981610e61565b82525050565b6000610a0a82610daa565b610a148185610dcd565b935083602082028501610a2685610d9a565b8060005b85811015610a625784840389528151610a4385826109cd565b9450610a4e83610dc0565b925060208a01995050600181019050610a2a565b50829750879550505050505092915050565b6000610a7f82610db5565b610a898185610de9565b9350610a99818560208601610eac565b610aa28161102f565b840191505092915050565b6000610ab882610db5565b610ac28185610dfa565b9350610ad2818560208601610eac565b610adb8161102f565b840191505092915050565b6000610af3602783610dfa565b9150610afe82611040565b604082019050919050565b6000610b16600083610dde565b9150610b218261108f565b600082019050919050565b6000610b39600f83610dfa565b9150610b4482611092565b602082019050919050565b6000610b5c603483610dfa565b9150610b67826110bb565b604082019050919050565b6000606083016000830151610b8a60008601826109e1565b5060208301518482036020860152610ba28282610a74565b9150506040830151610bb76040860182610bc2565b508091505092915050565b610bcb81610e93565b82525050565b610bda81610e93565b82525050565b6000610beb82610b09565b9150819050919050565b60006020820190508181036000830152610c0f81846109ff565b905092915050565b60006020820190508181036000830152610c318184610aad565b905092915050565b60006040820190508181036000830152610c538185610aad565b9050610c6260208301846109f0565b9392505050565b60006040820190508181036000830152610c838185610aad565b9050610c926020830184610bd1565b9392505050565b60006020820190508181036000830152610cb281610ae6565b9050919050565b60006020820190508181036000830152610cd281610b2c565b9050919050565b60006020820190508181036000830152610cf281610b4f565b9050919050565b6000602082019050610d0e6000830184610bd1565b92915050565b6000604082019050610d296000830185610bd1565b8181036020830152610d3b8184610aad565b90509392505050565b6000610d4e610d5f565b9050610d5a8282610f11565b919050565b6000604051905090565b600067ffffffffffffffff821115610d8457610d83611000565b5b610d8d8261102f565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610e1682610e93565b9150610e2183610e93565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e5657610e55610f73565b5b828201905092915050565b6000610e6c82610e73565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610eca578082015181840152602081019050610eaf565b83811115610ed9576000848401525b50505050565b60006002820490506001821680610ef757607f821691505b60208210811415610f0b57610f0a610fd1565b5b50919050565b610f1a8261102f565b810181811067ffffffffffffffff82111715610f3957610f38611000565b5b80604052505050565b6000610f4d82610e93565b9150610f5883610e93565b925082610f6857610f67610fa2565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b50565b7f57616974203135206d696e757465730000000000000000000000000000000000600082015250565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e2074686520636f6e74726163742068617321000000000000000000000000602082015250565b61111381610e61565b811461111e57600080fd5b5056fea2646970667358221220d97cdc759c673422b68528738176103a4a5a35fa4eb633bcd4e157f69923ffc264736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCxPQUFqQyxDQUF0QjtBQUNBOUIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QjRCLE9BQU8sQ0FBQ0UsSUFBakM7QUFFQSxZQUFNRixPQUFPLENBQUNHLElBQVIsRUFBTjtBQUNBaEMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QjRCLE9BQU8sQ0FBQ0UsSUFBakM7QUFFQUwsTUFBQUEsS0FBSyxHQUFHLE1BQU1ELGtCQUFrQixDQUFDRSxhQUFuQixFQUFkO0FBQ0EzQixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwrQkFBWixFQUE2Q3lCLEtBQUssQ0FBQ0UsUUFBTixFQUE3QztBQUNELEtBcEJELE1Bb0JPO0FBQ0w1QixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNEO0FBQ0YsR0ExQkYsQ0EwQkcsT0FBT0ksS0FBUCxFQUFjO0FBQ2RMLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxLQUFaO0FBQ0Q7QUFDRixDQTlCRzs7Ozs7Ozs7OztBQ0pQOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2F2ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZUV0aGVyZXVtLmpzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2hlY2tJZldhbGxldElzQ29ubmVjdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25uZWN0V2FsbGV0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb250cmFjdEFkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dldEFsbFdhdmVzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy93YXZlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldGhlcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7Y3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50LCBjb25uZWN0V2FsbGV0fSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmxleCBcclxuICAgICAgICAgICAganVzdGlmeT1cImZsZXgtZW5kXCIgXHJcbiAgICAgICAgICAgIHc9XCI5MCVcIlxyXG4gICAgICAgICAgICBoPXsxMH1cclxuICAgICAgICAgICAgbXk9ezZ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyFjdXJyZW50QWNjb3VudCAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cIm9yYW5nZVwiIFxyXG4gICAgICAgICAgICAgICAgYmc9XCJvcmFuZ2UuNDAwXCJcclxuICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCIzeGxcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29ubmVjdFdhbGxldChzZXRDdXJyZW50QWNjb3VudCl9ICAgXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgQ29ubmVjdCB3YWxsZXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiIsImltcG9ydCB7SFN0YWNrLCBGbGV4LCBCb3gsIFNwYWNlciwgVGV4dCwgTGlua30gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcbmNvbnN0IFdhdmVzID0gKHthbGxXYXZlc30pID0+IHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmxleCBcclxuICAgICAgICAgICAgdz17e2Jhc2U6ICcxMDAlJywgbWQ6ICc4MCUnLCB4bDonODAlJ319XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbj17e2Jhc2U6ICdjb2x1bW4nLCBtZDpcInJvd1wiLCB4bDpcInJvd1wifX1cclxuICAgICAgICAgICAgbXk9ezEwfVxyXG4gICAgICAgICAgICBteD17OH1cclxuICAgICAgICAgICAgd3JhcD1cIndyYXBcIlxyXG4gICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2FsbFdhdmVzLnNvcnQoKGEsYikgPT4gYi50aW1lc3RhbXAgLSBhLnRpbWVzdGFtcCkubWFwKCh3YXZlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXHJcbiAgICAgICAgICAgICAgICAgICAgbWluVz1cIjI4MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBtYXhXPVwiMzAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkg9XCIxMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgYmc9XCJncmF5LjYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93PVwieGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJ4bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbT17NH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBweT17NH0gcHg9ezh9IHRleHRBbGlnbj1cImNlbnRlclwiIGZvbnRTaXplPXsxNn0gbWF4Vz1cIjEwMCVcIj57d2F2ZS5tZXNzYWdlfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8U3BhY2VyLz5cclxuICAgICAgICAgICAgICAgICAgICA8SFN0YWNrIHNwYWNpbmc9ezIwfSBwYj17NH0ganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBjb2xvcj1cImdyYXkuMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vcmlua2VieS5ldGhlcnNjYW4uaW8vYWRkcmVzcy8weDI3MmIwOTI0RDU0MWZkMGRGZEUzQWNiOTViYjIwZDNCNTM5NGM2NjY/ZnJvbWFkZHJlc3M9JHt3YXZlLmFkZHJlc3N9YH0gaXNFeHRlcm5hbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb249XCJ1bmRlcmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDwn5SOe3dhdmUuYWRkcmVzcy5zbGljZSgtNil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJncmF5LjMwMFwiPnt3YXZlLnRpbWVzdGFtcC50b1N0cmluZygpLnNsaWNlKDQsMTUpfSA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2F2ZXNcclxuIiwiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkIH0gZnJvbSAnLi4vdXRpbHMvY2hlY2tJZldhbGxldElzQ29ubmVjdGVkJ1xyXG5cclxuY29uc3QgdXNlRXRoZXJldW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKVxyXG4gICAgICAgIC50aGVuKGFjY291bnQgPT4ge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiB7IGN1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VFdGhlcmV1bVxyXG5cclxuIiwiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IHVzZU1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2lzRGlzYWJsZWQsIHNldElzRGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UubGVuZ3RoID4gMCA/IHNldElzRGlzYWJsZWQoZmFsc2UpIDogc2V0SXNEaXNhYmxlZCh0cnVlKVxyXG4gICAgICB9LCBbbWVzc2FnZV0pXHJcblxyXG4gICAgLy8gY29uc3QgaGFuZGxlTWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSlcclxuICAgIC8vICAgfVxyXG4gICAgcmV0dXJuIHttZXNzYWdlLCBzZXRNZXNzYWdlLCBpc0Rpc2FibGVkfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VNZXNzYWdlXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgY29udHJhY3RBQkkgZnJvbSAnLi4vdXRpbHMvV2F2ZVBvcnRhbC5qc29uJ1xuaW1wb3J0IHsgQm94LCBGbGV4LCBCdXR0b24sIElucHV0LCBTdGFjaywgVlN0YWNrLCBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCB9IGZyb20gJy4uL3V0aWxzL2NoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCc7XG5pbXBvcnQgeyBjb25uZWN0V2FsbGV0IH0gZnJvbSAnLi4vdXRpbHMvY29ubmVjdFdhbGxldCc7XG5pbXBvcnQgeyB3YXZlIH0gZnJvbSAnLi4vdXRpbHMvd2F2ZSc7XG5pbXBvcnQgeyBnZXRBbGxXYXZlcyB9IGZyb20gJy4uL3V0aWxzL2dldEFsbFdhdmVzJztcbmltcG9ydCB1c2VNZXNzYWdlIGZyb20gJy4uL2hvb2tzL3VzZU1lc3NhZ2UnO1xuaW1wb3J0IHVzZUV0aGVyZXVtIGZyb20gJy4uL2hvb2tzL3VzZUV0aGVyZXVtJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFdhdmVzIGZyb20gJy4uL2NvbXBvbmVudHMvV2F2ZXMnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3Qge2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudH0gPSB1c2VFdGhlcmV1bSgpXG4gIGNvbnN0IHttZXNzYWdlLCBzZXRNZXNzYWdlLCBpc0Rpc2FibGVkfSA9IHVzZU1lc3NhZ2UoKVxuICBjb25zdCBbYWxsV2F2ZXMsIHNldEFsbFdhdmVzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoY3VycmVudEFjY291bnQpIHtcbiAgICAgIGdldEFsbFdhdmVzKHNldEFsbFdhdmVzKVxuICAgIH1cbiAgfSwgW2N1cnJlbnRBY2NvdW50XSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5XZWIzIExlYXJuaW5nPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgIDxGbGV4XG4gICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxuICAgIGJnPVwiZ3JheS44MDBcIlxuICAgIHc9XCIxMDAlXCJcbiAgICBtaW5IPVwiMTAwdmhcIlxuICAgID5cbiAgICAgIDxIZWFkZXIgY3VycmVudEFjY291bnQ9e2N1cnJlbnRBY2NvdW50fSBzZXRDdXJyZW50QWNjb3VudD17c2V0Q3VycmVudEFjY291bnR9IGNvbm5lY3RXYWxsZXQ9e2Nvbm5lY3RXYWxsZXR9Lz5cbiAgICAgIDxCb3ggZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIjJ4bFwiIG1iPXs2fT4g8J+RqOKAjfCfmoDvuI8gPC9IZWFkaW5nPiBcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJ4bFwiIGNvbG9yPVwid2hpdGVcIj4gV2ViMyBMZWFybmluZyA8L0hlYWRpbmc+XG4gICAgICA8L0JveD5cblxuICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIG10PXs2fSBteD17Nn0gY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwibGdcIiBmb250V2VpZ2h0PVwidGhpblwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICBDb25uZWN0IHlvdXIgd2FsbGV0IHRvIGRpc2NvdmVyIHdoYXQgb3RoZXJzIGFyZSB3b3JraW5nIG9uIGluIHRoZSBXZWIzIHNwYWNlIGFuZCBzaGFyZSB5b3VyIGxlYXJuaW5nIGdvYWwhIPCfmoBcbiAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezR9IG10PXsxMn0gdz17e2Jhc2U6IFwiODAlXCIsIG1kOlwiNDAlXCIsIHhsOlwiMjUlXCJ9fT5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGxlYXJuaW5nIGdvYWxcIiBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSBiZz1cIndoaXRlXCIgcm91bmRlZD1cIjJ4bFwiLz5cbiAgICAgICAgICAgIDxCdXR0b24gYmc9XCJjeWFuLjQwMFwiIGNvbG9yU2NoZW1lPVwiY3lhblwiIHJvdW5kZWQ9XCIyeGxcIiBvbkNsaWNrPXsoKSA9PiB3YXZlKG1lc3NhZ2UpfSBpc0Rpc2FibGVkPXtpc0Rpc2FibGVkfT5cbiAgICAgICAgICAgICAgU2hhcmUgbXkgZ29hbCFcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8V2F2ZXMgYWxsV2F2ZXM9e2FsbFdhdmVzfS8+XG4gICAgPC9GbGV4PlxuICAgIDwvPlxuICApXG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIiwiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgeyBnZXRBbGxXYXZlcyB9IGZyb20gXCIuL2dldEFsbFdhdmVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgICAgIGlmICghZXRoZXJldW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYWtlIHN1cmUgeW91IGhhdmUgbWV0YW1hc2shXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXZSBoYXZlIHRoZSBldGhlcmV1bSBvYmplY3RcIiwgZXRoZXJldW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIENoZWNrIGlmIHdlJ3JlIGF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoZSB1c2VyJ3Mgd2FsbGV0XHJcbiAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pO1xyXG5cclxuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGb3VuZCBhbiBhdXRob3JpemVkIGFjY291bnQ6XCIsIGFjY291bnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjb3VudFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gYXV0aG9yaXplZCBhY2NvdW50IGZvdW5kXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jIChzZXRDdXJyZW50QWNjb3VudCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICAgICAgaWYgKCFldGhlcmV1bSkge1xyXG4gICAgICAgIGFsZXJ0KFwiR2V0IE1ldGFNYXNrIVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZFwiLCBhY2NvdW50c1swXSk7XHJcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTsgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9IiwiXHJcbmV4cG9ydCBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4MjcyYjA5MjRENTQxZmQwZEZkRTNBY2I5NWJiMjBkM0I1Mzk0YzY2NlwiXHJcbiIsImltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHtjb250cmFjdEFkZHJlc3N9IGZyb20gJy4vY29udHJhY3RBZGRyZXNzJ1xyXG5pbXBvcnQgY29udHJhY3RBQkkgZnJvbSAnLi9XYXZlUG9ydGFsLmpzb24nXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsV2F2ZXMgPSBhc3luYyAoc2V0QWxsV2F2ZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG4gICAgICAgIGlmIChldGhlcmV1bSkge1xyXG4gICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pO1xyXG4gICAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICAgICAgICBjb25zdCB3YXZlUG9ydGFsQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgY29udHJhY3RBQkkuYWJpLCBzaWduZXIpO1xyXG4gIFxyXG4gICAgICAgICAgLypcclxuICAgICAgICAgICAqIENhbGwgdGhlIGdldEFsbFdhdmVzIG1ldGhvZCBmcm9tIHlvdXIgU21hcnQgQ29udHJhY3RcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgY29uc3Qgd2F2ZXMgPSBhd2FpdCB3YXZlUG9ydGFsQ29udHJhY3QuZ2V0QWxsV2F2ZXMoKTtcclxuICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgICAgLypcclxuICAgICAgICAgICAqIFdlIG9ubHkgbmVlZCBhZGRyZXNzLCB0aW1lc3RhbXAsIGFuZCBtZXNzYWdlIGluIG91ciBVSSBzbyBsZXQnc1xyXG4gICAgICAgICAgICogcGljayB0aG9zZSBvdXRcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgbGV0IHdhdmVzQ2xlYW5lZCA9IFtdO1xyXG4gICAgICAgICAgd2F2ZXMuZm9yRWFjaCh3YXZlID0+IHtcclxuICAgICAgICAgICAgd2F2ZXNDbGVhbmVkLnB1c2goe1xyXG4gICAgICAgICAgICAgIGFkZHJlc3M6IHdhdmUud2F2ZXIsXHJcbiAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSh3YXZlLnRpbWVzdGFtcCAqIDEwMDApLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHdhdmUubWVzc2FnZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgICAgLypcclxuICAgICAgICAgICAqIFN0b3JlIG91ciBkYXRhIGluIFJlYWN0IFN0YXRlXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIHNldEFsbFdhdmVzKHdhdmVzQ2xlYW5lZCk7XHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIExpc3RlbiBpbiBmb3IgZW1pdHRlciBldmVudHMhXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIHdhdmVQb3J0YWxDb250cmFjdC5vbihcIk5ld1dhdmVcIiwgKGZyb20sIHRpbWVzdGFtcCwgbWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ld1dhdmVcIiwgZnJvbSwgdGltZXN0YW1wLCBtZXNzYWdlKTtcclxuICBcclxuICAgICAgICAgICAgc2V0QWxsV2F2ZXMocHJldlN0YXRlID0+IFsuLi5wcmV2U3RhdGUsIHtcclxuICAgICAgICAgICAgICBhZGRyZXNzOiBmcm9tLFxyXG4gICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUodGltZXN0YW1wICogMTAwMCksXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFdGhlcmV1bSBvYmplY3QgZG9lc24ndCBleGlzdCFcIilcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9ICBcclxuICAgIH0iLCJpbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB7Y29udHJhY3RBZGRyZXNzfSBmcm9tICcuL2NvbnRyYWN0QWRkcmVzcyc7XHJcbmltcG9ydCBjb250cmFjdEFCSSBmcm9tICcuL1dhdmVQb3J0YWwuanNvbidcclxuXHJcbmV4cG9ydCBjb25zdCB3YXZlID0gYXN5bmMgKG1lc3NhZ2UpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XHJcbiBcclxuICAgICAgIGlmIChldGhlcmV1bSkge1xyXG4gICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XHJcbiAgICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgICogWW91IGFyZSBkZWZpbmluZyBjb250cmFjdEFCSSByaWdodCBoZXJlLiBMZXQncyBjaGFuZ2UgdGhpcyFcclxuICAgICAgICAgKi9cclxuICAgICAgICAgY29uc3Qgd2F2ZXBvcnRhbENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGNvbnRyYWN0QUJJLmFiaSwgc2lnbmVyKTtcclxuIFxyXG4gICAgICAgICBsZXQgY291bnQgPSBhd2FpdCB3YXZlcG9ydGFsQ29udHJhY3QuZ2V0VG90YWxXYXZlcygpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIlJldHJpZXZlZCB0b3RhbCB3YXZlIGNvdW50Li4uXCIsIGNvdW50LnRvTnVtYmVyKCkpO1xyXG4gXHJcbiAgICAgICAgIGNvbnN0IHdhdmVUeG4gPSBhd2FpdCB3YXZlcG9ydGFsQ29udHJhY3Qud2F2ZShtZXNzYWdlLCB7Z2FzTGltaXQ6IDMwMDAwMH0pO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIk1pbmluZy4uLlwiLCB3YXZlVHhuLmhhc2gpO1xyXG4gXHJcbiAgICAgICAgIGF3YWl0IHdhdmVUeG4ud2FpdCgpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIk1pbmVkIC0tIFwiLCB3YXZlVHhuLmhhc2gpO1xyXG4gXHJcbiAgICAgICAgIGNvdW50ID0gYXdhaXQgd2F2ZXBvcnRhbENvbnRyYWN0LmdldFRvdGFsV2F2ZXMoKTtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJSZXRyaWV2ZWQgdG90YWwgd2F2ZSBjb3VudC4uLlwiLCBjb3VudC50b051bWJlcigpKTtcclxuICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiRXRoZXJldW0gb2JqZWN0IGRvZXNuJ3QgZXhpc3QhXCIpO1xyXG4gICAgICAgfVxyXG4gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICB9XHJcbiAgIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV0aGVyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJGbGV4IiwiQnV0dG9uIiwiSGVhZGVyIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImNvbm5lY3RXYWxsZXQiLCJIU3RhY2siLCJCb3giLCJTcGFjZXIiLCJUZXh0IiwiTGluayIsIldhdmVzIiwiYWxsV2F2ZXMiLCJiYXNlIiwibWQiLCJ4bCIsInNvcnQiLCJhIiwiYiIsInRpbWVzdGFtcCIsIm1hcCIsIndhdmUiLCJpbmRleCIsIm1lc3NhZ2UiLCJhZGRyZXNzIiwic2xpY2UiLCJ0b1N0cmluZyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY2hlY2tJZldhbGxldElzQ29ubmVjdGVkIiwidXNlRXRoZXJldW0iLCJ0aGVuIiwiYWNjb3VudCIsInVzZU1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaXNEaXNhYmxlZCIsInNldElzRGlzYWJsZWQiLCJsZW5ndGgiLCJSZWFjdCIsIkhlYWQiLCJldGhlcnMiLCJjb250cmFjdEFCSSIsIklucHV0IiwiU3RhY2siLCJWU3RhY2siLCJIZWFkaW5nIiwiZ2V0QWxsV2F2ZXMiLCJJbmRleCIsInNldEFsbFdhdmVzIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJjb25zb2xlIiwibG9nIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiZXJyb3IiLCJhbGVydCIsImNvbnRyYWN0QWRkcmVzcyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwid2F2ZVBvcnRhbENvbnRyYWN0IiwiQ29udHJhY3QiLCJhYmkiLCJ3YXZlcyIsIndhdmVzQ2xlYW5lZCIsImZvckVhY2giLCJwdXNoIiwid2F2ZXIiLCJEYXRlIiwib24iLCJmcm9tIiwicHJldlN0YXRlIiwid2F2ZXBvcnRhbENvbnRyYWN0IiwiY291bnQiLCJnZXRUb3RhbFdhdmVzIiwidG9OdW1iZXIiLCJ3YXZlVHhuIiwiZ2FzTGltaXQiLCJoYXNoIiwid2FpdCJdLCJzb3VyY2VSb290IjoiIn0=