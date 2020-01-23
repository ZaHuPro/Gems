/* eslint-disable import/named */
import { Router } from 'express';
import Web3 from 'web3';

const router = Router();

router.get('/', (req, res) => {
    const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');
    res.json({
        sdsd: 'ddsdsd',
    });
    res.end();
});


export default router;
