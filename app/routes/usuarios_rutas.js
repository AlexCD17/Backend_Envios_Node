const express = require("express");

const routes = express.Router();

const ControllerUsuario = require("../controllers/usuarios");

//Devolucion de todos los usuarios dados de alta en el sistema
routes.get("/usuarios", ControllerUsuario.getUsuarios); //Regresa todos los usuarios
routes.post("/usuario", ControllerUsuario.crearUsuario); //Nos permite la creación de usuarios
routes.delete("/usuario", ControllerUsuario.eliminarUsuario); //Esta es la ruta para eliminar usuario

module.exports = routes;
