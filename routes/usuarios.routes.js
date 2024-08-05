const router = require('express').Router()
const usuarios = require('../controllers/usuarios.controller')

// GET: api/usuarios
router.get('/', usuarios.getAll)

// GET: api/usarios/email
router.get('/', usuarios.get)

// POST: api/usarios
router.post('/', usuarios.create)

// PUT: api/usarios/email
router.put('/:email', usuarios.update)

// DELETE: api/usarios/email
router.delete('/:email', usuarios.delete)

module.exports = router