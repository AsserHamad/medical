const {AES, enc} = require('crypto-js');

exports.decryptIbsNo = (req, _, next) => {
    const encIbsNo = req.headers.ibsno.replace(/IBSNO/g, '/');
    console.log(encIbsNo)
    if(!encIbsNo)
        return next({message: 'Not an IBS Number', status: 400})
    const ibsNo = AES.decrypt(encIbsNo, process.env.DECRYPT_KEY).toString(enc.Utf8);
    if(/[0-9]+/.test(ibsNo)) {
        req.body.emp = ibsNo;
        next();
    } else
        next({message: 'Not an IBS Number', status: 400})
}