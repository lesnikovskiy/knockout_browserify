(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ko = (window.ko);

ko.components.register("simple-name", require("./components/simple-name/simple-name.js"));
ko.components.register("discount-widget", require("./components/discount-widget/discount-widget.js"));

ko.applyBindings({ userName: ko.observable() });
},{"./components/discount-widget/discount-widget.js":3,"./components/simple-name/simple-name.js":5}],2:[function(require,module,exports){
module.exports = "﻿<div>\r\n\t<h3>Discount for <span data-bind=\"text: logo\"></span></h3>\r\n\tEnter net price: <input type=\"number\" data-bind=\"textInput: netPrice\"/><br/>\r\n\tEnter discount: <input type=\"number\" data-bind=\"textInput: discountPercent\"/><br/>\r\n\t<button data-bind=\"click: calculate\">Calculate</button>\r\n\t<span data-bind=\"text: result\"></span>\r\n</div>";

},{}],3:[function(require,module,exports){
var ko = (window.ko);
var template = require("./discount-widget.html");

function viewModel(params) {
	this.logo = ko.observable(params.logo);
	this.netPrice = ko.observable();
	this.discountPercent = ko.observable();
	this.result = ko.observable();
	this.calculate = function() {
		var netPrice = parseInt(this.netPrice());
		var discount = parseInt(this.discountPercent());
		var discountDelta = (netPrice / 100) * discount;

		this.result(netPrice - discountDelta);
	}.bind(this);
};

module.exports = {
	viewModel: viewModel,
	template: template
};
},{"./discount-widget.html":2}],4:[function(require,module,exports){
module.exports = "﻿<p data-bind='text: name'></p>\r\n<button data-bind='click: something'>Click me</button>";

},{}],5:[function(require,module,exports){
var ko = (window.ko),
	template = require("./simple-name.html");

function viewModel(data) {
	this.name = data.name;
}

viewModel.prototype.something = function () {
	console.log("You invoked something() on the viewmodel.");
};

module.exports = {
	viewModel: viewModel,
	template: template
};
},{"./simple-name.html":4}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkZXZlbG9wbWVudFxcTGVhcm5pbmdcXFBhcnR5SW52aXRlc1xcS25vY2tvdXRCcm93c2VyaWZ5RGVtb1xcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJEOi9kZXZlbG9wbWVudC9MZWFybmluZy9QYXJ0eUludml0ZXMvS25vY2tvdXRCcm93c2VyaWZ5RGVtby9zcmMvYXBwLmpzIiwiRDovZGV2ZWxvcG1lbnQvTGVhcm5pbmcvUGFydHlJbnZpdGVzL0tub2Nrb3V0QnJvd3NlcmlmeURlbW8vc3JjL2NvbXBvbmVudHMvZGlzY291bnQtd2lkZ2V0L2Rpc2NvdW50LXdpZGdldC5odG1sIiwiRDovZGV2ZWxvcG1lbnQvTGVhcm5pbmcvUGFydHlJbnZpdGVzL0tub2Nrb3V0QnJvd3NlcmlmeURlbW8vc3JjL2NvbXBvbmVudHMvZGlzY291bnQtd2lkZ2V0L2Rpc2NvdW50LXdpZGdldC5qcyIsIkQ6L2RldmVsb3BtZW50L0xlYXJuaW5nL1BhcnR5SW52aXRlcy9Lbm9ja291dEJyb3dzZXJpZnlEZW1vL3NyYy9jb21wb25lbnRzL3NpbXBsZS1uYW1lL3NpbXBsZS1uYW1lLmh0bWwiLCJEOi9kZXZlbG9wbWVudC9MZWFybmluZy9QYXJ0eUludml0ZXMvS25vY2tvdXRCcm93c2VyaWZ5RGVtby9zcmMvY29tcG9uZW50cy9zaW1wbGUtbmFtZS9zaW1wbGUtbmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGtvID0gKHdpbmRvdy5rbyk7XHJcblxyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwic2ltcGxlLW5hbWVcIiwgcmVxdWlyZShcIi4vY29tcG9uZW50cy9zaW1wbGUtbmFtZS9zaW1wbGUtbmFtZS5qc1wiKSk7XHJcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJkaXNjb3VudC13aWRnZXRcIiwgcmVxdWlyZShcIi4vY29tcG9uZW50cy9kaXNjb3VudC13aWRnZXQvZGlzY291bnQtd2lkZ2V0LmpzXCIpKTtcclxuXHJcbmtvLmFwcGx5QmluZGluZ3MoeyB1c2VyTmFtZToga28ub2JzZXJ2YWJsZSgpIH0pOyIsIm1vZHVsZS5leHBvcnRzID0gXCLvu788ZGl2PlxcclxcblxcdDxoMz5EaXNjb3VudCBmb3IgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiBsb2dvXFxcIj48L3NwYW4+PC9oMz5cXHJcXG5cXHRFbnRlciBuZXQgcHJpY2U6IDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIGRhdGEtYmluZD1cXFwidGV4dElucHV0OiBuZXRQcmljZVxcXCIvPjxici8+XFxyXFxuXFx0RW50ZXIgZGlzY291bnQ6IDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIGRhdGEtYmluZD1cXFwidGV4dElucHV0OiBkaXNjb3VudFBlcmNlbnRcXFwiLz48YnIvPlxcclxcblxcdDxidXR0b24gZGF0YS1iaW5kPVxcXCJjbGljazogY2FsY3VsYXRlXFxcIj5DYWxjdWxhdGU8L2J1dHRvbj5cXHJcXG5cXHQ8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6IHJlc3VsdFxcXCI+PC9zcGFuPlxcclxcbjwvZGl2PlwiO1xuIiwidmFyIGtvID0gKHdpbmRvdy5rbyk7XHJcbnZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL2Rpc2NvdW50LXdpZGdldC5odG1sXCIpO1xyXG5cclxuZnVuY3Rpb24gdmlld01vZGVsKHBhcmFtcykge1xyXG5cdHRoaXMubG9nbyA9IGtvLm9ic2VydmFibGUocGFyYW1zLmxvZ28pO1xyXG5cdHRoaXMubmV0UHJpY2UgPSBrby5vYnNlcnZhYmxlKCk7XHJcblx0dGhpcy5kaXNjb3VudFBlcmNlbnQgPSBrby5vYnNlcnZhYmxlKCk7XHJcblx0dGhpcy5yZXN1bHQgPSBrby5vYnNlcnZhYmxlKCk7XHJcblx0dGhpcy5jYWxjdWxhdGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBuZXRQcmljZSA9IHBhcnNlSW50KHRoaXMubmV0UHJpY2UoKSk7XHJcblx0XHR2YXIgZGlzY291bnQgPSBwYXJzZUludCh0aGlzLmRpc2NvdW50UGVyY2VudCgpKTtcclxuXHRcdHZhciBkaXNjb3VudERlbHRhID0gKG5ldFByaWNlIC8gMTAwKSAqIGRpc2NvdW50O1xyXG5cclxuXHRcdHRoaXMucmVzdWx0KG5ldFByaWNlIC0gZGlzY291bnREZWx0YSk7XHJcblx0fS5iaW5kKHRoaXMpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0dmlld01vZGVsOiB2aWV3TW9kZWwsXHJcblx0dGVtcGxhdGU6IHRlbXBsYXRlXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBcIu+7vzxwIGRhdGEtYmluZD0ndGV4dDogbmFtZSc+PC9wPlxcclxcbjxidXR0b24gZGF0YS1iaW5kPSdjbGljazogc29tZXRoaW5nJz5DbGljayBtZTwvYnV0dG9uPlwiO1xuIiwidmFyIGtvID0gKHdpbmRvdy5rbyksXHJcblx0dGVtcGxhdGUgPSByZXF1aXJlKFwiLi9zaW1wbGUtbmFtZS5odG1sXCIpO1xyXG5cclxuZnVuY3Rpb24gdmlld01vZGVsKGRhdGEpIHtcclxuXHR0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcbn1cclxuXHJcbnZpZXdNb2RlbC5wcm90b3R5cGUuc29tZXRoaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnNvbGUubG9nKFwiWW91IGludm9rZWQgc29tZXRoaW5nKCkgb24gdGhlIHZpZXdtb2RlbC5cIik7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHR2aWV3TW9kZWw6IHZpZXdNb2RlbCxcclxuXHR0ZW1wbGF0ZTogdGVtcGxhdGVcclxufTsiXX0=
