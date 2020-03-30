const axios = require('axios');
const logger = require('../../logger');
const sourceOrder = process.env.ORDER_URL||"http://localhost:3002";
const sourceUser = process.env.USER_URL||"http://localhost:3001";

async function findOrderDetails(userId) {
    return axios({
        method: 'get',
        url: sourceOrder+'/orders/' + userId

    });
}

async function findUserDetails(userId) {
    return axios({
        method: 'get',
        url: sourceUser +'/user/' + userId
    });

}

let getCurrentOrder = (req, res, next) => {
    logger.info('Extracting current user');

    findUserDetails(req.params['id']).then(user => {
        if (!user) {
            logger.info('No Data from user service');
            return res.sendStatus(404);
        }
        else {
            findOrderDetails(req.params['id']).then(orders => {
                if (!orders) {
                    logger.info('No Data from order service');
                    return res.sendStatus(404);
                }
                else {
                    user = JSON.stringify(user.data);
                    orders = JSON.stringify(orders.data);
                    logger.info('Returning order');
                    return res.json(
                        JSON.parse("{ \"user\": " + user + ', \"orders\": ' + orders + "}")
                    );
                }
            })

        }

    }).catch(err=>{
        console.log(err)
        logger.error(err); 
    });
}


module.exports = {
    getCurrentOrder
}