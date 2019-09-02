const graphql = require('graphql');

const {
    GraphQLObjectType
} = graphql;

const UserTyepe = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString }
    }
});