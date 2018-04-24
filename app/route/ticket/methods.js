'use strict';
var UserCtrl = require("../../controller/ticket");
const ticket = require("../../model/ticket");


exports.list = (req, res, next) => {
  UserCtrl.index(req).then((data) =>{
    res.send(data).status(200);
  }, (err) => {
    console.error(err);
    res.send(err.code || 500, err.error || err);
  });
}

exports.create = (req, res) => {
  UserCtrl.create(req).then((data) => {
    res.status(200).send({data:data, mensaje:{tipo:"success", message:"Successfully created"}});
  }, (err) => {
    console.error(err);
    res.send(err.code || 500, err.error || err);
  });
}

exports.delete = (req, res) => {
  ticket.findById(req.params.id, (err, ticket) => {
    ticket.remove((err) => {
      if(err) return res.send(500, {mensaje:{tipo:"error", message:'Error al Eliminar!'}});
      res.json({ticket:ticket, mensaje:{tipo:"success", message:'Successfully deleted'} });
      console.log('Successfully deleted')
     });
  });
};