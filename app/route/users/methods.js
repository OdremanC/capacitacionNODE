const users = require("../../model/users");
const service = require('../../service/services.js');


exports.list = (req, res, next) => {
  users.find({}).then((response) =>{
    res.status(200)
      .send(response);
  })
}

exports.create = (req, res) => {
	users.create(req.body)
    .then((response) => {
      res.status(200)
        .send({users:response, mensaje:{tipo: "success", message:"Registro guardado satisfactoriamente!"}});
  }).catch(error =>[
      res.send({error:error, mensaje:{tipo: "error", message:"Oops!! hubo un error!"}})
  ])
}

//get un registro por id
exports.findById = (req, res) => {
	users.findById(req.params.id, (err, users) => {
		if(err) return res.send(500, err.message);
		console.log('GET /users/' + req.params.id);
		res.status(200)
      .jsonp(users);
	});
}; 
//login
exports.login = (req,res) => {
  users.findOne({userName: req.body.userName, password:req.body.password},(err, users) => {
    if(err) return res.send(500, err.message);
    if (!users) { return res.send(400, "login error, some data is wrong")}
    res.status(200)
      .send({token:service.createToken(users),userID:users._id,userProfile:users.perfil, message: "login success", isLogged:true});
  })
}

//DELETE - Borrar un registro con el id
exports.delete = (req, res) => {
  users.findById(req.params.id, (err, users) => {
    users.remove(function(err) {
      if(err) return res.send(500, {mensaje:{tipo:"error", message:'Error al Eliminar!'}});
      res.json({users:users, mensaje:{tipo:"success", message:'Successfully deleted'} });
      console.log('Successfully deleted')
     });
  });
};

