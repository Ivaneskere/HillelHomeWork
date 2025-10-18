"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// // 1) Bootstrap:

// // Вивести на сторінку кнопку (застосувати стилі бутстрапа), 
// // при натисканні на яку, відкривається дефолтне модальне вікно із деякими даними
// // Повісити на цю кнопку Tooltip із довільним текстом
// // Створити поруч ще одну кнопку, при натисканні на яку, відображається бутстрапівський алерт. 
// // При повторному натисканні - він зникає

var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
var tooltipList = _toConsumableArray(tooltipTriggerList).map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
var wrapper = document.createElement('div');
var appendAlert = function appendAlert(message, type) {
  wrapper.innerHTML = ["<div class=\"alert alert-".concat(type, " alert-dismissible\" role=\"alert\">"), "   <div>".concat(message, "</div>"), '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', '</div>'].join('');
  alertPlaceholder.append(wrapper);
};
var isVisible = false;
var alertTrigger = document.getElementById('liveAlertBtn');
alertTrigger.addEventListener('click', function () {
  if (!isVisible) {
    appendAlert('Nice, you triggered this alert message!', 'success');
  } else {
    wrapper.innerHTML = "";
  }
  isVisible = !isVisible;
});