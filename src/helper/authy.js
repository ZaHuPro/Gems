import MD5 from 'md5';
import DB from '../providers/Database';
import commonModule from './common';
import Locals from '../providers/Locals';

import errorMsg from '../utils/error-messages';

class AuthyModule {
    static async createHash(_password) {
        const salt = await commonModule.randomGenerator(10);
        return {
            salt,
            password: await MD5(MD5(_password) + salt),
        };
    }

    static async verifyHash(password, salt, hash) {
        return await MD5(MD5(password) + salt) === hash;
    }

    static async createLoginToken({ requestIp, useragent }, userID) {
        const hashkey = MD5(MD5(new Date().getTime()) + Locals.config().appSecret);
        await DB.models.LoginToken.create({
            hashkey,
            ip: requestIp.clientIp,
            useragent,
            logger: userID,
        });
        return hashkey;
    }

    static async checkLoginToken(hashkey) {
        const tokenData = await DB.models.LoginToken.findOne({
            where: {
                hashkey,
            },
        });
        if (tokenData.id && tokenData.status === 'active') {
            const userData = await DB.models.User.findOne({
                where: {
                    id: tokenData.id,
                },
                attributes: ['id', 'email'],
            });
            return {
                success: true,
                userData,
            };
        } if (tokenData.id && tokenData.status !== 'active') {
            return {
                success: false,
                msg: errorMsg.tokenExpired,
            };
        }
        return {
            success: false,
            msg: errorMsg.invalidToken,
        };
    }

    static async closeLoginToken(hashkey) {
        const tokenData = await DB.models.LoginToken.update({
            status: 'inactive',
        }, {
            where: {
                hashkey,
            },
        });
        return tokenData;
    }
}

export default AuthyModule;
