import DB from '@providers/Database';

export default class auctionModule {
    static async findOne(payload) {
        const returnData = await DB.models.Auction.findOne(payload);
        return returnData.id ? returnData : {};
    }

    static async findAll(payload) {
        const returnData = await DB.models.Auction.findAll(payload);
        return returnData.length > 0 ? returnData : [];
    }

    static async count(where) {
        return (
            (await DB.models.Auction.count({ where })) > 0
        );
    }

    static async create(payload) {
        const returnData = await DB.models.Auction.create(payload);
        return returnData.id ? returnData : {};
    }

    static async update(payload) {
        const returnData = await DB.models.Auction.update(payload);
        return !!returnData[0];
    }

    static async statusUpdate(id, status) {
        const returnData = await DB.models.Auction.update({
            status,
        }, {
            where: {
                id,
            },
        });
        return returnData;
    }

    static async destroy(id) {
        const returnData = await DB.models.Auction.destroy({
            where: {
                id,
            },
        });
        return returnData;
    }
}
