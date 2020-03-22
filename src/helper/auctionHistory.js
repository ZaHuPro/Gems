import DB from '@providers/Database';

export default class auctionHistoryModule {
    static async findOne(payload) {
        const returnData = await DB.models.AuctionHistory.findOne(payload);
        return returnData.id ? returnData : {};
    }

    static async findAll(payload) {
        const returnData = await DB.models.AuctionHistory.findAll(payload);
        return returnData.length > 0 ? returnData : [];
    }

    static async count(where) {
        return (
            (await DB.models.AuctionHistory.count({ where })) > 0
        );
    }

    static async create(payload) {
        const returnData = await DB.models.AuctionHistory.create(payload);
        return returnData.id ? returnData : {};
    }
}
