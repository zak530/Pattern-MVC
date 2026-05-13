const users = new Map();

const User = {

  findAll: () => {
    return users.values();
  },

  create: (name, email, linkImg, prezzo, quantitaMagazzino) => {

    const id = Date.now();

    const newUser = {
      id: id,
      name: name,
      email: email,
      linkImg: linkImg,
      prezzo: prezzo,
      quantitaMagazzino: Number(quantitaMagazzino)
    };  

    users.set(id, newUser);

    return newUser;
  },

  delete: (id) => {
    users.delete(Number(id));
  },

  vendi: (id) => {

    const user = users.get(Number(id));

    if (user && user.quantitaMagazzino > 0) {
      user.quantitaMagazzino--;
    }
  },

  compra: (id) => {

    const user = users.get(Number(id));

    if (user) {
      user.quantitaMagazzino++;
    }
  },
};

module.exports = User;