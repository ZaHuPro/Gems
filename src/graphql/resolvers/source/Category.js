import categoryModule from '@helper/category';


export async function createCategory(_, {
    title,
    description,
    icon,
}) {
    const create = await categoryModule.create({
        title,
        description,
        icon,
    });
    return create;
}

export async function updateCategory(_, {
    id,
    title,
    description,
    icon,
}) {
    if (await categoryModule.count({
        where: {
            id,
        },
    })) {
        await categoryModule.update({
            title,
            description,
            icon,
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

export async function deleteCategory(_, { id }) {
    if (await categoryModule.count({ id, status: 'active' }) && await categoryModule.delete(id, 'deleted')) {
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

export async function restoreCategory(_, { id }) {
    if (await categoryModule.count({ id, status: 'deleted' }) && await categoryModule.delete(id, 'active')) {
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

export async function allCategory() {
    const allData = await categoryModule.findAll({});
    return allData;
}

export async function singleCategory(_, { id }) {
    if (!await categoryModule.count({ id, status: 'active' })) {
        throw new Error('Invalid ID');
    }
    const singleData = await categoryModule.findOne({
        where: {
            id,
        },
    });
    return singleData;
}
