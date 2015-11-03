var ko = require("knockout"),
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