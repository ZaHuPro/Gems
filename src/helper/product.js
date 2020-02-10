import DB from '@providers/Database';

export async function FindOne(payload) {
    const returnData = await DB.models.Product.findOne(payload);
    return returnData.id ? returnData : {};
}

export async function FindAll(payload) {
    const returnData = await DB.models.Product.findAll(payload);
    return returnData.length > 0 ? returnData : [];
}

export async function Count(payload) {
    return (
        (await DB.models.Product.count(payload)) > 0
    );
}

export async function Create(payload) {
    const returnData = await DB.models.Product.create(payload);
    return returnData.id ? returnData : {};
}

export async function Update(payload) {
    const returnData = await DB.models.Product.update(payload);
    return !!returnData[0];
}


export async function Destroy(conditions) {
    const returnData = await DB.models.Product.destroy(conditions);
    return returnData;
}
