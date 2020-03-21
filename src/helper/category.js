import DB from '@providers/Database';

export default class categoryModule {
    static async findOne(payload) {
        const payLoad = payload.where ? payload : { where: {} };
        payLoad.where.status = 'active';
        const returnData = await DB.models.Category.findOne(payLoad);
        return returnData.id ? returnData : {};
    }

    static async findAll(payload) {
        const payLoad = payload.where ? payload : { where: {} };
        payLoad.where.status = 'active';
        const returnData = await DB.models.Category.findAll(payLoad);
        return returnData.length > 0 ? returnData : [];
    }

    static async count(where) {
        return (
            (await DB.models.Category.count({ where })) > 0
        );
    }

    static async create(payload) {
        const returnData = await DB.models.Category.create(payload);
        return returnData.id ? returnData : {};
    }

    static async update(payload) {
        const returnData = await DB.models.Category.update(payload);
        return !!returnData[0];
    }

    static async delete(id, status) {
        const returnData = await DB.models.Category.update({
            status,
        }, {
            where: {
                id,
            },
        });
        return returnData;
    }

    static async destroy(id) {
        const returnData = await DB.models.Category.destroy({
            where: {
                id,
            },
        });
        return returnData;
    }
}
