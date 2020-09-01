const express = require("express");
const Usuario = require("../models/usuario_model");

function getUsers(req, res) {
  let resultado = listarUsuarioActivos();
  resultado
    .then((usuarios) => {
      res.json(usuarios);
    })
    .catch((err) => {
      res.status(404).json({
        err,
      });
    });
}

async function listarUsuarioActivos() {
  let usuarios = await Usuario.find({ estado: true });
  return usuarios;
}

module.exports = getUsers;
