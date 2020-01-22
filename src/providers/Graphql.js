/**
 * Defines all the GraphQL Midware
 */
import * as apollo from 'apollo-server-express';
import Log from '../middlewares/Log';
import typeDefs from '../GraphQL/typeDefs';
import resolvers from '../GraphQL/resolver';

class GraphQL {
    static mount(app) {
        Log.info("Booting the 'GraphQL' middleware...");

        const server = new apollo.ApolloServer({
            typeDefs,
            resolvers,
            formatError: (err) => {
                Log.error(err.stack);
                // eslint-disable-next-line no-console
                console.log(err);
                return err;
            },
            context: (context) => ({
                requestIp: context.req.requestIp,
                pathname: context.req.pathname,
                query: context.req.query,
                useragent: context.req.useragent,
            }),
        });

        server.applyMiddleware({
            app,
        });

        console.log(
            `🚀Server ready at http://localhost:4040/${
                  server.graphqlPath
              }`)

        return app;
    }
}

export default GraphQL;
