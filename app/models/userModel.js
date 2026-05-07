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
      quantitaMagazzino: Number(quantitaMagazzino)
    };

    users.push(newUser);
    return newUser;
  },

  delete: (id) => {
    users = users.filter(user => user.id !== Number(id));
  },

  vendi: (id) => {
    const user = users.find(user => user.id === Number(id));

    if (user && user.quantitaMagazzino > 0) {
      user.quantitaMagazzino--;
    }
  },

  compra: (id) => {
    const user = users.find(user => user.id === Number(id));

    if (user) {
      user.quantitaMagazzino++;
    }
  },
 scorta: () => {
    users = users.filter(user => user.quantitaMagazzino < 5);
  }
};

module.exports = User;