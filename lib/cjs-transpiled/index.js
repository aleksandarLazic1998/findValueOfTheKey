"use strict";

/**
 * Recursively searches a deeply nested object to find a specific key and returns its associated value.
 * @param {object} obj - The nested object to search through.
 * @param {string} targetKey - The key to search for.
 * @returns {*} The value associated with the target key, or a message if not found.
 */
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var findValueOfTheKey = function findValueOfTheKey(nestedObject, targetKey) {
  for (var key in nestedObject) {
    if (nestedObject.hasOwnProperty(key)) {
      if (key === targetKey) return nestedObject[key];
      if (_typeof(nestedObject[key]) === 'object' && nestedObject[key] !== null) {
        var result = findValueOfTheKey(nestedObject[key], targetKey);
        if (result !== undefined) {
          return result;
        }
      }
    }
  }
  return "Value with key \"".concat(targetKey, "\" does not exist");
};
exports.default = findValueOfTheKey;