import auctionHistoryModule from '@helper/auctionHistory';

export async function createAuctionHistory(_, {
    primarySpent,
    secondarySpent,
    tertiarySpent,
    auctionId,
    userId,
}) {
    const create = await auctionHistoryModule.create({
        primarySpent,
        secondarySpent,
        tertiarySpent,
        auctionId,
        userId,
    });
    return create;
}

// Query are here

export async function auctionHistory(_, {
    auctionId,
}) {
    const allData = await auctionHistoryModule.findAll({
        where: {
            auctionId,
        },
    });
    return allData;
}

export async function userAuctionHistory(_, { userId }) {
    const singleData = await auctionHistoryModule.findAll({
        where: {
            userId,
        },
    });
    return singleData;
}


export async function userSingleAuctionHistory(_, { auctionId, userId }) {
    const singleData = await auctionHistoryModule.findAll({
        where: {
            auctionId,
            userId,
        },
    });
    return singleData;
}
