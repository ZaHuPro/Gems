/* eslint-disable no-console */
/**
 * Primary file for your Clustered API Server
 */

import express from 'express';

import Log from '../middlewares/Log';
import Locals from './Locals';
import GraphQL from './Graphql';
import Bootstrap from '../middlewares/Kernel';
import ExceptionHandler from '../middlewares/Handler';

class Express {
    /**
   * Initializes the express server
   */
    constructor() {
        this.express = express();
        this.mountMiddlewares();
        this.mountGraphQL();
    }

    /**
   * Mounts all the defined middlewares
   */
    mountMiddlewares() {
        this.express = Bootstrap.init(this.express);
    }

    /**
   * Mount GraphQL
   */
    mountGraphQL() {
        this.express = GraphQL.mount(this.express);
    }

    /**
   * Starts the express server
   */
    init() {
        const { port } = Locals.config();

        this.express = ExceptionHandler.notFoundHandler(this.express);
        // Registering Exception / Error Handlers
        this.express.use(ExceptionHandler.logErrors);
        this.express.use(ExceptionHandler.clientErrorHandler);
        this.express.use(ExceptionHandler.errorHandler);

        // Start the server on the specified port
        this.express.listen(port, (_error) => {
            if (_error) {
                Log.error(_error);
                return console.log('Error: ', _error);
            }
            Log.info(`Server :: Running @ ${port}`);
            console.log(
                '\x1b[33m%s\x1b[0m',
                `Server :: Running @ 'http://localhost:${port}'`,
            );
            return this.express;
        });
    }
}

/** Export the express module */
export default new Express();
