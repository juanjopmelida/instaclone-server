const resolver = {
  Query: {
    // User
    getUser: () => {
      console.log("Obteniendo usuario");
      return null;
    },
  },
};

module.exports = resolver;
