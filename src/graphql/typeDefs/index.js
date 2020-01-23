import path from 'path';
import fs from 'fs';
import Locals from '../../providers/Locals';

const modelDirectory = path.join(Locals.config().root, '/src/graphql/typeDefs');

fs.readdirSync(modelDirectory)
    .filter((file) => (
        file.indexOf('.') !== 0
  && file.slice(-3) === '.js'
    ))
    .forEach((file) => {
        const model = sequelize.import(path.join(modelDirectory, file));
        db[path.parse(file).name] = model;
    });
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
