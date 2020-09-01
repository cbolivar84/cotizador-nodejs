const express = require("express");
const router = express.Router();
const Usuario = require("../models/usuario_model");
const Joi = require("@hapi/joi");
const getUsers = require('../controllers/users');

const schema = Joi.object({
  nombre: Joi.string().min(3).max(10).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});

/* GET users listing. */
router.get('/', getUsers);


router.post("/", (req, res) => {
  let body = req.body;
  const { error, value } = schema.validate({
    nombre: body.nombre,
    email: body.email,
  });
  if (!error) {
    let resultado = crearUsuario(body);

    resultado
      .then((user) => {
        res.json({
          valor: user,
        });
      })
      .catch((err) => {
        res.status(400).json({
          err,
        });
      });
  } else {
    res.status(400).json({
      error,
    });
  }
});

router.patch("/:email", (req, res) => {
  const { error, value } = schema.validate({ nombre: req.body.nombre });
  if (!error) {
    let resultado = actualizarUsuario(req.params.email, req.body);

    resultado
      .then((user) => {
        res.json({
          valor: user,
        });
      })
      .catch((err) => {
        res.status(400).json({
          err,
        });
      });
  } else {
    res.status(400).json({
      error,
    });
  }
});

router.delete("/:email", (req, res) => {
  let resultado = desactivarUsuario(req.params.email);
  resultado
    .then((valor) => {
      res.json({
        usuario: valor,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err,
      });
    });
});


async function actualizarUsuario(email, body) {
  let usuario = await Usuario.updateOne(
    { email: email },
    {
      $set: {
        nombre: body.nombre,
        password: body.password,
      },
    },
    { new: true }
  );
  return usuario;
}

async function crearUsuario(body) {
  let usuario = new Usuario({
    email: body.email,
    nombre: body.nombre,
    password: body.password,
  });
  return await usuario.save();
}

async function desactivarUsuario(email) {
  let usuario = await Usuario.findOneAndUpdate(
    { email: email },
    {
      $set: {
        estado: false,
      },
    },
    { new: true }
  );
  return usuario;
}

module.exports = router;
