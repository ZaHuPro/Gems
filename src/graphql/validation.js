/**
 * Defines all the GraphQL Midware
 */

class Validation {
    process(app, args) {
        if (app.length > 0) {
            const errors = [];
            const ststus = false;
            app.map((body) => {
                if (body == 'email') {

                }
            });
        } else {
            return {
                error: 'No object found to validate !',
            };
        }
    }
}

export default Validation;
