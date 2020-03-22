import categoryModule from '@helper/category';
import productModule from '@helper/product';
import auctionModule from '@helper/auction';
import auctionHistoryModule from '@helper/auctionHistory';
import userModule from '@helper/user';

export const Product = {
    category: async (parent) => {
        const gotData = await categoryModule.findOne({
            where: {
                id: parent.categoryId,
            },
        });
        return gotData;
    },
    auctions: async (parent) => {
        const gotData = await auctionModule.findAll({
            where: {
                productId: parent.id,
            },
        });
        return gotData;
    },
};

export const Category = {
    products: async (parent) => {
        const gotData = await productModule.findAll({
            where: {
                categoryId: parent.id,
            },
        });
        return gotData;
    },
};

export const Auction = {
    product: async (parent) => {
        const gotData = await productModule.findOne({
            where: {
                id: parent.productId,
            },
        });
        return gotData;
    },
    winner: async (parent) => {
        const gotData = parent.winnerId ? await userModule.fetchUserData({
            where: {
                id: parent.winnerId,
            },
        }) : {};
        return gotData;
    },
    history: async (parent) => {
        const gotData = await auctionHistoryModule.findAll({
            where: {
                auctionId: parent.id,
            },
        });
        return gotData;
    },
};

export const AuctionHistory = {
    auction: async (parent) => {
        const gotData = await auctionModule.findOne({
            where: {
                id: parent.auctionId,
            },
        });
        return gotData;
    },
    feeder: async (parent) => {
        const gotData = await userModule.fetchUserData({
            where: {
                id: parent.userId,
            },
        });
        return gotData;
    },
};
