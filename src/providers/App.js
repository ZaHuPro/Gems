import * as path from 'path';
import * as dotenv from 'dotenv';

import Server from './Server';
import Log from './Log';
import DB from './Database';

class App {
    // Clear the console
    static clearConsole() {
        process.stdout.write('\x1B[2J\x1B[0f');
    }

    // Loads your dotenv file
    static loadConfiguration() {
        Log.info('Configuration :: Booting');
        dotenv.config({ path: path.join(__dirname, '../../.env') });
    }

    // Loads the DB Pool
    static loadDatabase() {
        Log.info('DB :: Booting @ Master...');
        DB.init();
    }

    // Loads Express Server
    static loadServer() {
        Log.info('Server :: Booting...');
        return Server.init();
    }
}

export default App;
