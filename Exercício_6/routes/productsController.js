module.exports = {
    get(_, res) {
        res.json({ title: 'Products page' });
    },
    getById(req, res) {
        if (!req.params.id) {
            res.json({ error: 'Should receive an id' })
        }

        res.json({ success: 'Id received!' })
    }
};
