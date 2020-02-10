import {
    Count, Update, Create, Destroy, FindAll, FindOne,
} from '@helper/category';

export async function createCategory(_, {
    title,
    description,
    imageName,
    imageTitle,
    imagePath,
}) {
    const create = await Create({
        title,
        description,
        imageName,
        imageTitle,
        imagePath,
    });
    return create;
}

export async function updateCategory(_, {
    id,
    title,
    description,
    imageName,
    imageTitle,
    imagePath,
}) {
    if (await Count({
        where: {
            id,
        },
    })) {
        await Update({
            title,
            description,
            imageName,
            imageTitle,
            imagePath,
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
    if (await Count({
        where: {
            id,
        },
    })) {
        await Destroy({
            where: {
                id,
            },
        });
        return {
            success: true,
            msg: 'Deleted Successfully',
        };
    }
    return {
        success: true,
        msg: 'Invalid ID',
    };
}


// Query are here

export async function allCategory() {
    const allData = await FindAll();
    return allData;
}

export async function singleCategory(_, { id }) {
    if (!await Count({
        where: {
            id,
        },
    })) {
        throw new Error('Invalid ID');
    }
    const Data = await FindOne({
        where: {
            id,
        },
    });
    return Data;
}
