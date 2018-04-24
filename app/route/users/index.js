const middleware = require('../../service/middleware.js');
const methods = require('./methods');

module.exports = function(app){
	app.get('/users',middleware.ensureAuthenticated, methods.list);
	app.post('/users',methods.create);
	app.delete('/users/:id',middleware.ensureAuthenticated,methods.delete);
	app.post('/users/login',methods.login);
	
}