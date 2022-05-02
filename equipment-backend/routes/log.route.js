const router = require('express').Router();
router.all('/*', (req, res, next) => {
    const method = req.method;
    const referrer = req.get('Referer');
    let log = `${method} ${referrer}`;
    if (req.body) {
        log += ` ${JSON.stringify(req.body)}`;
    }
    console.log(log);
    next();
});

module.exports = router;