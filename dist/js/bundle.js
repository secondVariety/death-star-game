/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _less_styles_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../less/styles.less */ \"./src/less/styles.less\");\n/* harmony import */ var _less_styles_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_less_styles_less__WEBPACK_IMPORTED_MODULE_0__);\n// Styles\n\n\n// Title\ndocument.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>Star Wars Planets - <em>Guessing Game</em></h1>');\n\n// Create Element\nconst createElem = (elem = 'div', name = null, attrs = null, pos = 'body') => {\n    const create = () => {\n        let e = document.createElement(elem);\n        name ? e.id = name : null;\n        if (attrs) {\n            Object.keys(attrs).forEach(attr => {\n                e.setAttribute(attr, attrs[attr]);\n            });\n        }\n        document.querySelector(pos).insertAdjacentElement('beforeend', e);\n    };\n    return create;\n};\n\n// Death Star\nconst deathStar = createElem('div', 'death-star');\ndeathStar();\n\n// Death Star lasers\nfor (let i = 0; i <= 5; i++) {\n    let laser = createElem('span', `laser-${i}`, { 'class': 'laser' }, '#death-star');\n    laser();\n}\n\n// Alderaan\nconst alderaan = createElem('div', 'alderaan');\nalderaan();\n\n// Board\nconst main = createElem('main', 'main');\nmain();\n\n// Words\nlet wordArr = ['HOTH', 'ENDOR', 'MUSTAFAR', 'GEONOSIS', 'NABOO', 'CORUSCANT', 'ALDERAAN', 'TATOOINE', 'BESPIN', 'KAMINO', 'UTAPAU', 'KASHYYYK'];\nlet clueArr = ['Wampas', 'Ewoks', 'Lava', 'Droid Factory', 'N-1 Starfighter', 'The Republic Capital', 'Bail Organa', 'Jabba the Hutt', 'Lando System', 'Cloners', 'Boga', 'Wookies'];\n\n// Select a word\nlet randNum = Math.round(Math.random() * (wordArr.length - 1));\nlet wordItem = wordArr[randNum];\nlet clueItem = clueArr[randNum];\nconsole.log(wordItem);\n\n// Number of guess\nlet guesses = Math.round(wordItem.length / 2);\nconst numGuessesRemaining = num => {\n    document.querySelector('main').insertAdjacentHTML('afterbegin', `<h2 id=\"number-of-guessings\">Guess the name of a random Star Wars planet.<br /> Clue: ${clueItem} <em>Number of guesses remaining - ${num}</em></h2>`);\n};\nnumGuessesRemaining(guesses);\n\n// Correct guesses\nlet correcGuesses = 0;\n\n// Output a word\nfor (let i = 0; i < wordItem.length; i++) {\n    let input = createElem('input', null, { 'maxlength': 1, 'type': 'text', 'class': 'input--letter' }, 'main');\n    input();\n}\n\n// Game progress\nconst gameProgress = num => {\n    const displayLasers = () => {\n        const $laser0 = document.querySelector('#laser-0');\n        const $laser1 = document.querySelector('#laser-1');\n        const $laser2 = document.querySelector('#laser-2');\n        const $laser3 = document.querySelector('#laser-3');\n        const $laser4 = document.querySelector('#laser-4');\n        const $laser5 = document.querySelector('#laser-5');\n        $laser0 ? $laser0.style.cssText = 'display:block;' : null;\n        if (num == 5) {\n            return;\n        }\n        $laser1 ? $laser1.style.cssText = 'display:block;' : null;\n        $laser2 ? $laser2.style.cssText = 'display:block;' : null;\n        if (num == 4) {\n            return;\n        }\n        $laser3 ? $laser3.style.cssText = 'display:block;' : null;\n        if (num == 3) {\n            return;\n        }\n        $laser4 ? $laser4.style.cssText = 'display:block;' : null;\n        if (num == 2) {\n            return;\n        }\n        $laser5 ? $laser5.style.cssText = 'display:block;' : null;\n    };\n    displayLasers();\n    if (num == 0) {\n        const $inputs = document.querySelectorAll('.input--letter');\n        $inputs.forEach(e => {\n            e.setAttribute('disabled', true);\n            e.style.cssText = 'opacity:.5';\n        });\n        const removeLasers = document.querySelectorAll('.laser');\n        removeLasers.forEach(e => {\n            e.remove();\n        });\n        document.querySelector('#alderaan').remove();\n        lostGame();\n    }\n};\n\n// Message\nconst message = msg => {\n    const output = () => {\n        const id = 'msg-' + Math.round(Math.random() * 10000);\n        const idHash = '#' + id;\n        let outputMsg = createElem('div', id, { 'class': 'message' });\n        outputMsg();\n        document.querySelector(idHash).innerHTML = '<p>' + msg + '</p>';\n        let close = createElem('span', null, null, idHash);\n        close();\n        let lightboxBg = createElem('span', null, { 'class': 'lightbox-bg' });\n        lightboxBg();\n    };\n    return output;\n};\n\n// Close Message\nconst closeMessage = () => {\n    document.addEventListener('click', () => {\n        location.reload();\n    });\n};\n\n// Won\nconst wonGame = () => {\n    const succcesMsg = message('You saved the planet!');\n    succcesMsg();\n    closeMessage();\n};\n\n// Failed\nconst lostGame = () => {\n    const failMsg = message('You Failed! The planet has been destroyed');\n    failMsg();\n    closeMessage();\n};\n\n// Input functionaility\nlet $inputs = document.querySelectorAll('.input--letter');\n$inputs.forEach((input, index) => {\n    input.setAttribute('data-letter', wordItem[index]);\n    input.addEventListener('keyup', e => {\n        let key = e.key.toUpperCase();\n        if (!key.match(/ALT|BACKSPACE|TAB|CONTROL/)) {\n            if (key == input.getAttribute('data-letter')) {\n                input.setAttribute('placeholder', key);\n                input.setAttribute('disabled', true);\n                input.nextElementSibling ? input.nextElementSibling.focus() : null;\n                correcGuesses += 1;\n                if (correcGuesses == wordItem.length) {\n                    wonGame();\n                }\n            } else {\n                document.querySelector('#number-of-guessings').remove();\n                guesses !== 0 ? guesses -= 1 : null;\n                numGuessesRemaining(guesses);\n                gameProgress(guesses);\n            }\n        }\n    });\n});\n\n// Copyright\nconst copyright = createElem('footer', 'footer');\ncopyright();\ndocument.querySelector('footer').innerHTML = '<small>&copy; 1986</small>';\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/less/styles.less":
/*!******************************!*\
  !*** ./src/less/styles.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/less/styles.less?");

/***/ })

/******/ });