const User = require('../models/userModel');

exports.home = (req, res) => {
  res.render('index');
};

exports.listUsers = (req, res) => {
  const users = User.findAll();
  res.render('users', { users });
};

exports.createUser = (req, res) => {
  const { name, email, linkImg, prezzo, quantitaMagazzino } = req.body;

  User.create(name, email, linkImg, prezzo, quantitaMagazzino);

  res.redirect('/users');
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;

  User.delete(id);

  res.redirect('/users');
};

exports.vendiUser = (req, res) => {
  const { id } = req.params;

  User.vendi(id);

  res.redirect('/users');
};

exports.compraUser = (req, res) => {
  const { id } = req.params;

  User.compra(id);

  res.redirect('/users');
};