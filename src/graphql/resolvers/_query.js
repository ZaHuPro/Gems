import resyncDB from '@source/DB';
import { allCategory, singleCategory } from '@source/Category';
import { allProduct, singleProduct } from '@source/Product';
import { allAuction, singleAuction } from '@source/Auction';
import { auctionHistory, userAuctionHistory, userSingleAuctionHistory } from '@source/AuctionHistory';

export default {
    resyncDB,
    allCategory,
    singleCategory,
    allProduct,
    singleProduct,
    allAuction,
    singleAuction,
    auctionHistory,
    userAuctionHistory,
    userSingleAuctionHistory,
};
