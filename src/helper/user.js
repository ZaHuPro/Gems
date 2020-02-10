/* eslint-disable camelcase */
import DB from '../providers/Database';
import authyModule from './authy';

class UserModule {
    static async countByEmail(_email) {
        return (
            (await DB.models.User.count({
                where: {
                    email: _email,
                },
            })) > 0
        );
    }

    static async fetchUserData(conditions) {
        const returnData = await DB.models.User.findOne(conditions)
            .then((userIs) => (userIs.id ? userIs.dataValues : {}));
        return returnData;
    }


    static async findOneByEmail(_email) {
        const returnData = await DB.models.User.findOne({
            where: {
                email: _email,
            },
        }).then((userIs) => (userIs && userIs.id ? userIs : {}));
        return returnData;
    }

    static async resUserData(_id) {
        const returnData = await DB.models.User.findOne({
            where: {
                id: _id,
            },
            attributes: ['id', 'email'],
        }).then((userIs) => (userIs.id ? userIs.dataValues : {}));
        return returnData;
    }

    static async createUser(
        {
            email,
            password,
            userName,
            firstName,
            lastName,
        },
        requestIp,
    ) {
        const hashed = await authyModule.createHash(password);
        const returnData = await DB.models.User.create({
            email,
            firstName,
            lastName,
            userName,
            password: hashed.password,
            salt: hashed.salt,
            joinedIP: requestIp.clientIp,
        });
        return returnData;
    }
}

export default UserModule;
