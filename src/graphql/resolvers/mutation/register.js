import userModule from '../../../helper/user';

async function register(parent, {
    email,
    userName,
    password,
    firstName,
    lastName,
}, context) {
    const create = userModule.createUser({
        email,
        userName,
        password,
        firstName,
        lastName,
    }, context.requestIp.clientIp);
    return create;
}

export default register;
