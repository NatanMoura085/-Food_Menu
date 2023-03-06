const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  funcao: { type: String, required: true },
  salario: { type: Number, required: true },
});

const person = mongoose.model('Person', personSchema);

module.exports = person;
