/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg: #0b1220;
	--surface: rgba(255, 255, 255, 0.06);
	--surface-2: rgba(255, 255, 255, 0.09);
	--text: rgba(255, 255, 255, 0.92);
	--muted: rgba(255, 255, 255, 0.68);
	--border: rgba(255, 255, 255, 0.12);
	--accent: #5ad1ff;
	--shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
	--radius: 14px;
}

body {
    min-height: 100vh;
    font-family: system-ui, -apple-system, sans-serif;
    color: var(--text);
    background-color: #070b14;
    background-image: 
		radial-gradient(circle at 15% 10%, rgba(90, 209, 255, 0.2), transparent 40%),
		radial-gradient(
			circle at 85% 25%,
			rgba(125, 92, 255, 0.15),
			transparent 40%
		);
    background-attachment: fixed;
    background-repeat: no-repeat;
}

header {
    padding: 0;
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(10px);
    background: rgba(11, 18, 32, 0.6);
    border-bottom: 1px solid var(--border);
}

header > * {
    max-width: 980px;
    margin: 0 auto;
    padding: 16px 16px 12px;
}

header .search-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    align-items: center;
    position: relative;
}

.app-icone {
	width: 40px;
	height: 40px;
	border-radius: 12px;
	background: linear-gradient(
		135deg,
		rgba(90, 209, 255, 0.9),
		rgba(125, 92, 255, 0.75)
	);
	box-shadow: var(--shadow);
	display: none;
}

#my-city {
    width: 100%;
    padding: 12px 12px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.04);
    color: var(--text);
    outline: none;
    font-size: 14px;
}

#my-city::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

#my-city:focus {
    border-color: rgba(90, 209, 255, 0.55);
    box-shadow: 0 0 0 4px rgba(90, 209, 255, 0.12);
}

.search-row {
	display: flex;
	align-items: center;
	gap: 10px;
}

.geo-btn {
    display: flex;
    align-items: center;
    gap: 6px;

    padding: 10px 14px;
    height: 42px;

    border-radius: 12px;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.04);

    color: var(--muted);
    font-size: 13px;
    font-weight: 500;

    cursor: pointer;
    white-space: nowrap;
}

.geo-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    color: var(--text);
    border-color: rgba(90, 209, 255, 0.35);
}

.geo-btn:active {
    transform: translateY(1px);
}

.geo-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.geo-text {
    font-size: 13px;
    color: var(--muted);
}

.geo-icon {
    font-size: 16px;
    opacity: 0.85;
}

#suggestions {
	position: absolute;
	left: 0;
	right: 0;
	top: calc(100% + 8px);
	margin: 0;
	padding: 6px;
	list-style: none;
	border: 1px solid var(--border);
	border-radius: 12px;
	background: rgba(8, 12, 22, 0.95);
	box-shadow: var(--shadow);
	max-height: 280px;
	overflow: auto;
}

.content {
    max-width: 980px;
    margin: 20px auto;
    padding: 0 16px 80px;
}

.city-name {
    font-size: 18px;
    font-weight: 700;
    color: var(--text);
    margin: 10px 0 14px;
}

.current {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 16px;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background: var(--surface);
    box-shadow: var(--shadow);
}

.box-1, 
.box-2,
.box-3 {
    flex: 1 1 250px;
    padding: 14px;
    border-radius: 12px;
    background: var(--surface-2);
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.box-1 {
    display: flex;
    gap: 24px;
    align-items: start;
}

.temp-info {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}

.date-today {
    font-size: 14px;
    color: var(--muted);
    margin-bottom: 6px;
}

.temp-today {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 6px 0 10px;
}

.icon-current {
    width: 64px;
    height: 64px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.06);
	border: 1px solid rgba(255, 255, 255, 0.12);
    display: grid;
    place-items: center;
    overflow: hidden;
}

.weather-icon-main {
    width: 56px;
    height: 56px;
    object-fit: contain;
}

.temp-current {
    font-size: 40px;
    font-weight: 800;
}

.minmax-today {
    display: flex;
    gap: 12px;
    color: var(--muted);
    font-size: 14px;
}

.feelslike-head,
.wind-head {
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}

.temp-feelslike {
    font-size: 26px;
    font-weight: 750;
    margin-bottom: 8px;
}

.description {
    color: var(--muted);
    line-height: 1.4;
}

.wind-speed,
.wind-gusts {
    color: var(--text);
    margin-top: 6px;
    font-size: 14px;
}

.wind-direction-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    gap: 5px;
}

#wind-arrow {
    font-size: 34px;
    color: var(--accent);
}

#wind-dir-text {
	margin-top: -10px;
	font-size: 16px;
	font-weight: 600;
	color: var(--muted);
}

.extra-info {
    margin-top: 12px;
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
    gap: 12px;
}

.extra-info > div {
    padding: 12px 14px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--muted);
}

.next-days {
    margin-top: 28px;
    padding-top: 12px;
    display: grid;
    grid-template-columns: repeat(6, minmax(120px, 1fr));
    gap: 12px;
    overflow-x: auto;
    padding-bottom: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    justify-items: center;
}

.day-card {
    min-width: 120px;
    padding: 12px;
    border-radius: 14px;
    border: 1px solid var(--border);
    background: var(--surface);
}

.day-date {
    color: var(--muted);
    font-size: 13px;
    margin-bottom: 8px;
}

.day-temp {
    font-weight: 750;
    font-size: 14px;
    margin-bottom: 8px;
}

.day-icon {
    height: 50px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    overflow: hidden;
    margin-bottom: 8px;
}

.weather-icon-small {
    width: 42px;
    height: 42px;
    object-fit: contain;
}

.day-description {
    color: var(--muted);
    font-size: 13px;
    line-height: 1.35;
}

.current, 
.extra-info > div,
.day-card {
    backdrop-filter: blur(8px);
    background: rgba(255, 255, 255, 0.03);
}

.sun-icon {
	width: 18px;
	height: 18px;
	vertical-align: -3px;
	margin-right: 6px;
	opacity: 0.9;
}








`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --bg: #0b1220;\n\t--surface: rgba(255, 255, 255, 0.06);\n\t--surface-2: rgba(255, 255, 255, 0.09);\n\t--text: rgba(255, 255, 255, 0.92);\n\t--muted: rgba(255, 255, 255, 0.68);\n\t--border: rgba(255, 255, 255, 0.12);\n\t--accent: #5ad1ff;\n\t--shadow: 0 12px 30px rgba(0, 0, 0, 0.35);\n\t--radius: 14px;\n}\n\nbody {\n    min-height: 100vh;\n    font-family: system-ui, -apple-system, sans-serif;\n    color: var(--text);\n    background-color: #070b14;\n    background-image: \n\t\tradial-gradient(circle at 15% 10%, rgba(90, 209, 255, 0.2), transparent 40%),\n\t\tradial-gradient(\n\t\t\tcircle at 85% 25%,\n\t\t\trgba(125, 92, 255, 0.15),\n\t\t\ttransparent 40%\n\t\t);\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n}\n\nheader {\n    padding: 0;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n    backdrop-filter: blur(10px);\n    background: rgba(11, 18, 32, 0.6);\n    border-bottom: 1px solid var(--border);\n}\n\nheader > * {\n    max-width: 980px;\n    margin: 0 auto;\n    padding: 16px 16px 12px;\n}\n\nheader .search-bar {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 10px;\n    align-items: center;\n    position: relative;\n}\n\n.app-icone {\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 12px;\n\tbackground: linear-gradient(\n\t\t135deg,\n\t\trgba(90, 209, 255, 0.9),\n\t\trgba(125, 92, 255, 0.75)\n\t);\n\tbox-shadow: var(--shadow);\n\tdisplay: none;\n}\n\n#my-city {\n    width: 100%;\n    padding: 12px 12px;\n    border-radius: 12px;\n    border: 1px solid var(--border);\n    background: rgba(255, 255, 255, 0.04);\n    color: var(--text);\n    outline: none;\n    font-size: 14px;\n}\n\n#my-city::placeholder {\n    color: rgba(255, 255, 255, 0.5);\n}\n\n#my-city:focus {\n    border-color: rgba(90, 209, 255, 0.55);\n    box-shadow: 0 0 0 4px rgba(90, 209, 255, 0.12);\n}\n\n.search-row {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n}\n\n.geo-btn {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n\n    padding: 10px 14px;\n    height: 42px;\n\n    border-radius: 12px;\n    border: 1px solid var(--border);\n    background: rgba(255, 255, 255, 0.04);\n\n    color: var(--muted);\n    font-size: 13px;\n    font-weight: 500;\n\n    cursor: pointer;\n    white-space: nowrap;\n}\n\n.geo-btn:hover {\n    background: rgba(255, 255, 255, 0.08);\n    color: var(--text);\n    border-color: rgba(90, 209, 255, 0.35);\n}\n\n.geo-btn:active {\n    transform: translateY(1px);\n}\n\n.geo-btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n}\n\n.geo-text {\n    font-size: 13px;\n    color: var(--muted);\n}\n\n.geo-icon {\n    font-size: 16px;\n    opacity: 0.85;\n}\n\n#suggestions {\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\ttop: calc(100% + 8px);\n\tmargin: 0;\n\tpadding: 6px;\n\tlist-style: none;\n\tborder: 1px solid var(--border);\n\tborder-radius: 12px;\n\tbackground: rgba(8, 12, 22, 0.95);\n\tbox-shadow: var(--shadow);\n\tmax-height: 280px;\n\toverflow: auto;\n}\n\n.content {\n    max-width: 980px;\n    margin: 20px auto;\n    padding: 0 16px 80px;\n}\n\n.city-name {\n    font-size: 18px;\n    font-weight: 700;\n    color: var(--text);\n    margin: 10px 0 14px;\n}\n\n.current {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 12px;\n    padding: 16px;\n    border-radius: var(--radius);\n    border: 1px solid var(--border);\n    background: var(--surface);\n    box-shadow: var(--shadow);\n}\n\n.box-1, \n.box-2,\n.box-3 {\n    flex: 1 1 250px;\n    padding: 14px;\n    border-radius: 12px;\n    background: var(--surface-2);\n    border: 1px solid rgba(255, 255, 255, 0.08);\n}\n\n.box-1 {\n    display: flex;\n    gap: 24px;\n    align-items: start;\n}\n\n.temp-info {\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n}\n\n.date-today {\n    font-size: 14px;\n    color: var(--muted);\n    margin-bottom: 6px;\n}\n\n.temp-today {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin: 6px 0 10px;\n}\n\n.icon-current {\n    width: 64px;\n    height: 64px;\n    border-radius: 12px;\n    background: rgba(255, 255, 255, 0.06);\n\tborder: 1px solid rgba(255, 255, 255, 0.12);\n    display: grid;\n    place-items: center;\n    overflow: hidden;\n}\n\n.weather-icon-main {\n    width: 56px;\n    height: 56px;\n    object-fit: contain;\n}\n\n.temp-current {\n    font-size: 40px;\n    font-weight: 800;\n}\n\n.minmax-today {\n    display: flex;\n    gap: 12px;\n    color: var(--muted);\n    font-size: 14px;\n}\n\n.feelslike-head,\n.wind-head {\n    font-size: 13px;\n    color: var(--muted);\n    margin-bottom: 6px;\n    text-transform: uppercase;\n    letter-spacing: 0.08em;\n}\n\n.temp-feelslike {\n    font-size: 26px;\n    font-weight: 750;\n    margin-bottom: 8px;\n}\n\n.description {\n    color: var(--muted);\n    line-height: 1.4;\n}\n\n.wind-speed,\n.wind-gusts {\n    color: var(--text);\n    margin-top: 6px;\n    font-size: 14px;\n}\n\n.wind-direction-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 10px;\n    gap: 5px;\n}\n\n#wind-arrow {\n    font-size: 34px;\n    color: var(--accent);\n}\n\n#wind-dir-text {\n\tmargin-top: -10px;\n\tfont-size: 16px;\n\tfont-weight: 600;\n\tcolor: var(--muted);\n}\n\n.extra-info {\n    margin-top: 12px;\n    display: grid;\n    grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));\n    gap: 12px;\n}\n\n.extra-info > div {\n    padding: 12px 14px;\n    border-radius: 12px;\n    border: 1px solid var(--border);\n    background: var(--surface);\n    color: var(--muted);\n}\n\n.next-days {\n    margin-top: 28px;\n    padding-top: 12px;\n    display: grid;\n    grid-template-columns: repeat(6, minmax(120px, 1fr));\n    gap: 12px;\n    overflow-x: auto;\n    padding-bottom: 20px;\n    border-top: 1px solid rgba(255, 255, 255, 0.08);\n    justify-items: center;\n}\n\n.day-card {\n    min-width: 120px;\n    padding: 12px;\n    border-radius: 14px;\n    border: 1px solid var(--border);\n    background: var(--surface);\n}\n\n.day-date {\n    color: var(--muted);\n    font-size: 13px;\n    margin-bottom: 8px;\n}\n\n.day-temp {\n    font-weight: 750;\n    font-size: 14px;\n    margin-bottom: 8px;\n}\n\n.day-icon {\n    height: 50px;\n    display: grid;\n    place-items: center;\n    border-radius: 12px;\n    background: rgba(255, 255, 255, 0.06);\n    border: 1px solid rgba(255, 255, 255, 0.12);\n    overflow: hidden;\n    margin-bottom: 8px;\n}\n\n.weather-icon-small {\n    width: 42px;\n    height: 42px;\n    object-fit: contain;\n}\n\n.day-description {\n    color: var(--muted);\n    font-size: 13px;\n    line-height: 1.35;\n}\n\n.current, \n.extra-info > div,\n.day-card {\n    backdrop-filter: blur(8px);\n    background: rgba(255, 255, 255, 0.03);\n}\n\n.sun-icon {\n\twidth: 18px;\n\theight: 18px;\n\tvertical-align: -3px;\n\tmargin-right: 6px;\n\topacity: 0.9;\n}\n\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./src/assets/icons lazy recursive ^\\.\\/.*\\.svg$ referencedExports: default"
/*!******************************************************************************************!*\
  !*** ./src/assets/icons/ lazy ^\.\/.*\.svg$ referencedExports: default namespace object ***!
  \******************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./clear-day.svg": [
		"./src/assets/icons/clear-day.svg",
		[
			"src_assets_icons_clear-day_svg"
		]
	],
	"./clear-night.svg": [
		"./src/assets/icons/clear-night.svg",
		[
			"src_assets_icons_clear-night_svg"
		]
	],
	"./cloudy.svg": [
		"./src/assets/icons/cloudy.svg",
		[
			"src_assets_icons_cloudy_svg"
		]
	],
	"./fog.svg": [
		"./src/assets/icons/fog.svg",
		[
			"src_assets_icons_fog_svg"
		]
	],
	"./github.svg": [
		"./src/assets/icons/github.svg",
		[
			"src_assets_icons_github_svg"
		]
	],
	"./hail.svg": [
		"./src/assets/icons/hail.svg",
		[
			"src_assets_icons_hail_svg"
		]
	],
	"./partly-cloudy-day.svg": [
		"./src/assets/icons/partly-cloudy-day.svg",
		[
			"src_assets_icons_partly-cloudy-day_svg"
		]
	],
	"./partly-cloudy-night.svg": [
		"./src/assets/icons/partly-cloudy-night.svg",
		[
			"src_assets_icons_partly-cloudy-night_svg"
		]
	],
	"./rain.svg": [
		"./src/assets/icons/rain.svg",
		[
			"src_assets_icons_rain_svg"
		]
	],
	"./showers-day.svg": [
		"./src/assets/icons/showers-day.svg",
		[
			"src_assets_icons_showers-day_svg"
		]
	],
	"./showers-night.svg": [
		"./src/assets/icons/showers-night.svg",
		[
			"src_assets_icons_showers-night_svg"
		]
	],
	"./sleet.svg": [
		"./src/assets/icons/sleet.svg",
		[
			"src_assets_icons_sleet_svg"
		]
	],
	"./snow.svg": [
		"./src/assets/icons/snow.svg",
		[
			"src_assets_icons_snow_svg"
		]
	],
	"./sunrise.svg": [
		"./src/assets/icons/sunrise.svg",
		[]
	],
	"./sunset.svg": [
		"./src/assets/icons/sunset.svg",
		[]
	],
	"./thunder-rain.svg": [
		"./src/assets/icons/thunder-rain.svg",
		[
			"src_assets_icons_thunder-rain_svg"
		]
	],
	"./thunder-showers-day.svg": [
		"./src/assets/icons/thunder-showers-day.svg",
		[
			"src_assets_icons_thunder-showers-day_svg"
		]
	],
	"./thunder-showers-night.svg": [
		"./src/assets/icons/thunder-showers-night.svg",
		[
			"src_assets_icons_thunder-showers-night_svg"
		]
	],
	"./wind.svg": [
		"./src/assets/icons/wind.svg",
		[
			"src_assets_icons_wind_svg"
		]
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids[1].map(__webpack_require__.e)).then(() => (__webpack_require__.t(id, 1 | 16)));
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/assets/icons lazy recursive ^\\.\\/.*\\.svg$ referencedExports: default";
module.exports = webpackAsyncContext;

/***/ },

/***/ "./src/modules/ui.js"
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayCurrentWeather: () => (/* binding */ displayCurrentWeather),
/* harmony export */   displayNextDays: () => (/* binding */ displayNextDays)
/* harmony export */ });
/* harmony import */ var _assets_icons_sunrise_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/sunrise.svg */ "./src/assets/icons/sunrise.svg");
/* harmony import */ var _assets_icons_sunset_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/sunset.svg */ "./src/assets/icons/sunset.svg");
/* harmony import */ var _utils_getUvDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getUvDetails */ "./src/utils/getUvDetails.js");
/* harmony import */ var _utils_getWeatherIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getWeatherIcon */ "./src/utils/getWeatherIcon.js");
/* harmony import */ var _utils_getWindDirection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getWindDirection */ "./src/utils/getWindDirection.js");






async function displayCurrentWeather (data) {
    
    if(!data) return;

    const current = data.currentConditions;
    const today = data.days[0];

    //Location Name
    document.querySelector(".city-name").textContent = data.resolvedAddress;

    //Box - 1
    document.querySelector(".date-today").textContent = today.datetime;

    const iconCurrentEl = document.querySelector(".icon-current");
    const iconUrl = await (0,_utils_getWeatherIcon__WEBPACK_IMPORTED_MODULE_3__.getWeatherIcon)(current.icon);
    const iconImg = document.createElement("img");
    iconImg.src = iconUrl;
    iconImg.alt = current.icon;
    iconImg.classList.add("weather-icon-main");
    iconCurrentEl.append(iconImg);


    document.querySelector(".temp-current").textContent = `${current.temp}°C`;
    document.querySelector(".min-today").textContent = `Min: ${today.tempmin} °C`
    document.querySelector('.max-today').textContent = `Max: ${today.tempmax}°C`;

    //Box 2 details 
    document.querySelector('.feelslike-head').textContent = 'Feels Like';
    document.querySelector('.temp-feelslike').textContent = `${Math.round(current.feelslike)}°C`;
    document.querySelector('.description').textContent = today.description || today.conditions || "";

    //Box 3 details
    document.querySelector('.wind-head').textContent = 'Wind';
    document.querySelector('.wind-speed').textContent = `Speed: ${current.windspeed} km/h`;
    
    if (current.windgust) {
        document.querySelector('.wind-gusts').textContent = `Gusts: ${current.windgust} km/h`;
    }

    const windDirDegrees = current.winddir;
    const windArrowEl = document.querySelector("#wind-arrow");
    const windDirTextEl = document.querySelector("#wind-dir-text");

    if (windArrowEl && windDirTextEl) {
        windArrowEl.style.transform = `rotate(${windDirDegrees}deg)`;
        windDirTextEl.textContent = (0,_utils_getWindDirection__WEBPACK_IMPORTED_MODULE_4__.getWindDirection)(windDirDegrees);
    } 

    //Extra Info
    const sunriseEl = document.querySelector(".sunrise");
    sunriseEl.textContent = "";

    const sunriseImg = document.createElement("img");
    sunriseImg.src = _assets_icons_sunrise_svg__WEBPACK_IMPORTED_MODULE_0__;
    sunriseImg.classList.add("sun-icon");
    sunriseImg.alt = "Sunrise";

    const textSpan = document.createElement("span");
    textSpan.textContent = `Sunrise ${current.sunrise.slice(0, 5)}`;

    sunriseEl.append(sunriseImg, textSpan);

    const sunsetEl = document.querySelector(".sunset");
    sunsetEl.textContent = "";

    const sunsetImg = document.createElement("img");
    sunsetImg.src = _assets_icons_sunset_svg__WEBPACK_IMPORTED_MODULE_1__;
    sunsetImg.alt = "Sunset";
    sunsetImg.classList.add("sun-icon");

    const textSpan2 = document.createElement("span");
    textSpan2.textContent = `Sunset ${current.sunset.slice(0, 5)}`;
    sunsetEl.append(sunsetImg, textSpan2);
    
    document.querySelector('.humidity').textContent = `Humidity: ${current.humidity}%`;
    document.querySelector('.pressure').textContent = `Pressure: ${current.pressure} hPa`;

    const uvIndexEl = document.querySelector(".uv-index");

    const uvIndex = today.uvindex ?? 0;
    const uvColor = (0,_utils_getUvDetails__WEBPACK_IMPORTED_MODULE_2__.getUVColor)(uvIndex);
    const uvLevel = (0,_utils_getUvDetails__WEBPACK_IMPORTED_MODULE_2__.getUVLevel)(uvIndex);

    uvIndexEl.textContent = "UV Index: ";

    const valueSpan = document.createElement("span");
    const levelSpan = document.createElement("span");

    valueSpan.textContent = uvIndex;
    valueSpan.style.color = uvColor;
    valueSpan.style.fontSize = "18px";

    levelSpan.textContent = ` ${uvLevel}`;
    levelSpan.style.color = "var(--muted)";
    levelSpan.style.fontSize = "11px";

    uvIndexEl.append(valueSpan, levelSpan);

    document.querySelector('.chance-of-rain').textContent = `Rain chance: ${today.precipprob}%`;
}

//Helper function to get the date in this format (2025-02-21) -> Sat
function getDayName (dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {weekday: "short"});
}

//Function for displaying next 6 days forecast
async function displayNextDays(days) {

    const nextDayContainer = document.querySelector(".next-days");

    nextDayContainer.textContent = "";

    const forecastDays = days.slice(1, 7);

    for (const day of forecastDays) {

        //Main container
        const dayCard = document.createElement("div");
        dayCard.classList.add("day-card")

        //Day name
        const dayNameDiv = document.createElement("div");
        dayNameDiv.classList.add("day-date");
        dayNameDiv.textContent = getDayName(day.datetime);

        //Min and max temp 
        const dayTempDiv = document.createElement("div");
        dayTempDiv.classList.add("day-temp");
        dayTempDiv.textContent = `${Math.round(day.tempmin)}°C / ${Math.round(day.tempmax)}°C`;

        //Icon div
        const dayIconDiv = document.createElement("div");
        dayIconDiv.classList.add("day-icon");

        //Fetch the icon from assets
        const dayIconUrl = await (0,_utils_getWeatherIcon__WEBPACK_IMPORTED_MODULE_3__.getWeatherIcon)(day.icon);

        //Image icon
        const img = document.createElement("img");
        img.classList.add("weather-icon-small");
        img.src = dayIconUrl;
        img.alt = day.conditions;

        dayIconDiv.appendChild(img);

        //Description
        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("day-description");
        descriptionDiv.textContent = day.description || day.conditions || '';

        //Append all elements in main card
        dayCard.appendChild(dayNameDiv);        
        dayCard.appendChild(dayTempDiv);
        dayCard.appendChild(dayIconDiv);
        dayCard.appendChild(descriptionDiv);

        //Append the entire card in containers
        nextDayContainer.appendChild(dayCard);
    };
}

/***/ },

/***/ "./src/modules/weatherApi.js"
/*!***********************************!*\
  !*** ./src/modules/weatherApi.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)
/* harmony export */ });
const API_KEY = "JB5SA2X6NDZ2337KC8CAB4LAU";

async function getWeatherData(city) {

    try {

        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`);

        if(!response.ok) {
            throw new Error("The city couldn't be found!");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        alert(error.message);
        return null;
    }
}

/***/ },

/***/ "./src/utils/getUvDetails.js"
/*!***********************************!*\
  !*** ./src/utils/getUvDetails.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUVColor: () => (/* binding */ getUVColor),
/* harmony export */   getUVLevel: () => (/* binding */ getUVLevel)
/* harmony export */ });
//We define here 2 func for pulling the UV index color and UV index text

function getUVColor (uv) {
    if (uv <= 2) return '#4ade80'; // green (low)
	if (uv <= 5) return '#facc15'; // yellow (moderate)
	if (uv <= 7) return '#fb923c'; // orange (high)
	if (uv <= 10) return '#f87171'; // red (very high)
	return '#c084fc';   //Purple (extreme)
}

function getUVLevel(uv) {
	if (uv <= 2) return 'Low';
	if (uv <= 5) return 'Moderate';
	if (uv <= 7) return 'High';
	if (uv <= 10) return 'Very High';
	return 'Extreme';
}





/***/ },

/***/ "./src/utils/getWeatherIcon.js"
/*!*************************************!*\
  !*** ./src/utils/getWeatherIcon.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeatherIcon: () => (/* binding */ getWeatherIcon)
/* harmony export */ });
async function getWeatherIcon(iconCode) {
    //fallback
    const safeIconCode = iconCode || "cloudy";

    try {
        //dynamic import
        const iconModule = await __webpack_require__("./src/assets/icons lazy recursive ^\\.\\/.*\\.svg$ referencedExports: default")(`./${safeIconCode}.svg`);
        return iconModule.default;
    } catch (error) {
        const fallBackModule = await __webpack_require__.e(/*! import() */ "src_assets_icons_cloudy_svg").then(__webpack_require__.t.bind(__webpack_require__, /*! ../assets/icons/cloudy.svg */ "./src/assets/icons/cloudy.svg", 17));
        return fallBackModule.default;
    }
}

/***/ },

/***/ "./src/utils/getWindDirection.js"
/*!***************************************!*\
  !*** ./src/utils/getWindDirection.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWindDirection: () => (/* binding */ getWindDirection)
/* harmony export */ });
/**
 * Converts wind direction from degrees (0-360) to a text compass point (N, NE, E, etc.).
 * It divides the circle into 8 slices of 45°. The modulo (% 8) wraps 360° back to 0° (North).
 */

function getWindDirection (degrees) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
}



/***/ },

/***/ "./src/assets/icons/sunrise.svg"
/*!**************************************!*\
  !*** ./src/assets/icons/sunrise.svg ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d1e7798131af43762f50.svg";

/***/ },

/***/ "./src/assets/icons/sunset.svg"
/*!*************************************!*\
  !*** ./src/assets/icons/sunset.svg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "5d3da8c375266cc41c01.svg";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "weather-app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_weatherApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weatherApi.js */ "./src/modules/weatherApi.js");
/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ui.js */ "./src/modules/ui.js");





const searchInput = document.querySelector("#my-city");

searchInput.addEventListener("keypress", async (event) => {

    //Check to see if the key pressed is enter to display the info 

    if(event.key === "Enter") {
        const city = searchInput.value;

        if(city) {
            const weatherData = await (0,_modules_weatherApi_js__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(city);

            (0,_modules_ui_js__WEBPACK_IMPORTED_MODULE_2__.displayCurrentWeather)(weatherData);
            await (0,_modules_ui_js__WEBPACK_IMPORTED_MODULE_2__.displayNextDays)(weatherData.days);
        }

        searchInput.value = "";
    }
});

//When page is loaded for the first time, we load a default city
window.addEventListener("load", async () => {
    const initialData = await (0,_modules_weatherApi_js__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)("London");
    (0,_modules_ui_js__WEBPACK_IMPORTED_MODULE_2__.displayCurrentWeather)(initialData);
    await (0,_modules_ui_js__WEBPACK_IMPORTED_MODULE_2__.displayNextDays)(initialData.days);
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFNBQVMsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksYUFBYSxjQUFjLGFBQWEsV0FBVyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFP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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMLGVBQWU7V0FDZjtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1dDckZBLG1DOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRW9DO0FBQ2dCOztBQUV6RTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLHNFQUFjOztBQUVwRCxZQUFZLHFFQUFxQjtBQUNqQyxrQkFBa0IsK0RBQWU7QUFDakM7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDhCQUE4QixzRUFBYztBQUM1QyxJQUFJLHFFQUFxQjtBQUN6QixVQUFVLCtEQUFlO0FBQ3pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaWNvbnMvIGxhenkgXlxcLlxcLy4qXFwuc3ZnJCByZWZlcmVuY2VkRXhwb3J0czogZGVmYXVsdCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyQXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3V0aWxzL2dldFV2RGV0YWlscy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy9nZXRXZWF0aGVySWNvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy9nZXRXaW5kRGlyZWN0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jcmVhdGUgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gICAgLS1iZzogIzBiMTIyMDtcblx0LS1zdXJmYWNlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xuXHQtLXN1cmZhY2UtMjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA5KTtcblx0LS10ZXh0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpO1xuXHQtLW11dGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjgpO1xuXHQtLWJvcmRlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcblx0LS1hY2NlbnQ6ICM1YWQxZmY7XG5cdC0tc2hhZG93OiAwIDEycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuXHQtLXJhZGl1czogMTRweDtcbn1cblxuYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MGIxNDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBcblx0XHRyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE1JSAxMCUsIHJnYmEoOTAsIDIwOSwgMjU1LCAwLjIpLCB0cmFuc3BhcmVudCA0MCUpLFxuXHRcdHJhZGlhbC1ncmFkaWVudChcblx0XHRcdGNpcmNsZSBhdCA4NSUgMjUlLFxuXHRcdFx0cmdiYSgxMjUsIDkyLCAyNTUsIDAuMTUpLFxuXHRcdFx0dHJhbnNwYXJlbnQgNDAlXG5cdFx0KTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbmhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMSwgMTgsIDMyLCAwLjYpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG5oZWFkZXIgPiAqIHtcbiAgICBtYXgtd2lkdGg6IDk4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDE2cHggMTZweCAxMnB4O1xufVxuXG5oZWFkZXIgLnNlYXJjaC1iYXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hcHAtaWNvbmUge1xuXHR3aWR0aDogNDBweDtcblx0aGVpZ2h0OiA0MHB4O1xuXHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0MTM1ZGVnLFxuXHRcdHJnYmEoOTAsIDIwOSwgMjU1LCAwLjkpLFxuXHRcdHJnYmEoMTI1LCA5MiwgMjU1LCAwLjc1KVxuXHQpO1xuXHRib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4jbXktY2l0eSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI215LWNpdHk6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4jbXktY2l0eTpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDkwLCAyMDksIDI1NSwgMC41NSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoOTAsIDIwOSwgMjU1LCAwLjEyKTtcbn1cblxuLnNlYXJjaC1yb3cge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDEwcHg7XG59XG5cbi5nZW8tYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG5cbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XG5cbiAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5nZW8tYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoOTAsIDIwOSwgMjU1LCAwLjM1KTtcbn1cblxuLmdlby1idG46YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbn1cblxuLmdlby1idG46ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZ2VvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4uZ2VvLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBvcGFjaXR5OiAwLjg1O1xufVxuXG4jc3VnZ2VzdGlvbnMge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6IGNhbGMoMTAwJSArIDhweCk7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogNnB4O1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuXHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDgsIDEyLCAyMiwgMC45NSk7XG5cdGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG5cdG1heC1oZWlnaHQ6IDI4MHB4O1xuXHRvdmVyZmxvdzogYXV0bztcbn1cblxuLmNvbnRlbnQge1xuICAgIG1heC13aWR0aDogOTgwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMCAxNnB4IDgwcHg7XG59XG5cbi5jaXR5LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBtYXJnaW46IDEwcHggMCAxNHB4O1xufVxuXG4uY3VycmVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG59XG5cbi5ib3gtMSwgXG4uYm94LTIsXG4uYm94LTMge1xuICAgIGZsZXg6IDEgMSAyNTBweDtcbiAgICBwYWRkaW5nOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS0yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xufVxuXG4uYm94LTEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLnRlbXAtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZGF0ZS10b2RheSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4udGVtcC10b2RheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW46IDZweCAwIDEwcHg7XG59XG5cbi5pY29uLWN1cnJlbnQge1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53ZWF0aGVyLWljb24tbWFpbiB7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi50ZW1wLWN1cnJlbnQge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4ubWlubWF4LXRvZGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTJweDtcbiAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZlZWxzbGlrZS1oZWFkLFxuLndpbmQtaGVhZCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbn1cblxuLnRlbXAtZmVlbHNsaWtlIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDc1MDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4ud2luZC1zcGVlZCxcbi53aW5kLWd1c3RzIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLndpbmQtZGlyZWN0aW9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBnYXA6IDVweDtcbn1cblxuI3dpbmQtYXJyb3cge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuI3dpbmQtZGlyLXRleHQge1xuXHRtYXJnaW4tdG9wOiAtMTBweDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4uZXh0cmEtaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gICAgZ2FwOiAxMnB4O1xufVxuXG4uZXh0cmEtaW5mbyA+IGRpdiB7XG4gICAgcGFkZGluZzogMTJweCAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4ubmV4dC1kYXlzIHtcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgbWlubWF4KDEyMHB4LCAxZnIpKTtcbiAgICBnYXA6IDEycHg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kYXktY2FyZCB7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbn1cblxuLmRheS1kYXRlIHtcbiAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5kYXktdGVtcCB7XG4gICAgZm9udC13ZWlnaHQ6IDc1MDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZGF5LWljb24ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi53ZWF0aGVyLWljb24tc21hbGwge1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uZGF5LWRlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMS4zNTtcbn1cblxuLmN1cnJlbnQsIFxuLmV4dHJhLWluZm8gPiBkaXYsXG4uZGF5LWNhcmQge1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyk7XG59XG5cbi5zdW4taWNvbiB7XG5cdHdpZHRoOiAxOHB4O1xuXHRoZWlnaHQ6IDE4cHg7XG5cdHZlcnRpY2FsLWFsaWduOiAtM3B4O1xuXHRtYXJnaW4tcmlnaHQ6IDZweDtcblx0b3BhY2l0eTogMC45O1xufVxuXG5cblxuXG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtDQUNoQixvQ0FBb0M7Q0FDcEMsc0NBQXNDO0NBQ3RDLGlDQUFpQztDQUNqQyxrQ0FBa0M7Q0FDbEMsbUNBQW1DO0NBQ25DLGlCQUFpQjtDQUNqQix5Q0FBeUM7Q0FDekMsY0FBYztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlEQUFpRDtJQUNqRCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCOzs7Ozs7R0FNRDtJQUNDLDRCQUE0QjtJQUM1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGlDQUFpQztJQUNqQyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsU0FBUztJQUNULG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQjs7OztFQUlDO0NBQ0QseUJBQXlCO0NBQ3pCLGFBQWE7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGFBQWE7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QjtJQUNuQiwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG9EQUFvRDtJQUNwRCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQiwrQ0FBK0M7SUFDL0MscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLDJDQUEyQztJQUMzQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0ksMEJBQTBCO0lBQzFCLHFDQUFxQztBQUN6Qzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixZQUFZO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJnOiAjMGIxMjIwO1xcblxcdC0tc3VyZmFjZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcXG5cXHQtLXN1cmZhY2UtMjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA5KTtcXG5cXHQtLXRleHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Mik7XFxuXFx0LS1tdXRlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY4KTtcXG5cXHQtLWJvcmRlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcXG5cXHQtLWFjY2VudDogIzVhZDFmZjtcXG5cXHQtLXNoYWRvdzogMCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG5cXHQtLXJhZGl1czogMTRweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzBiMTQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IFxcblxcdFxcdHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTUlIDEwJSwgcmdiYSg5MCwgMjA5LCAyNTUsIDAuMiksIHRyYW5zcGFyZW50IDQwJSksXFxuXFx0XFx0cmFkaWFsLWdyYWRpZW50KFxcblxcdFxcdFxcdGNpcmNsZSBhdCA4NSUgMjUlLFxcblxcdFxcdFxcdHJnYmEoMTI1LCA5MiwgMjU1LCAwLjE1KSxcXG5cXHRcXHRcXHR0cmFuc3BhcmVudCA0MCVcXG5cXHRcXHQpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTEsIDE4LCAzMiwgMC42KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxufVxcblxcbmhlYWRlciA+ICoge1xcbiAgICBtYXgtd2lkdGg6IDk4MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMTZweCAxNnB4IDEycHg7XFxufVxcblxcbmhlYWRlciAuc2VhcmNoLWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYXBwLWljb25lIHtcXG5cXHR3aWR0aDogNDBweDtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTJweDtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0MTM1ZGVnLFxcblxcdFxcdHJnYmEoOTAsIDIwOSwgMjU1LCAwLjkpLFxcblxcdFxcdHJnYmEoMTI1LCA5MiwgMjU1LCAwLjc1KVxcblxcdCk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbXktY2l0eSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMnB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4jbXktY2l0eTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4jbXktY2l0eTpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg5MCwgMjA5LCAyNTUsIDAuNTUpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSg5MCwgMjA5LCAyNTUsIDAuMTIpO1xcbn1cXG5cXG4uc2VhcmNoLXJvdyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLmdlby1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDZweDtcXG5cXG4gICAgcGFkZGluZzogMTBweCAxNHB4O1xcbiAgICBoZWlnaHQ6IDQycHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZ2VvLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDkwLCAyMDksIDI1NSwgMC4zNSk7XFxufVxcblxcbi5nZW8tYnRuOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xcbn1cXG5cXG4uZ2VvLWJ0bjpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmdlby10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4uZ2VvLWljb24ge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbiNzdWdnZXN0aW9ucyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0dG9wOiBjYWxjKDEwMCUgKyA4cHgpO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiA2cHg7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEycHg7XFxuXFx0YmFja2dyb3VuZDogcmdiYSg4LCAxMiwgMjIsIDAuOTUpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuXFx0bWF4LWhlaWdodDogMjgwcHg7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgbWF4LXdpZHRoOiA5ODBweDtcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICAgIHBhZGRpbmc6IDAgMTZweCA4MHB4O1xcbn1cXG5cXG4uY2l0eS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIG1hcmdpbjogMTBweCAwIDE0cHg7XFxufVxcblxcbi5jdXJyZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cXG4uYm94LTEsIFxcbi5ib3gtMixcXG4uYm94LTMge1xcbiAgICBmbGV4OiAxIDEgMjUwcHg7XFxuICAgIHBhZGRpbmc6IDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtMik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XFxufVxcblxcbi5ib3gtMSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4udGVtcC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5kYXRlLXRvZGF5IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbi50ZW1wLXRvZGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW46IDZweCAwIDEwcHg7XFxufVxcblxcbi5pY29uLWN1cnJlbnQge1xcbiAgICB3aWR0aDogNjRweDtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi53ZWF0aGVyLWljb24tbWFpbiB7XFxuICAgIHdpZHRoOiA1NnB4O1xcbiAgICBoZWlnaHQ6IDU2cHg7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi50ZW1wLWN1cnJlbnQge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5taW5tYXgtdG9kYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEycHg7XFxuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmZlZWxzbGlrZS1oZWFkLFxcbi53aW5kLWhlYWQge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcXG59XFxuXFxuLnRlbXAtZmVlbHNsaWtlIHtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBmb250LXdlaWdodDogNzUwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxufVxcblxcbi53aW5kLXNwZWVkLFxcbi53aW5kLWd1c3RzIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLndpbmQtZGlyZWN0aW9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4jd2luZC1hcnJvdyB7XFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbiN3aW5kLWRpci10ZXh0IHtcXG5cXHRtYXJnaW4tdG9wOiAtMTBweDtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4uZXh0cmEtaW5mbyB7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLmV4dHJhLWluZm8gPiBkaXYge1xcbiAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xcbiAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4ubmV4dC1kYXlzIHtcXG4gICAgbWFyZ2luLXRvcDogMjhweDtcXG4gICAgcGFkZGluZy10b3A6IDEycHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIG1pbm1heCgxMjBweCwgMWZyKSk7XFxuICAgIGdhcDogMTJweDtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXktY2FyZCB7XFxuICAgIG1pbi13aWR0aDogMTIwcHg7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xcbn1cXG5cXG4uZGF5LWRhdGUge1xcbiAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmRheS10ZW1wIHtcXG4gICAgZm9udC13ZWlnaHQ6IDc1MDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5kYXktaWNvbiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ud2VhdGhlci1pY29uLXNtYWxsIHtcXG4gICAgd2lkdGg6IDQycHg7XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLmRheS1kZXNjcmlwdGlvbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XFxufVxcblxcbi5jdXJyZW50LCBcXG4uZXh0cmEtaW5mbyA+IGRpdixcXG4uZGF5LWNhcmQge1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKTtcXG59XFxuXFxuLnN1bi1pY29uIHtcXG5cXHR3aWR0aDogMThweDtcXG5cXHRoZWlnaHQ6IDE4cHg7XFxuXFx0dmVydGljYWwtYWxpZ246IC0zcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiA2cHg7XFxuXFx0b3BhY2l0eTogMC45O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9jbGVhci1kYXkuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIsXG5cdFx0W1xuXHRcdFx0XCJzcmNfYXNzZXRzX2ljb25zX2NsZWFyLWRheV9zdmdcIlxuXHRcdF1cblx0XSxcblx0XCIuL2NsZWFyLW5pZ2h0LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvaWNvbnMvY2xlYXItbmlnaHQuc3ZnXCIsXG5cdFx0W1xuXHRcdFx0XCJzcmNfYXNzZXRzX2ljb25zX2NsZWFyLW5pZ2h0X3N2Z1wiXG5cdFx0XVxuXHRdLFxuXHRcIi4vY2xvdWR5LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvaWNvbnMvY2xvdWR5LnN2Z1wiLFxuXHRcdFtcblx0XHRcdFwic3JjX2Fzc2V0c19pY29uc19jbG91ZHlfc3ZnXCJcblx0XHRdXG5cdF0sXG5cdFwiLi9mb2cuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pY29ucy9mb2cuc3ZnXCIsXG5cdFx0W1xuXHRcdFx0XCJzcmNfYXNzZXRzX2ljb25zX2ZvZ19zdmdcIlxuXHRcdF1cblx0XSxcblx0XCIuL2dpdGh1Yi5zdmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ljb25zL2dpdGh1Yi5zdmdcIixcblx0XHRbXG5cdFx0XHRcInNyY19hc3NldHNfaWNvbnNfZ2l0aHViX3N2Z1wiXG5cdFx0XVxuXHRdLFxuXHRcIi4vaGFpbC5zdmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ljb25zL2hhaWwuc3ZnXCIsXG5cdFx0W1xuXHRcdFx0XCJzcmNfYXNzZXRzX2ljb25zX2hhaWxfc3ZnXCJcblx0XHRdXG5cdF0sXG5cdFwiLi9wYXJ0bHktY2xvdWR5LWRheS5zdmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ljb25zL3BhcnRseS1jbG91ZHktZGF5LnN2Z1wiLFxuXHRcdFtcblx0XHRcdFwic3JjX2Fzc2V0c19pY29uc19wYXJ0bHktY2xvdWR5LWRheV9zdmdcIlxuXHRcdF1cblx0XSxcblx0XCIuL3BhcnRseS1jbG91ZHktbmlnaHQuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pY29ucy9wYXJ0bHktY2xvdWR5LW5pZ2h0LnN2Z1wiLFxuXHRcdFtcblx0XHRcdFwic3JjX2Fzc2V0c19pY29uc19wYXJ0bHktY2xvdWR5LW5pZ2h0X3N2Z1wiXG5cdFx0XVxuXHRdLFxuXHRcIi4vcmFpbi5zdmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ljb25zL3JhaW4uc3ZnXCIsXG5cdFx0W1xuXHRcdFx0XCJzcmNfYXNzZXRzX2ljb25zX3JhaW5fc3ZnXCJcblx0XHRdXG5cdF0sXG5cdFwiLi9zaG93ZXJzLWRheS5zdmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ljb25zL3Nob3dlcnMtZGF5LnN2Z1wiLFxuXHRcdFtcblx0XHRcdFwic3JjX2Fzc2V0c19pY29uc19zaG93ZXJzLWRheV9zdmdcIlxuXHRcdF1cblx0XSxcblx0XCIuL3Nob3dlcnMtbmlnaHQuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pY29ucy9zaG93ZXJzLW5pZ2h0LnN2Z1wiLFxuXHRcdFtcblx0XHRcdFwic3JjX2Fzc2V0c19pY29uc19zaG93ZXJzLW5pZ2h0X3N2Z1wiXG5cdFx0XVxuXHRdLFxuXHRcIi4vc2xlZXQuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pY29ucy9zbGVldC5zdmdcIixcblx0XHRbXG5cdFx0XHRcInNyY19hc3NldHNfaWNvbnNfc2xlZXRfc3ZnXCJcblx0XHRdXG5cdF0sXG5cdFwiLi9zbm93LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvaWNvbnMvc25vdy5zdmdcIixcblx0XHRbXG5cdFx0XHRcInNyY19hc3NldHNfaWNvbnNfc25vd19zdmdcIlxuXHRcdF1cblx0XSxcblx0XCIuL3N1bnJpc2Uuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pY29ucy9zdW5yaXNlLnN2Z1wiLFxuXHRcdFtdXG5cdF0sXG5cdFwiLi9zdW5zZXQuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pY29ucy9zdW5zZXQuc3ZnXCIsXG5cdFx0W11cblx0XSxcblx0XCIuL3RodW5kZXItcmFpbi5zdmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ljb25zL3RodW5kZXItcmFpbi5zdmdcIixcblx0XHRbXG5cdFx0XHRcInNyY19hc3NldHNfaWNvbnNfdGh1bmRlci1yYWluX3N2Z1wiXG5cdFx0XVxuXHRdLFxuXHRcIi4vdGh1bmRlci1zaG93ZXJzLWRheS5zdmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ljb25zL3RodW5kZXItc2hvd2Vycy1kYXkuc3ZnXCIsXG5cdFx0W1xuXHRcdFx0XCJzcmNfYXNzZXRzX2ljb25zX3RodW5kZXItc2hvd2Vycy1kYXlfc3ZnXCJcblx0XHRdXG5cdF0sXG5cdFwiLi90aHVuZGVyLXNob3dlcnMtbmlnaHQuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pY29ucy90aHVuZGVyLXNob3dlcnMtbmlnaHQuc3ZnXCIsXG5cdFx0W1xuXHRcdFx0XCJzcmNfYXNzZXRzX2ljb25zX3RodW5kZXItc2hvd2Vycy1uaWdodF9zdmdcIlxuXHRcdF1cblx0XSxcblx0XCIuL3dpbmQuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pY29ucy93aW5kLnN2Z1wiLFxuXHRcdFtcblx0XHRcdFwic3JjX2Fzc2V0c19pY29uc193aW5kX3N2Z1wiXG5cdFx0XVxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoaWRzWzFdLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLmUpKS50aGVuKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDEgfCAxNikpKTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pY29ucyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5zdmckIHJlZmVyZW5jZWRFeHBvcnRzOiBkZWZhdWx0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiaW1wb3J0IHN1bnJpc2VJY29uIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9zdW5yaXNlLnN2Zyc7XG5pbXBvcnQgc3Vuc2V0SWNvbiBmcm9tICcuLi9hc3NldHMvaWNvbnMvc3Vuc2V0LnN2Zyc7XG5pbXBvcnQgeyBnZXRVVkNvbG9yLCBnZXRVVkxldmVsIH0gZnJvbSAnLi4vdXRpbHMvZ2V0VXZEZXRhaWxzJztcbmltcG9ydCB7IGdldFdlYXRoZXJJY29uIH0gZnJvbSBcIi4uL3V0aWxzL2dldFdlYXRoZXJJY29uXCI7XG5pbXBvcnQgeyBnZXRXaW5kRGlyZWN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvZ2V0V2luZERpcmVjdGlvbic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudFdlYXRoZXIgKGRhdGEpIHtcbiAgICBcbiAgICBpZighZGF0YSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY3VycmVudCA9IGRhdGEuY3VycmVudENvbmRpdGlvbnM7XG4gICAgY29uc3QgdG9kYXkgPSBkYXRhLmRheXNbMF07XG5cbiAgICAvL0xvY2F0aW9uIE5hbWVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktbmFtZVwiKS50ZXh0Q29udGVudCA9IGRhdGEucmVzb2x2ZWRBZGRyZXNzO1xuXG4gICAgLy9Cb3ggLSAxXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLXRvZGF5XCIpLnRleHRDb250ZW50ID0gdG9kYXkuZGF0ZXRpbWU7XG5cbiAgICBjb25zdCBpY29uQ3VycmVudEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uLWN1cnJlbnRcIik7XG4gICAgY29uc3QgaWNvblVybCA9IGF3YWl0IGdldFdlYXRoZXJJY29uKGN1cnJlbnQuaWNvbik7XG4gICAgY29uc3QgaWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaWNvbkltZy5zcmMgPSBpY29uVXJsO1xuICAgIGljb25JbWcuYWx0ID0gY3VycmVudC5pY29uO1xuICAgIGljb25JbWcuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItaWNvbi1tYWluXCIpO1xuICAgIGljb25DdXJyZW50RWwuYXBwZW5kKGljb25JbWcpO1xuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtY3VycmVudFwiKS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnQudGVtcH3CsENgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWluLXRvZGF5XCIpLnRleHRDb250ZW50ID0gYE1pbjogJHt0b2RheS50ZW1wbWlufSDCsENgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heC10b2RheScpLnRleHRDb250ZW50ID0gYE1heDogJHt0b2RheS50ZW1wbWF4fcKwQ2A7XG5cbiAgICAvL0JveCAyIGRldGFpbHMgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzbGlrZS1oZWFkJykudGV4dENvbnRlbnQgPSAnRmVlbHMgTGlrZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtZmVlbHNsaWtlJykudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGN1cnJlbnQuZmVlbHNsaWtlKX3CsENgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gdG9kYXkuZGVzY3JpcHRpb24gfHwgdG9kYXkuY29uZGl0aW9ucyB8fCBcIlwiO1xuXG4gICAgLy9Cb3ggMyBkZXRhaWxzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtaGVhZCcpLnRleHRDb250ZW50ID0gJ1dpbmQnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkJykudGV4dENvbnRlbnQgPSBgU3BlZWQ6ICR7Y3VycmVudC53aW5kc3BlZWR9IGttL2hgO1xuICAgIFxuICAgIGlmIChjdXJyZW50LndpbmRndXN0KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLWd1c3RzJykudGV4dENvbnRlbnQgPSBgR3VzdHM6ICR7Y3VycmVudC53aW5kZ3VzdH0ga20vaGA7XG4gICAgfVxuXG4gICAgY29uc3Qgd2luZERpckRlZ3JlZXMgPSBjdXJyZW50LndpbmRkaXI7XG4gICAgY29uc3Qgd2luZEFycm93RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbmQtYXJyb3dcIik7XG4gICAgY29uc3Qgd2luZERpclRleHRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2luZC1kaXItdGV4dFwiKTtcblxuICAgIGlmICh3aW5kQXJyb3dFbCAmJiB3aW5kRGlyVGV4dEVsKSB7XG4gICAgICAgIHdpbmRBcnJvd0VsLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHt3aW5kRGlyRGVncmVlc31kZWcpYDtcbiAgICAgICAgd2luZERpclRleHRFbC50ZXh0Q29udGVudCA9IGdldFdpbmREaXJlY3Rpb24od2luZERpckRlZ3JlZXMpO1xuICAgIH0gXG5cbiAgICAvL0V4dHJhIEluZm9cbiAgICBjb25zdCBzdW5yaXNlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bnJpc2VcIik7XG4gICAgc3VucmlzZUVsLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IHN1bnJpc2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHN1bnJpc2VJbWcuc3JjID0gc3VucmlzZUljb247XG4gICAgc3VucmlzZUltZy5jbGFzc0xpc3QuYWRkKFwic3VuLWljb25cIik7XG4gICAgc3VucmlzZUltZy5hbHQgPSBcIlN1bnJpc2VcIjtcblxuICAgIGNvbnN0IHRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBgU3VucmlzZSAke2N1cnJlbnQuc3VucmlzZS5zbGljZSgwLCA1KX1gO1xuXG4gICAgc3VucmlzZUVsLmFwcGVuZChzdW5yaXNlSW1nLCB0ZXh0U3Bhbik7XG5cbiAgICBjb25zdCBzdW5zZXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Vuc2V0XCIpO1xuICAgIHN1bnNldEVsLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IHN1bnNldEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgc3Vuc2V0SW1nLnNyYyA9IHN1bnNldEljb247XG4gICAgc3Vuc2V0SW1nLmFsdCA9IFwiU3Vuc2V0XCI7XG4gICAgc3Vuc2V0SW1nLmNsYXNzTGlzdC5hZGQoXCJzdW4taWNvblwiKTtcblxuICAgIGNvbnN0IHRleHRTcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRleHRTcGFuMi50ZXh0Q29udGVudCA9IGBTdW5zZXQgJHtjdXJyZW50LnN1bnNldC5zbGljZSgwLCA1KX1gO1xuICAgIHN1bnNldEVsLmFwcGVuZChzdW5zZXRJbWcsIHRleHRTcGFuMik7XG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5JykudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7Y3VycmVudC5odW1pZGl0eX0lYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmUnKS50ZXh0Q29udGVudCA9IGBQcmVzc3VyZTogJHtjdXJyZW50LnByZXNzdXJlfSBoUGFgO1xuXG4gICAgY29uc3QgdXZJbmRleEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51di1pbmRleFwiKTtcblxuICAgIGNvbnN0IHV2SW5kZXggPSB0b2RheS51dmluZGV4ID8/IDA7XG4gICAgY29uc3QgdXZDb2xvciA9IGdldFVWQ29sb3IodXZJbmRleCk7XG4gICAgY29uc3QgdXZMZXZlbCA9IGdldFVWTGV2ZWwodXZJbmRleCk7XG5cbiAgICB1dkluZGV4RWwudGV4dENvbnRlbnQgPSBcIlVWIEluZGV4OiBcIjtcblxuICAgIGNvbnN0IHZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IGxldmVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgdmFsdWVTcGFuLnRleHRDb250ZW50ID0gdXZJbmRleDtcbiAgICB2YWx1ZVNwYW4uc3R5bGUuY29sb3IgPSB1dkNvbG9yO1xuICAgIHZhbHVlU3Bhbi5zdHlsZS5mb250U2l6ZSA9IFwiMThweFwiO1xuXG4gICAgbGV2ZWxTcGFuLnRleHRDb250ZW50ID0gYCAke3V2TGV2ZWx9YDtcbiAgICBsZXZlbFNwYW4uc3R5bGUuY29sb3IgPSBcInZhcigtLW11dGVkKVwiO1xuICAgIGxldmVsU3Bhbi5zdHlsZS5mb250U2l6ZSA9IFwiMTFweFwiO1xuXG4gICAgdXZJbmRleEVsLmFwcGVuZCh2YWx1ZVNwYW4sIGxldmVsU3Bhbik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmNlLW9mLXJhaW4nKS50ZXh0Q29udGVudCA9IGBSYWluIGNoYW5jZTogJHt0b2RheS5wcmVjaXBwcm9ifSVgO1xufVxuXG4vL0hlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIGRhdGUgaW4gdGhpcyBmb3JtYXQgKDIwMjUtMDItMjEpIC0+IFNhdFxuZnVuY3Rpb24gZ2V0RGF5TmFtZSAoZGF0ZVN0cmluZykge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7d2Vla2RheTogXCJzaG9ydFwifSk7XG59XG5cbi8vRnVuY3Rpb24gZm9yIGRpc3BsYXlpbmcgbmV4dCA2IGRheXMgZm9yZWNhc3RcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkaXNwbGF5TmV4dERheXMoZGF5cykge1xuXG4gICAgY29uc3QgbmV4dERheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV4dC1kYXlzXCIpO1xuXG4gICAgbmV4dERheUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBmb3JlY2FzdERheXMgPSBkYXlzLnNsaWNlKDEsIDcpO1xuXG4gICAgZm9yIChjb25zdCBkYXkgb2YgZm9yZWNhc3REYXlzKSB7XG5cbiAgICAgICAgLy9NYWluIGNvbnRhaW5lclxuICAgICAgICBjb25zdCBkYXlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGF5Q2FyZC5jbGFzc0xpc3QuYWRkKFwiZGF5LWNhcmRcIilcblxuICAgICAgICAvL0RheSBuYW1lXG4gICAgICAgIGNvbnN0IGRheU5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkYXlOYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJkYXktZGF0ZVwiKTtcbiAgICAgICAgZGF5TmFtZURpdi50ZXh0Q29udGVudCA9IGdldERheU5hbWUoZGF5LmRhdGV0aW1lKTtcblxuICAgICAgICAvL01pbiBhbmQgbWF4IHRlbXAgXG4gICAgICAgIGNvbnN0IGRheVRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkYXlUZW1wRGl2LmNsYXNzTGlzdC5hZGQoXCJkYXktdGVtcFwiKTtcbiAgICAgICAgZGF5VGVtcERpdi50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF5LnRlbXBtaW4pfcKwQyAvICR7TWF0aC5yb3VuZChkYXkudGVtcG1heCl9wrBDYDtcblxuICAgICAgICAvL0ljb24gZGl2XG4gICAgICAgIGNvbnN0IGRheUljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkYXlJY29uRGl2LmNsYXNzTGlzdC5hZGQoXCJkYXktaWNvblwiKTtcblxuICAgICAgICAvL0ZldGNoIHRoZSBpY29uIGZyb20gYXNzZXRzXG4gICAgICAgIGNvbnN0IGRheUljb25VcmwgPSBhd2FpdCBnZXRXZWF0aGVySWNvbihkYXkuaWNvbik7XG5cbiAgICAgICAgLy9JbWFnZSBpY29uXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1pY29uLXNtYWxsXCIpO1xuICAgICAgICBpbWcuc3JjID0gZGF5SWNvblVybDtcbiAgICAgICAgaW1nLmFsdCA9IGRheS5jb25kaXRpb25zO1xuXG4gICAgICAgIGRheUljb25EaXYuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgICAvL0Rlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcImRheS1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSBkYXkuZGVzY3JpcHRpb24gfHwgZGF5LmNvbmRpdGlvbnMgfHwgJyc7XG5cbiAgICAgICAgLy9BcHBlbmQgYWxsIGVsZW1lbnRzIGluIG1haW4gY2FyZFxuICAgICAgICBkYXlDYXJkLmFwcGVuZENoaWxkKGRheU5hbWVEaXYpOyAgICAgICAgXG4gICAgICAgIGRheUNhcmQuYXBwZW5kQ2hpbGQoZGF5VGVtcERpdik7XG4gICAgICAgIGRheUNhcmQuYXBwZW5kQ2hpbGQoZGF5SWNvbkRpdik7XG4gICAgICAgIGRheUNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG4gICAgICAgIC8vQXBwZW5kIHRoZSBlbnRpcmUgY2FyZCBpbiBjb250YWluZXJzXG4gICAgICAgIG5leHREYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5Q2FyZCk7XG4gICAgfTtcbn0iLCJjb25zdCBBUElfS0VZID0gXCJKQjVTQTJYNk5EWjIzMzdLQzhDQUI0TEFVXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShjaXR5KSB7XG5cbiAgICB0cnkge1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7Y2l0eX0/dW5pdEdyb3VwPW1ldHJpYyZrZXk9JHtBUElfS0VZfSZjb250ZW50VHlwZT1qc29uYCk7XG5cbiAgICAgICAgaWYoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY2l0eSBjb3VsZG4ndCBiZSBmb3VuZCFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59IiwiLy9XZSBkZWZpbmUgaGVyZSAyIGZ1bmMgZm9yIHB1bGxpbmcgdGhlIFVWIGluZGV4IGNvbG9yIGFuZCBVViBpbmRleCB0ZXh0XG5cbmZ1bmN0aW9uIGdldFVWQ29sb3IgKHV2KSB7XG4gICAgaWYgKHV2IDw9IDIpIHJldHVybiAnIzRhZGU4MCc7IC8vIGdyZWVuIChsb3cpXG5cdGlmICh1diA8PSA1KSByZXR1cm4gJyNmYWNjMTUnOyAvLyB5ZWxsb3cgKG1vZGVyYXRlKVxuXHRpZiAodXYgPD0gNykgcmV0dXJuICcjZmI5MjNjJzsgLy8gb3JhbmdlIChoaWdoKVxuXHRpZiAodXYgPD0gMTApIHJldHVybiAnI2Y4NzE3MSc7IC8vIHJlZCAodmVyeSBoaWdoKVxuXHRyZXR1cm4gJyNjMDg0ZmMnOyAgIC8vUHVycGxlIChleHRyZW1lKVxufVxuXG5mdW5jdGlvbiBnZXRVVkxldmVsKHV2KSB7XG5cdGlmICh1diA8PSAyKSByZXR1cm4gJ0xvdyc7XG5cdGlmICh1diA8PSA1KSByZXR1cm4gJ01vZGVyYXRlJztcblx0aWYgKHV2IDw9IDcpIHJldHVybiAnSGlnaCc7XG5cdGlmICh1diA8PSAxMCkgcmV0dXJuICdWZXJ5IEhpZ2gnO1xuXHRyZXR1cm4gJ0V4dHJlbWUnO1xufVxuXG5leHBvcnQge1xuICAgIGdldFVWQ29sb3IsXG4gICAgZ2V0VVZMZXZlbFxufVxuXG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckljb24oaWNvbkNvZGUpIHtcbiAgICAvL2ZhbGxiYWNrXG4gICAgY29uc3Qgc2FmZUljb25Db2RlID0gaWNvbkNvZGUgfHwgXCJjbG91ZHlcIjtcblxuICAgIHRyeSB7XG4gICAgICAgIC8vZHluYW1pYyBpbXBvcnRcbiAgICAgICAgY29uc3QgaWNvbk1vZHVsZSA9IGF3YWl0IGltcG9ydChgLi4vYXNzZXRzL2ljb25zLyR7c2FmZUljb25Db2RlfS5zdmdgKTtcbiAgICAgICAgcmV0dXJuIGljb25Nb2R1bGUuZGVmYXVsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zdCBmYWxsQmFja01vZHVsZSA9IGF3YWl0IGltcG9ydChgLi4vYXNzZXRzL2ljb25zL2Nsb3VkeS5zdmdgKTtcbiAgICAgICAgcmV0dXJuIGZhbGxCYWNrTW9kdWxlLmRlZmF1bHQ7XG4gICAgfVxufSIsIi8qKlxuICogQ29udmVydHMgd2luZCBkaXJlY3Rpb24gZnJvbSBkZWdyZWVzICgwLTM2MCkgdG8gYSB0ZXh0IGNvbXBhc3MgcG9pbnQgKE4sIE5FLCBFLCBldGMuKS5cbiAqIEl0IGRpdmlkZXMgdGhlIGNpcmNsZSBpbnRvIDggc2xpY2VzIG9mIDQ1wrAuIFRoZSBtb2R1bG8gKCUgOCkgd3JhcHMgMzYwwrAgYmFjayB0byAwwrAgKE5vcnRoKS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2luZERpcmVjdGlvbiAoZGVncmVlcykge1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbJ04nLCAnTkUnLCAnRScsICdTRScsICdTJywgJ1NXJywgJ1cnLCAnTlcnXTtcbiAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoZGVncmVlcyAvIDQ1KSAlIDg7XG4gICAgcmV0dXJuIGRpcmVjdGlvbnNbaW5kZXhdO1xufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7ICh0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgY3VycmVudCA9PSAnZnVuY3Rpb24nKSAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLm1haW4uanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwid2VhdGhlci1hcHA6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rd2VhdGhlcl9hcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd2VhdGhlcl9hcHBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7IGdldFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vbW9kdWxlcy93ZWF0aGVyQXBpLmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5Q3VycmVudFdlYXRoZXIsIGRpc3BsYXlOZXh0RGF5cyB9IGZyb20gXCIuL21vZHVsZXMvdWkuanNcIjtcblxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215LWNpdHlcIik7XG5cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBhc3luYyAoZXZlbnQpID0+IHtcblxuICAgIC8vQ2hlY2sgdG8gc2VlIGlmIHRoZSBrZXkgcHJlc3NlZCBpcyBlbnRlciB0byBkaXNwbGF5IHRoZSBpbmZvIFxuXG4gICAgaWYoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgY29uc3QgY2l0eSA9IHNlYXJjaElucHV0LnZhbHVlO1xuXG4gICAgICAgIGlmKGNpdHkpIHtcbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoY2l0eSk7XG5cbiAgICAgICAgICAgIGRpc3BsYXlDdXJyZW50V2VhdGhlcih3ZWF0aGVyRGF0YSk7XG4gICAgICAgICAgICBhd2FpdCBkaXNwbGF5TmV4dERheXMod2VhdGhlckRhdGEuZGF5cyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfVxufSk7XG5cbi8vV2hlbiBwYWdlIGlzIGxvYWRlZCBmb3IgdGhlIGZpcnN0IHRpbWUsIHdlIGxvYWQgYSBkZWZhdWx0IGNpdHlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbERhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShcIkxvbmRvblwiKTtcbiAgICBkaXNwbGF5Q3VycmVudFdlYXRoZXIoaW5pdGlhbERhdGEpO1xuICAgIGF3YWl0IGRpc3BsYXlOZXh0RGF5cyhpbml0aWFsRGF0YS5kYXlzKTtcbn0pO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=