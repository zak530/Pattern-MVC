let users = [];

const User = {
  findAll: () => users,

  create: (name, email, linkImg, prezzo, quantitaMagazzino) => {
    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
      linkImg: linkImg,
      prezzo: prezzo,
      quantitaMagazzino: quantitaMagazzino
    };

    users.push(newUser);
    return newUser;
  },

  findById: (id) => {
    return users.find(u => u.id === parseInt(id));
  },

  delete: (id) => {
    users = users.filter(u => u.id !== parseInt(id));
  }
};

module.exports = User;