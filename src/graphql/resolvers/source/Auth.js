import userModule from '@helper/user';
import authyModule from '@helper/authy';

export async function login(parent, {
    key,
    password,
}, context) {
    const keyData = await userModule.findOneByEmail(key);
    if (keyData && keyData.id) {
        const verify = await authyModule.verifyHash(password, keyData.salt, keyData.password);
        if (verify) {
            keyData.token = await authyModule.createLoginToken(context, keyData.id);
            return keyData;
        }
        throw new Error('Invalid Password');
    }
    throw new Error('Invalid Username/Email');
}

export async function register(parent, {
    email,
    userName,
    password,
    firstName,
    lastName,
}, context) {
    const create = await userModule.createUser({
        email,
        userName,
        password,
        firstName,
        lastName,
    }, context.requestIp.clientIp);
    create.token = await authyModule.createLoginToken(context, create.id);
    return create;
}
