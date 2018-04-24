const middleware = require('../../service/middleware.js');
//Endpoints de menu
const methods = require('./methods');


module.exports = function(app) {

  app.get('/api/test', methods.list);
  app.post('/api/test', methods.create);
  app.delete('/api/test/:id', methods.delete);
  //app.put('/api/test/:id', methods.update);
  
};