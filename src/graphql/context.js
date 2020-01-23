import { AuthenticationError } from 'apollo-server-express';
import errorMsg from '../utils/error-messages';
import authyModule from '../helper/authy';

const context = async ({ req }) => {
    try {
        const returnData = {
            requestIp: req.requestIp,
            pathname: req.pathname,
            query: req.query,
            useragent: req.useragent,
        };

        const { authorization } = req.headers;

        if (!authorization) {
            return returnData;
        }
        if (authorization.split(' ').length > 1) {
            const token = authorization.split(' ')[1];
            const authyData = await authyModule.checkLoginToken(token);
            if (authyData.success) {
                returnData.userData = authyData.userData;
                return returnData;
            }
            throw new AuthenticationError(authyData.msg);
        } else {
            throw new AuthenticationError(errorMsg.invalidToken);
        }
    } catch (_error) {
        throw new AuthenticationError(_error);
    }
};

export default context;
