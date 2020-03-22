export const mutations = `
    extend type Mutation {
        createAuctionHistory(primarySpent: Int!, secondarySpent: Int!, tertiarySpent: Int, userId: String!, auctionId: String!): AuctionHistory
    }

    extend type Query {
        auctionHistory(auctionId: String!): [AuctionHistory]
        userAuctionHistory(userId: String!): [AuctionHistory]
        userSingleAuctionHistory(auctionId: String!, userId: String!): [AuctionHistory]
    }
`;

export const types = `
    type AuctionHistory {
        id: ID
        primarySpent: Int
        secondarySpent: Int
        tertiarySpent: Int
        totalSpent: Int
        currentCost: Int
        currentPrice: Float
        tertiaryGained: Int
        stage: String
        auction: Auction
        feeder: UserView 
    }
`;

export default types + mutations;
