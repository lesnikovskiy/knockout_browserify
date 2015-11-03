var ko = require("knockout");
var template = require("./simple-name.html");

function viewModel(data) {
	this.name = data.name;
	this.doSomething = function() {
		console.log("You invoked something() on the viewmodel.");
	}.bind(this);
}

module.exports = {
	viewModel: viewModel,
	template: template
};