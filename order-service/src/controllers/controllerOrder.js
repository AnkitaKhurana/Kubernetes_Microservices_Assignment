const logger = require('../../logger');

let getCurrentUserOrder = (req, res, next) => {
    logger.info('Extracting current user order');
    logger.info('Returning current user order');
    return res.json([
        {
            orderId : 1,
            orderAmount : 250,
            orderDate : "14-Apr-2020"
        }, 
        {
            orderId : 2,
            orderAmount : 450,
            orderDate : "15-Apr-2020"
        }
    ]);
}


module.exports = {
    getCurrentUserOrder
}