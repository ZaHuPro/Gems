import Query from '@resolvers/_query';
import Mutation from '@resolvers/_mutation';

import {
    Product, Category, Auction, AuctionHistory,
} from '@resolvers/_nested';

export default {
    Product,
    Category,
    Auction,
    AuctionHistory,
    Query,
    Mutation,
};
