export const mutations = `
    type Mutation {
        createCategory(title: String!, description: String!, icon: String!): Category
        updateCategory(id: ID!, title: String, description: String, icon: String): Responce
        deleteCategory(id: ID!): Responce
        restoreCategory(id: ID!): Responce
    }

    type Query {
        allCategory: [Category]
        singleCategory(id: ID!): Category
    }
`;

export const types = `
    type Category {
        id: ID
        title: String
        description: String
        icon: String
        products: [Product]
    }
`;

export default types + mutations;
