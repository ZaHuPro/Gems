/* eslint-disable prefer-destructuring */
/* eslint-disable import/named */
import { Router } from 'express';
// import Web3 from 'web3';
// import luckyDraw from '../../build/contracts/LuckyDraw.json';

const router = Router();

router.get('/', (req, res) => {
    // const web3 = new Web3(Web3.currentProvider || 'ws://localhost:7545');
    // web3.eth.defaultAccount = web3.eth.accounts[0];
    // let acc = web3.eth.defaultAccount;
    // web3.eth.getAccounts(console.log);
    // res.json({
    //     // pro: web3.currentProvider,
    //     // sdsd: 'ddsdsd',
    //     // defaultAccount: acc
    //     //luckyDraw: luckyDraw.abi,
    //     //networks: luckyDraw.networks['5777'].address,
    // });
    // res.end();

    res.render('home', {
        layout: 'main', template: 'home',
    });
});


export default router;
