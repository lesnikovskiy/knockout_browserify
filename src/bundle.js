(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ko = (window.ko);

ko.components.register("discount-widget", require("./components/discount-widget/discount-widget.js"));

ko.applyBindings();
},{"./components/discount-widget/discount-widget.js":3}],2:[function(require,module,exports){
module.exports = "﻿<div>\r\n\t<form>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<h3>Discount widget demo for <span data-bind=\"text: logo\"></span></h3>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label class=\"control-label\" for=\"netPriceField\">Price:</label>\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t\t<span class=\"input-group-addon\">\r\n\t\t\t\t\t<i class=\"glyphicon glyphicon-euro\"></i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<input type=\"number\" id=\"netPriceField\" class=\"form-control\" data-bind=\"value: netPrice\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label class=\"control-label\" for=\"discountField\">Discount:</label>\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t\t<input type=\"number\" id=\"discountField\" class=\"form-control\" data-bind=\"value: discountPercent\" />\r\n\t\t\t\t<span class=\"input-group-addon\">%</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<button class=\"btn btn-default\" data-bind=\"click: calculate\">\r\n\t\t\t\tCalculate\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<span data-bind=\"text: result\"></span>\r\n\t\t</div>\r\n\t</form>\r\n</div>";

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
},{"./discount-widget.html":2}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkZXZlbG9wbWVudFxcTGVhcm5pbmdcXGtub2Nrb3V0X2Jyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiRDovZGV2ZWxvcG1lbnQvTGVhcm5pbmcva25vY2tvdXRfYnJvd3NlcmlmeS9zcmMvYXBwLmpzIiwiRDovZGV2ZWxvcG1lbnQvTGVhcm5pbmcva25vY2tvdXRfYnJvd3NlcmlmeS9zcmMvY29tcG9uZW50cy9kaXNjb3VudC13aWRnZXQvZGlzY291bnQtd2lkZ2V0Lmh0bWwiLCJEOi9kZXZlbG9wbWVudC9MZWFybmluZy9rbm9ja291dF9icm93c2VyaWZ5L3NyYy9jb21wb25lbnRzL2Rpc2NvdW50LXdpZGdldC9kaXNjb3VudC13aWRnZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBrbyA9ICh3aW5kb3cua28pO1xyXG5cclxua28uY29tcG9uZW50cy5yZWdpc3RlcihcImRpc2NvdW50LXdpZGdldFwiLCByZXF1aXJlKFwiLi9jb21wb25lbnRzL2Rpc2NvdW50LXdpZGdldC9kaXNjb3VudC13aWRnZXQuanNcIikpO1xyXG5cclxua28uYXBwbHlCaW5kaW5ncygpOyIsIm1vZHVsZS5leHBvcnRzID0gXCLvu788ZGl2PlxcclxcblxcdDxmb3JtPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcblxcdFxcdFxcdDxoMz5EaXNjb3VudCB3aWRnZXQgZGVtbyBmb3IgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiBsb2dvXFxcIj48L3NwYW4+PC9oMz5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHQ8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibmV0UHJpY2VGaWVsZFxcXCI+UHJpY2U6PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1ldXJvXFxcIj48L2k+XFxyXFxuXFx0XFx0XFx0XFx0PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIGlkPVxcXCJuZXRQcmljZUZpZWxkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiBuZXRQcmljZVxcXCIgLz5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHQ8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZGlzY291bnRGaWVsZFxcXCI+RGlzY291bnQ6PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgaWQ9XFxcImRpc2NvdW50RmllbGRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IGRpc2NvdW50UGVyY2VudFxcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPiU8L3NwYW4+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuXFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBjYWxjdWxhdGVcXFwiPlxcclxcblxcdFxcdFxcdFxcdENhbGN1bGF0ZVxcclxcblxcdFxcdFxcdDwvYnV0dG9uPlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcblxcdFxcdFxcdDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogcmVzdWx0XFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0PC9mb3JtPlxcclxcbjwvZGl2PlwiO1xuIiwidmFyIGtvID0gKHdpbmRvdy5rbyk7XHJcbnZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL2Rpc2NvdW50LXdpZGdldC5odG1sXCIpO1xyXG5cclxuZnVuY3Rpb24gdmlld01vZGVsKHBhcmFtcykge1xyXG5cdHRoaXMubG9nbyA9IGtvLm9ic2VydmFibGUocGFyYW1zLmxvZ28pO1xyXG5cdHRoaXMubmV0UHJpY2UgPSBrby5vYnNlcnZhYmxlKCk7XHJcblx0dGhpcy5kaXNjb3VudFBlcmNlbnQgPSBrby5vYnNlcnZhYmxlKCk7XHJcblx0dGhpcy5yZXN1bHQgPSBrby5vYnNlcnZhYmxlKCk7XHJcblx0dGhpcy5jYWxjdWxhdGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBuZXRQcmljZSA9IHBhcnNlSW50KHRoaXMubmV0UHJpY2UoKSk7XHJcblx0XHR2YXIgZGlzY291bnQgPSBwYXJzZUludCh0aGlzLmRpc2NvdW50UGVyY2VudCgpKTtcclxuXHRcdHZhciBkaXNjb3VudERlbHRhID0gKG5ldFByaWNlIC8gMTAwKSAqIGRpc2NvdW50O1xyXG5cclxuXHRcdHRoaXMucmVzdWx0KG5ldFByaWNlIC0gZGlzY291bnREZWx0YSk7XHJcblx0fS5iaW5kKHRoaXMpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0dmlld01vZGVsOiB2aWV3TW9kZWwsXHJcblx0dGVtcGxhdGU6IHRlbXBsYXRlXHJcbn07Il19
