/* eslint-disable prefer-destructuring */
/* eslint-disable import/named */
import { Router } from 'express';

const sgMail = require('@sendgrid/mail');
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

    sgMail.setApiKey('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');
    const msg = {
        to: 'itsjakirhussain@gmail.com',
        from: {
            email: 'hr@auctionsoftware.com',
            name: 'Sankara S',
        },
        subject: 'Resignation Acceptance',
        html: `<div id=":sv" class="a3s aXjCH "><div dir="ltr"><div dir="ltr">Hi Mr Jakir Hussain,<div>&nbsp;</div><div>Based on your resignation dated 3rd December 2019, your resignation was accepted based on our communications happened.</div><div>&nbsp;</div><div>Please come to office in person to collect your rectified relieving documents.</div><div>&nbsp;</div><div><div>Thanks,</div><div>Shankar.</div><div><br clear="all" /><div><div dir="ltr"><div dir="ltr"><div dir="ltr">Warm Regards,<div><strong style="color: #000000; font-family: 'comic sans ms',sans-serif; font-size: large;">Sankara Sababathi. S</strong></div><div><span style="font-family: comic sans ms, sans-serif; font-size: large;">HR Manager</span></div><div><strong style="font-family: 'comic sans ms',sans-serif;"><span style="background-color: #351c75; color: #f3f3f3;">Developscripts LLC</span></strong><br style="color: #a64d79; font-family: 'comic sans ms',sans-serif;" /><span style="font-family: comic sans ms, sans-serif;"><span style="color: #a64d79;">#</span></span><span style="color: #e06666; font-family: 'comic sans ms',sans-serif;">108, 2nd Floor, 1st Cross Street,</span></div><div><span style="color: #e06666; font-family: 'comic sans ms',sans-serif;">Shanthi Nagar, Chromepet,</span></div><div><span style="color: #e06666; font-family: 'comic sans ms',sans-serif;">Chennai - 600 044.</span></div></div></div></div></div></div></div></div></div></div>`,
    };
    sgMail.send(msg);

    res.render('home', {
        layout: 'main', template: 'home',
    });
});


export default router;
