(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var ko = (window.ko);

ko.components.register("discount-widget", require("./components/discount-widget/discount-widget.js"));

ko.applyBindings();

},{"./components/discount-widget/discount-widget.js":3}],2:[function(require,module,exports){
module.exports = "﻿<div>\r\n\t<form>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<h3>Discount widget demo for <span data-bind=\"text: logo\"></span></h3>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label class=\"control-label\" for=\"netPriceField\">Price:</label>\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t\t<span class=\"input-group-addon\">\r\n\t\t\t\t\t<i class=\"glyphicon glyphicon-euro\"></i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<input type=\"number\" id=\"netPriceField\" class=\"form-control\" data-bind=\"value: netPrice\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label class=\"control-label\" for=\"discountField\">Discount:</label>\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t\t<input type=\"number\" id=\"discountField\" class=\"form-control\" data-bind=\"value: discountPercent\" />\r\n\t\t\t\t<span class=\"input-group-addon\">%</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<button class=\"btn btn-default\" data-bind=\"click: calculate\">\r\n\t\t\t\tCalculate\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<span data-bind=\"text: result\"></span>\r\n\t\t</div>\r\n\t</form>\r\n</div>";

},{}],3:[function(require,module,exports){
"use strict";

var ko = (window.ko);
var template = require("./discount-widget.html");

function viewModel(params) {
	this.logo = ko.observable(params.logo);
	this.netPrice = ko.observable();
	this.discountPercent = ko.observable();
	this.result = ko.observable();
	this.calculate = (function () {
		var netPrice = parseInt(this.netPrice());
		var discount = parseInt(this.discountPercent());
		var discountDelta = netPrice / 100 * discount;

		this.result(netPrice - discountDelta);
	}).bind(this);
};

module.exports = {
	viewModel: viewModel,
	template: template
};

},{"./discount-widget.html":2}]},{},[1])