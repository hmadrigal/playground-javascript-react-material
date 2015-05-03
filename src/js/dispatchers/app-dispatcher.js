var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function  (action) {
	console.log('action',action);
	this.dispatch({
		source : "VIEW_ACTION",
		action: action
	});
};

module.exports = AppDispatcher;