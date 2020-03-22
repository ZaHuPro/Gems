import auctionModule from '@helper/auction';

export async function createAuction(_, {
    title,
    description,
    feedCapacity,
    priceIncrement,
    tertiaryGaining,
    feedCost,
    huntingCost,
    growTime,
    huntTime,
    startsAt,
    closingAt,
    preBookingDiscount,
    productId,
}) {
    const create = await auctionModule.create({
        title,
        description,
        feedCapacity,
        priceIncrement,
        tertiaryGaining,
        feedCost,
        huntingCost,
        growTime,
        huntTime,
        startsAt,
        closingAt,
        preBookingDiscount,
        productId,
    });
    return create;
}

export async function updateAuction(_, {
    id,
    title,
    description,
    feedCapacity,
    priceIncrement,
    tertiaryGaining,
    feedCost,
    huntingCost,
    growTime,
    huntTime,
    startsAt,
    closingAt,
    preBookingDiscount,
    productId,
}) {
    if (await auctionModule.count({
        where: {
            id,
        },
    })) {
        await auctionModule.update({
            title,
            description,
            feedCapacity,
            priceIncrement,
            tertiaryGaining,
            feedCost,
            huntingCost,
            growTime,
            huntTime,
            startsAt,
            closingAt,
            preBookingDiscount,
            productId,
        }, {
            where: {
                id,
            },
        });
        return {
            success: true,
            msg: 'Updated Successfully',
        };
    }
    return {
        success: true,
        msg: 'Invalid ID',
    };
}

// Query are here

export async function allAuction() {
    const allData = await auctionModule.findAll({});
    return allData;
}

export async function singleAuction(_, { id }) {
    if (!await auctionModule.count({ id })) {
        throw new Error('Invalid ID');
    }
    const singleData = await auctionModule.findOne({
        where: {
            id,
        },
    });
    return singleData;
}
