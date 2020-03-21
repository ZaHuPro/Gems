import Query from '@resolvers/_query';
import Mutation from '@resolvers/_mutation';

import categoryModule from '@helper/category';
import productModule from '@helper/product';

export default {
    Product: {
        category: async (parent) => {
            const gotData = await categoryModule.findOne({
                where: {
                    id: parent.categoryId,
                },
            });
            return gotData;
        },
    },
    Category: {
        products: async (parent) => {
            const gotData = await productModule.findAll({
                where: {
                    categoryId: parent.id,
                },
            });
            return gotData;
        },
    },
    Query,
    Mutation,
};
