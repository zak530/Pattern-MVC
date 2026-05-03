// app/models/userModel.js
let users = [];
const User = {
  findAll: () => users,
  create: (name, email, linkImg) => {
    const newUser = { id: Date.now(), name, email, linkImg };
    users.push(newUser);
    return newUser;
  },
  findById: (id) => users.find(u => u.id === parseInt(id)),
  delete: (id) => {
    users = users.filter(u => u.id !== parseInt(id));
  }
};
module.exports = User;