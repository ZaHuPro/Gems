export const mutations = `
    extend type Mutation {
        createAuction(title: String!, description: String!, feedCapacity: Int, priceIncrement: Float, tertiaryGaining: Int, feedCost: Int, huntingCost: Int, growTime: Int, huntTime: Int, startsAt: String, closingAt: String, preBookingDiscount: Int, productId: String!): Auction
        updateAuction(id: ID!, title: String, description: String, feedCapacity: Int, priceIncrement: Float, tertiaryGaining: Int, feedCost: Int, huntingCost: Int, growTime: Int, huntTime: Int, closingAt: String, preBookingDiscount: Int, productId: String!): Responce
    }

    extend type Query {
        allAuction: [Auction]
        singleAuction(id: ID!): Auction
    }
`;

export const types = `
    type Auction {
        id: ID
        title: String
        description: String
        feedCapacity: Int
        priceIncrement: Float
        tertiaryGaining: Int
        feedCost: Int
        huntingCost: Int
        growTime: Int
        huntTime: Int
        startsAt: String
        closingAt: String
        preBookingDiscount: Int
        status: String
        history: [AuctionHistory]
        product: Product
        winner: UserView
    }
`;

export default types + mutations;
