/* eslint-disable no-console */

import Log from './Log';
import Locals from './Locals';
import GraphQL from './Graphql';

class Server {
    /**
   * Starts the server
   */
    static async init() {
        const { port } = Locals.config();
        const graphqlServer = await GraphQL.mount();
        graphqlServer.listen({
            port,
        })
            .then(({ url }) => {
                Log.info(`🚀  GraphQL server ready at ${url}`);
                console.log(`🚀  GraphQL server ready at ${url}`);
            });
    }
}

/** Export the express module */
export default Server;
