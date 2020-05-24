const getRoutes = (req, res, next) => {
    req.app
        .get('db')
        .get_routes()
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err))
};

module.exports = {
    getRoutes
};