/* eslint-disable no-console */

import express from 'express';

import Log from '../middlewares/Log';
import Locals from './Locals';
import GraphQL from './Graphql';
import Routes from './Routes';
import Bootstrap from '../middlewares/Kernel';

class Server {
    /**
   * Starts the server
   */
    constructor() {
        this.express = express();
        this.mountRoutes();
        this.mountMiddlewares();
    }

    /**
    * Mounts all the defined middlewares
    */
    mountMiddlewares() {
        this.express = Bootstrap.init(this.express);
    }

    /**
    * Mounts all the defined routes
    */
    mountRoutes() {
        this.express = Routes.mountWeb(this.express);
    }

    async init() {
        const app = this.express;

        const { port } = Locals.config();
        const graphqlServer = await GraphQL.mount(this.express);
        graphqlServer.listen({
            port,
            graphqlPaths: ['/graphql'],
            expressApp: app,
            launcherOptions: {
                startupTimeout: 3000,
            },
        }, () => {
            Log.info(`🚀  GraphQL server ready at ${port}`);
            console.log(`🚀  GraphQL server ready at ${port}`);
        });
    }
}

/** Export the express module */
export default new Server();
