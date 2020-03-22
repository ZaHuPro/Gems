export const mutations = `
    extend type Mutation {
        createProduct(title: String!, description: String!, retailPrice: Float!, shippingPrice: Float!, stack: Int!, categoryId: String!): Product
        updateProduct(id: ID!, title: String, description: String, retailPrice: Float!, shippingPrice: Float!, stack: Int!, categoryId: String!): Responce
        deleteProduct(id: ID!): Responce
        restoreProduct(id: ID!): Responce
    }

    extend type Query {
        allProduct: [Product]
        singleProduct(id: ID!): Product
    }
`;

export const types = `
    type Product {
        id: ID
        title: String
        description: String
        retailPrice: Float
        shippingPrice: Float
        stack: Int
        sold: Int
        category: Category
        auctions: [Auction]
    }
`;

export default types + mutations;
