export const mutations = `
    type Mutation {
        createCategory(title: String!, description: String!, imageName: String!, imageTitle: String!, imagePath: String!): Category
        updateCategory(id: ID!, title: String, description: String, imageName: String, imageTitle: String, imagePath: String): Responce
        deleteCategory(id: ID!): Responce
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
        imageName: String
        imageTitle: String
        imagePath: String
    }
`;

export default types + mutations;
