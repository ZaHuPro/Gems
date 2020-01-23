// /**
//  * Defines all the GraphQL Midware
//  */
import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import Log from './Log';
import typeDefs from '../graphql/typeDefs';
import resolvers from '../graphql/resolver';
import context from '../graphql/context';
import Locals from './Locals';

global.fetch = require('node-fetch');

class GraphQL {
    static mount() {
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
        };

        const API_KEY = Locals.config().appSecret;
        if (typeof API_KEY !== 'undefined') {
            options.engine = {
                apiKey: API_KEY,
                generateClientInfo: ({ request }) => {
                    const headers = request.http && request.http.headers;
                    if (headers) {
                        return {
                            clientName: headers['apollo-client-name'],
                            clientVersion: headers['apollo-client-version'],
                        };
                    }
                    return {
                        clientName: 'Unknown Client',
                        clientVersion: 'Unversioned',
                    };
                },
            };
        }

        return new ApolloServer(options);
    }
}

export default GraphQL;
