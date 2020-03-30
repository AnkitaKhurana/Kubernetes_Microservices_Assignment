const logger = require('../../logger');

let getCurrentUser = (req, res, next) => {
    logger.info('Extracting current user');

    logger.info('Returning user');
    return res.json({
        name: "John",
        age:"23",
        email: "john.doe@google.com"
    })
}


module.exports = {
    getCurrentUser
}