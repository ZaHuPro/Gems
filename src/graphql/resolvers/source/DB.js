import DB from '@providers/Database';

export default async function resyncDB() {
    await DB.reSync();
    return {
        success: true,
        msg: 'DB reSync has be done  Succesfull',
    };
}
