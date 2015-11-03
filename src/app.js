var ko = require("knockout");

ko.components.register("simple-name", require("./components/simple-name/simple-name.js"));
ko.components.register("discount-widget", require("./components/discount-widget/discount-widget.js"));

ko.applyBindings({ userName: ko.observable() });