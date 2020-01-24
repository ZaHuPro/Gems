// /**
//  * Defines all the GraphQL Midware
//  */
// import { ApolloEngine } from 'apollo-engine';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import Log from '../middlewares/Log';
import typeDefs from '../graphql/typeDefs';
import resolvers from '../graphql/resolver';
import context from '../graphql/context';
// import Locals from './Locals';

global.fetch = require('node-fetch');

class GraphQL {
    static mount(app) {
        Log.info("Booting the 'GraphQL' middleware...");

        const schema = makeExecutableSchema({
            typeDefs,
            resolvers,
            resolverValidationOptions: { requireResolversForResolveType: false },
        });

        const options = {
            schema,
            // Enable debug regardless of NODE_ENV value in order to include stack traces in errors.
            debug: true,
            // Error handler that writes to the server logs.
            formatError: (err) => {
                // eslint-disable-next-line no-console
                console.log('ERROR:', JSON.stringify(err, null, 4));
                Log.error(JSON.stringify(err, null, 4));
                return err;
            },
            context,
            // eslint-disable-next-line max-len
            // Always enable GraphQL playground and schema introspection, regardless of NODE_ENV value.
            introspection: true,
            playground: true,
            tracing: true,
            cacheControl: true,
            // We set `engine` to false, so that the new agent is not used.
            engine: false,
        };

        // const API_KEY = Locals.config().engineKey;
        // if (typeof API_KEY !== "undefined") {
        // options.engine = {
        //   apiKey: API_KEY,
        //   schemaTag: 'development',
        //   generateClientInfo: ({ request }) => {
        //     const headers = request.http && request.http.headers;
        //     if (headers) {
        //       return {
        //         clientName: headers["apollo-client-name"],
        //         clientVersion: headers["apollo-client-version"]
        //       };
        //     }
        //     return {
        //       clientName: "Unknown Client",
        //       clientVersion: "Unversioned"
        //     };
        //   }
        // };
        //       }

        const server = new ApolloServer(options);
        server.applyMiddleware({ app });
        // return new ApolloEngine({
        //     apiKey: API_KEY,
        // });
        return app;
    }
}

export default GraphQL;
