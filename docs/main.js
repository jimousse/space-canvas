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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./star */ "./src/star.js");
/* harmony import */ var _shooting_star__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shooting-star */ "./src/shooting-star.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 // on screen canvas

var canvas = document.querySelector('#my-canvas');
var context = canvas.getContext("2d");

var _document$body$getBou = document.body.getBoundingClientRect(),
    canvasHeight = _document$body$getBou.height,
    canvasWidth = _document$body$getBou.width;

canvas.width = canvasWidth;
canvas.height = canvasHeight; // off screen canvas

var offScreenCanvas = document.createElement('canvas');
var bufferCtx = offScreenCanvas.getContext('2d');
offScreenCanvas.width = canvasWidth;
offScreenCanvas.height = canvasHeight; // stars

var stars = [];

for (var i = 0; i < 350; i++) {
  stars.push(new _star__WEBPACK_IMPORTED_MODULE_0__["default"](bufferCtx, {
    width: canvasWidth,
    height: canvasHeight
  }));
} // shooting stars


var shootingStars = [];

for (var _i = 0; _i < 2; _i++) {
  shootingStars.push(new _shooting_star__WEBPACK_IMPORTED_MODULE_1__["default"](bufferCtx, {
    width: canvasWidth,
    height: canvasHeight
  }));
}

var ro = new ResizeObserver(function (entries) {
  var _iterator = _createForOfIteratorHelper(entries),
      _step;

  try {
    var _loop = function _loop() {
      var entry = _step.value;
      var _entry$contentRect = entry.contentRect,
          width = _entry$contentRect.width,
          height = _entry$contentRect.height;
      canvas.width = width;
      canvas.height = height;
      offScreenCanvas.width = width;
      offScreenCanvas.height = height;
      stars.forEach(function (star) {
        return star.canvasSize = {
          width: width,
          height: height
        };
      });
      shootingStars.forEach(function (shootingStar) {
        return shootingStar.canvasSize = {
          width: width,
          height: height
        };
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
ro.observe(document.body);

function animate() {
  // update stars
  stars.forEach(function (star) {
    return star.update();
  }); // update shooting star

  shootingStars.forEach(function (shootingStar) {
    return shootingStar.update();
  }); // draw on off-screen canvas

  bufferCtx.fillStyle = '#110E19';
  bufferCtx.fillRect(0, 0, offScreenCanvas.width, offScreenCanvas.height);
  stars.forEach(function (star) {
    return star.draw();
  });
  shootingStars.forEach(function (shootingStar) {
    return shootingStar.draw();
  }); // copy to on-screen canvas

  context.drawImage(offScreenCanvas, 0, 0); // request frame

  window.requestAnimationFrame(animate);
}

animate();

/***/ }),

/***/ "./src/shooting-star.js":
/*!******************************!*\
  !*** ./src/shooting-star.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShootingStar; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ShootingStar = /*#__PURE__*/function () {
  function ShootingStar(context, _ref) {
    var width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, ShootingStar);

    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.speed = Math.random() * 10 + 50;
    this.len = Math.random() * 80 + 50;
    this.maxX = width;
    this.maxY = height;
    this.active = true;
    this.waitTime = 0;
    this.context = context;
    this.initDelay = Math.floor(Math.random() * 50);
  }

  _createClass(ShootingStar, [{
    key: "canvasSize",
    set: function set(_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      this.maxX = width;
      this.maxY = height;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.isOutsideCanvas()) {
        // if not active, decrease timer
        if (!this.active) {
          this.waitTime -= 1; // it's active so start timer
        } else {
          this.waitTime = Math.floor(Math.random() * 500);
          this.active = false;
        } // check if reset to active


        if (this.waitTime === 0) {
          this.active = true;
          this.reset();
        }
      }

      this.x -= this.speed;
      this.y += this.speed;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.y = -this.len;
      this.x = Math.random() * 2 * this.maxX;
    }
  }, {
    key: "isOutsideCanvas",
    value: function isOutsideCanvas() {
      return this.y >= this.maxY + 100;
    }
  }, {
    key: "draw",
    value: function draw() {
      if (this.initDelay >= 0) {
        this.initDelay--;
        return;
      }

      if (!this.active) return;
      this.context.strokeStyle = '#ffffff';
      this.context.lineWidth = 1;
      this.context.beginPath();
      this.context.moveTo(this.x, this.y);
      this.context.lineTo(this.x + this.len, this.y - this.len);
      this.context.stroke();
    }
  }]);

  return ShootingStar;
}();



/***/ }),

/***/ "./src/star.js":
/*!*********************!*\
  !*** ./src/star.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Star; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Star = /*#__PURE__*/function () {
  function Star(context, _ref) {
    var width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, Star);

    this.size = Math.random() + .5;
    this.speed = 0.1;
    this.maxX = width;
    this.maxY = height;
    this.context = context;
  }

  _createClass(Star, [{
    key: "canvasSize",
    set: function set(_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      this.maxX = width;
      this.maxY = height;
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.draw();
    }
  }, {
    key: "update",
    value: function update() {
      this.x -= this.speed;
      this.reset();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.x <= 0) {
        this.x = this.maxX;
      } else if (this.x >= this.maxX) {
        this.x = 0;
      } else if (this.y <= 0) {
        this.y = this.maxY;
      } else if (this.y >= this.maxY) {
        this.y = 0;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      this.context.fillStyle = '#fff';
      this.context.fillRect(this.x, this.y, this.size, this.size);
    }
  }]);

  return Star;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zaG9vdGluZy1zdGFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFyLmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYm9keSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNhbnZhc0hlaWdodCIsImhlaWdodCIsImNhbnZhc1dpZHRoIiwid2lkdGgiLCJvZmZTY3JlZW5DYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiYnVmZmVyQ3R4Iiwic3RhcnMiLCJpIiwicHVzaCIsIlN0YXIiLCJzaG9vdGluZ1N0YXJzIiwiU2hvb3RpbmdTdGFyIiwicm8iLCJSZXNpemVPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNvbnRlbnRSZWN0IiwiZm9yRWFjaCIsInN0YXIiLCJjYW52YXNTaXplIiwic2hvb3RpbmdTdGFyIiwib2JzZXJ2ZSIsImFuaW1hdGUiLCJ1cGRhdGUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXciLCJkcmF3SW1hZ2UiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ4IiwiTWF0aCIsInJhbmRvbSIsInkiLCJzcGVlZCIsImxlbiIsIm1heFgiLCJtYXhZIiwiYWN0aXZlIiwid2FpdFRpbWUiLCJpbml0RGVsYXkiLCJmbG9vciIsImlzT3V0c2lkZUNhbnZhcyIsInJlc2V0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJzaXplIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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Q0FBTCxHQUFTLENBQVQ7QUFDRDtBQUNGOzs7V0FFRCxnQkFBTztBQUNMLFdBQUt0QyxPQUFMLENBQWE2QixTQUFiLEdBQXlCLE1BQXpCO0FBQ0EsV0FBSzdCLE9BQUwsQ0FBYThCLFFBQWIsQ0FBc0IsS0FBS0ssQ0FBM0IsRUFBOEIsS0FBS0csQ0FBbkMsRUFBc0MsS0FBS2lCLElBQTNDLEVBQWlELEtBQUtBLElBQXREO0FBQ0QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFN0YXIgZnJvbSAnLi9zdGFyJztcclxuaW1wb3J0IFNob290aW5nU3RhciBmcm9tICcuL3Nob290aW5nLXN0YXInO1xyXG5cclxuLy8gb24gc2NyZWVuIGNhbnZhc1xyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktY2FudmFzJyk7XHJcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5jb25zdCB7IGhlaWdodDogY2FudmFzSGVpZ2h0LCB3aWR0aDogY2FudmFzV2lkdGggfSA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbmNhbnZhcy53aWR0aCA9IGNhbnZhc1dpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xyXG5cclxuLy8gb2ZmIHNjcmVlbiBjYW52YXNcclxuY29uc3Qgb2ZmU2NyZWVuQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbmNvbnN0IGJ1ZmZlckN0eCA9IG9mZlNjcmVlbkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5vZmZTY3JlZW5DYW52YXMud2lkdGggPSBjYW52YXNXaWR0aDtcclxub2ZmU2NyZWVuQ2FudmFzLmhlaWdodCA9IGNhbnZhc0hlaWdodDtcclxuXHJcbi8vIHN0YXJzXHJcbmxldCBzdGFycyA9IFtdO1xyXG5mb3IobGV0IGkgPSAwOyBpIDwgMzUwOyBpKyspIHtcclxuICBzdGFycy5wdXNoKG5ldyBTdGFyKGJ1ZmZlckN0eCwgeyB3aWR0aDogY2FudmFzV2lkdGgsIGhlaWdodDogY2FudmFzSGVpZ2h0IH0pKTtcclxufVxyXG5cclxuLy8gc2hvb3Rpbmcgc3RhcnNcclxubGV0IHNob290aW5nU3RhcnMgPSBbXTtcclxuZm9yKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gIHNob290aW5nU3RhcnMucHVzaChuZXcgU2hvb3RpbmdTdGFyKGJ1ZmZlckN0eCwgeyB3aWR0aDogY2FudmFzV2lkdGgsIGhlaWdodDogY2FudmFzSGVpZ2h0IH0pKTtcclxufVxyXG5cclxuY29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgZm9yIChsZXQgZW50cnkgb2YgZW50cmllcykge1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBlbnRyeS5jb250ZW50UmVjdDtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIG9mZlNjcmVlbkNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgb2ZmU2NyZWVuQ2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHN0YXJzLmZvckVhY2goc3RhciA9PiBzdGFyLmNhbnZhc1NpemUgPSB7IHdpZHRoLCBoZWlnaHQgfSk7XHJcbiAgICBzaG9vdGluZ1N0YXJzLmZvckVhY2goc2hvb3RpbmdTdGFyID0+IHNob290aW5nU3Rhci5jYW52YXNTaXplID0geyB3aWR0aCwgaGVpZ2h0IH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG5yby5vYnNlcnZlKGRvY3VtZW50LmJvZHkpO1xyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuICAvLyB1cGRhdGUgc3RhcnNcclxuICBzdGFycy5mb3JFYWNoKHN0YXIgPT4gc3Rhci51cGRhdGUoKSk7XHJcbiAgLy8gdXBkYXRlIHNob290aW5nIHN0YXJcclxuICBzaG9vdGluZ1N0YXJzLmZvckVhY2goc2hvb3RpbmdTdGFyID0+IHNob290aW5nU3Rhci51cGRhdGUoKSk7XHJcblxyXG4gIC8vIGRyYXcgb24gb2ZmLXNjcmVlbiBjYW52YXNcclxuICBidWZmZXJDdHguZmlsbFN0eWxlID0gJyMxMTBFMTknO1xyXG4gIGJ1ZmZlckN0eC5maWxsUmVjdCgwLCAwLCBvZmZTY3JlZW5DYW52YXMud2lkdGgsIG9mZlNjcmVlbkNhbnZhcy5oZWlnaHQpO1xyXG4gIHN0YXJzLmZvckVhY2goc3RhciA9PiBzdGFyLmRyYXcoKSk7XHJcbiAgc2hvb3RpbmdTdGFycy5mb3JFYWNoKHNob290aW5nU3RhciA9PiBzaG9vdGluZ1N0YXIuZHJhdygpKTtcclxuXHJcbiAgLy8gY29weSB0byBvbi1zY3JlZW4gY2FudmFzXHJcbiAgY29udGV4dC5kcmF3SW1hZ2Uob2ZmU2NyZWVuQ2FudmFzLCAwLCAwKTtcclxuXHJcbiAgLy8gcmVxdWVzdCBmcmFtZVxyXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbn1cclxuXHJcbmFuaW1hdGUoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9vdGluZ1N0YXIge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHsgd2lkdGgsIGhlaWdodCB9KSB7XHJcbiAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogd2lkdGg7XHJcbiAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogaGVpZ2h0O1xyXG4gICAgdGhpcy5zcGVlZCA9IChNYXRoLnJhbmRvbSgpICogMTApICsgNTA7XHJcbiAgICB0aGlzLmxlbiA9IChNYXRoLnJhbmRvbSgpICogODApICsgNTA7XHJcbiAgICB0aGlzLm1heFggPSB3aWR0aDtcclxuICAgIHRoaXMubWF4WSA9IGhlaWdodDtcclxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMud2FpdFRpbWUgPSAwO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgIHRoaXMuaW5pdERlbGF5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTApO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNhbnZhc1NpemUoeyB3aWR0aCwgaGVpZ2h0IH0pIHtcclxuICAgIHRoaXMubWF4WCA9IHdpZHRoO1xyXG4gICAgdGhpcy5tYXhZID0gaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuaXNPdXRzaWRlQ2FudmFzKCkpIHtcclxuICAgICAgLy8gaWYgbm90IGFjdGl2ZSwgZGVjcmVhc2UgdGltZXJcclxuICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMud2FpdFRpbWUgLT0gMTtcclxuICAgICAgLy8gaXQncyBhY3RpdmUgc28gc3RhcnQgdGltZXJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLndhaXRUaW1lID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAwKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBjaGVjayBpZiByZXNldCB0byBhY3RpdmVcclxuICAgICAgaWYgKHRoaXMud2FpdFRpbWUgPT09IDApIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy54IC09IHRoaXMuc3BlZWQ7XHJcbiAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcclxuICB9XHJcblxyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy55ID0gLXRoaXMubGVuO1xyXG4gICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSogMiAqIHRoaXMubWF4WDtcclxuICB9XHJcblxyXG4gIGlzT3V0c2lkZUNhbnZhcygpIHtcclxuICAgIHJldHVybiB0aGlzLnkgPj0gdGhpcy5tYXhZICsgMTAwOyAgIFxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIGlmICh0aGlzLmluaXREZWxheSA+PSAwKSB7XHJcbiAgICAgIHRoaXMuaW5pdERlbGF5LS07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5hY3RpdmUpIHJldHVybjtcclxuICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9ICcjZmZmZmZmJztcclxuICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSAxO1xyXG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XHJcbiAgICB0aGlzLmNvbnRleHQubGluZVRvKHRoaXMueCArIHRoaXMubGVuLCB0aGlzLnkgLSB0aGlzLmxlbik7XHJcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhciB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dCwgeyB3aWR0aCwgaGVpZ2h0IH0pIHtcclxuICAgIHRoaXMuc2l6ZSA9IE1hdGgucmFuZG9tKCkgKyAuNTtcclxuICAgIHRoaXMuc3BlZWQgPSAwLjE7XHJcbiAgICB0aGlzLm1heFggPSB3aWR0aDtcclxuICAgIHRoaXMubWF4WSA9IGhlaWdodDtcclxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgfVxyXG4gIFxyXG4gIHNldCBjYW52YXNTaXplKHsgd2lkdGgsIGhlaWdodCB9KSB7XHJcbiAgICB0aGlzLm1heFggPSB3aWR0aDtcclxuICAgIHRoaXMubWF4WSA9IGhlaWdodDtcclxuICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiB3aWR0aDtcclxuICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiBoZWlnaHQ7XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICBpZiAodGhpcy54IDw9IDApIHtcclxuICAgICAgdGhpcy54ID0gdGhpcy5tYXhYO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnggPj0gdGhpcy5tYXhYKSB7XHJcbiAgICAgIHRoaXMueCA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMueSA8PSAwKSB7XHJcbiAgICAgIHRoaXMueSA9IHRoaXMubWF4WTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy55ID49IHRoaXMubWF4WSkge1xyXG4gICAgICB0aGlzLnkgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI2ZmZic7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuc2l6ZSwgdGhpcy5zaXplKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9