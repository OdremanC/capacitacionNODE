'use strict';

const test = require("../../model/test");


exports.list = (req, res, next) => {
  test.find({}).then((response) =>{
    res.status(200)
      .send(response);
  })
}

exports.create = (req, res) => {
  test.create(req.body)
    .then((response) => {
      res.status(200)
        .send({test:response, mensaje:{tipo: "success", message:"Registro guardado satisfactoriamente!"}});
  }).catch(error =>[
      res.send({error:error, mensaje:{tipo: "error", message:"Oops!! hubo un error!"}})
  ])
}

//get un registro por id
exports.findById = (req, res) => {
  test.findById(req.params.id, (err, test) => {
    if(err) return res.send(500, err.message);
    console.log('GET /test/' + req.params.id);
    res.status(200)
      .jsonp(test);
  });
}; 

//DELETE - Borrar un registro con el id
exports.delete = (req, res) => {
  test.findById(req.params.id, (err, test) => {
    test.remove(function(err) {
      if(err) return res.send(500, {mensaje:{tipo:"error", message:'Error al Eliminar!'}});
      res.json({test:test, mensaje:{tipo:"success", message:'Successfully deleted'} });
      console.log('Successfully deleted')
     });
  });
};

