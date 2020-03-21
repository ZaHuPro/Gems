import productModule from '@helper/product';

export async function createProduct(_, {
    title,
    description,
    retailPrice,
    shippingPrice,
    stack,
}) {
    const create = await productModule.create({
        title,
        description,
        retailPrice,
        shippingPrice,
        stack,
    });
    return create;
}

export async function updateProduct(_, {
    id,
    title,
    description,
    retailPrice,
    shippingPrice,
    stack,
}) {
    if (await productModule.count({
        where: {
            id,
        },
    })) {
        await productModule.update({
            title,
            description,
            retailPrice,
            shippingPrice,
            stack,
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

export async function deleteProduct(_, { id }) {
    if (await productModule.count({ id, status: 'active' }) && await productModule.delete(id, 'deleted')) {
        return {
            success: true,
            msg: 'Deleted Successfully',
        };
    }
    return {
        success: true,
        msg: 'Error of deleting',
    };
}

export async function restoreProduct(_, { id }) {
    if (await productModule.count({ id, status: 'deleted' }) && await productModule.delete(id, 'active')) {
        return {
            success: true,
            msg: 'Restored Successfully',
        };
    }
    return {
        success: true,
        msg: 'Error of restoring',
    };
}


// Query are here

export async function allProduct() {
    const allData = await productModule.findAll({});
    return allData;
}

export async function singleProduct(_, { id }) {
    if (!await productModule.count({ id, status: 'active' })) {
        throw new Error('Invalid ID');
    }
    const singleData = await productModule.findOne({
        where: {
            id,
        },
    });
    return singleData;
}
