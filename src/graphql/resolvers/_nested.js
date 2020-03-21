import categoryModule from '@helper/category';
import productModule from '@helper/product';

export const Product = {
    category: async (parent) => {
        const gotData = await categoryModule.findOne({
            where: {
                id: parent.categoryId,
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
