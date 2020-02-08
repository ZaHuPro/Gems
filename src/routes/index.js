/* eslint-disable prefer-destructuring */
/* eslint-disable import/named */
import { Router } from 'express';
import DB from '../providers/Database';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Gems',
    });
    res.end();
});

router.get('/db_refresh', async (req, res) => {
    await DB.reSync();
    res.json({
        message: 'DB reSync success',
    });
    res.end();
});


export default router;
