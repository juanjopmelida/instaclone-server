const userController = require("../controllers/user");

const resolvers = {
  Query: {
    // User
    getUser: () => {
      console.log("Obteniendo usuario");
      return null;
    },
  },

  Mutation: {
    // User
    register: (_, { input }) => userController.register(input),
    login: (_, { input }) => userController.login(input),
    updateAvatar: (_, { file }, ctx) => userController.updateAvatar(file, ctx),
  },
};

module.exports = resolvers;
