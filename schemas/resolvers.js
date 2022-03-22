const resolvers = {
    Query: {
      pokeMon: () => {
        return 'Gotta catch em all!';
      }
    }
  };
  
  module.exports = resolvers;