/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-extglob";
exports.ids = ["vendor-chunks/is-extglob"];
exports.modules = {

/***/ "(rsc)/./node_modules/is-extglob/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-extglob/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("/*!\n * is-extglob <https://github.com/jonschlinkert/is-extglob>\n *\n * Copyright (c) 2014-2016, Jon Schlinkert.\n * Licensed under the MIT License.\n */ module.exports = function isExtglob(str) {\n    if (typeof str !== \"string\" || str === \"\") {\n        return false;\n    }\n    var match;\n    while(match = /(\\\\).|([@?!+*]\\(.*\\))/g.exec(str)){\n        if (match[2]) return true;\n        str = str.slice(match.index + match[0].length);\n    }\n    return false;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZHVpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2lzLWV4dGdsb2IvaW5kZXguanM/MGZiZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGlzLWV4dGdsb2IgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLWV4dGdsb2I+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTYsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNFeHRnbG9iKHN0cikge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycgfHwgc3RyID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBtYXRjaDtcbiAgd2hpbGUgKChtYXRjaCA9IC8oXFxcXCkufChbQD8hKypdXFwoLipcXCkpL2cuZXhlYyhzdHIpKSkge1xuICAgIGlmIChtYXRjaFsyXSkgcmV0dXJuIHRydWU7XG4gICAgc3RyID0gc3RyLnNsaWNlKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImlzRXh0Z2xvYiIsInN0ciIsIm1hdGNoIiwiZXhlYyIsInNsaWNlIiwiaW5kZXgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDLEdBRURBLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxVQUFVQyxHQUFHO0lBQ3JDLElBQUksT0FBT0EsUUFBUSxZQUFZQSxRQUFRLElBQUk7UUFDekMsT0FBTztJQUNUO0lBRUEsSUFBSUM7SUFDSixNQUFRQSxRQUFRLHlCQUF5QkMsSUFBSSxDQUFDRixLQUFPO1FBQ25ELElBQUlDLEtBQUssQ0FBQyxFQUFFLEVBQUUsT0FBTztRQUNyQkQsTUFBTUEsSUFBSUcsS0FBSyxDQUFDRixNQUFNRyxLQUFLLEdBQUdILEtBQUssQ0FBQyxFQUFFLENBQUNJLE1BQU07SUFDL0M7SUFFQSxPQUFPO0FBQ1QiLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXMtZXh0Z2xvYi9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-extglob/index.js\n");

/***/ })

};
;