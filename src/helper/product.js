import DB from '@providers/Database';

export default class productModule {
    static async findOne(payload) {
        const payLoad = payload.where ? payload : { where: {} };
        payLoad.where.status = 'active';
        const returnData = await DB.models.Product.findOne(payLoad);
        return returnData.id ? returnData : {};
    }

    static async findAll(payload) {
        const payLoad = payload.where ? payload : { where: {} };
        payLoad.where.status = 'active';
        const returnData = await DB.models.Product.findAll(payLoad);
        return returnData.length > 0 ? returnData : [];
    }

    static async count(where) {
        return (
            (await DB.models.Product.count({ where })) > 0
        );
    }

    static async create(payload) {
        const returnData = await DB.models.Product.create(payload);
        return returnData.id ? returnData : {};
    }

    static async update(payload) {
        const returnData = await DB.models.Product.update(payload);
        return !!returnData[0];
    }

    static async delete(id, status) {
        const returnData = await DB.models.Product.update({
            status,
        }, {
            where: {
                id,
            },
        });
        return returnData;
    }

    static async destroy(id) {
        const returnData = await DB.models.Product.destroy({
            where: {
                id,
            },
        });
        return returnData;
    }
}
