const middleware = require('../../service/middleware.js');
//Endpoints de menu
const methods = require('./methods');


module.exports = function(app) {

  app.get('/api/tickets', methods.list);
  app.post('/api/tickets', methods.create);
  app.delete('/api/tickets/:id', methods.delete);
  
};