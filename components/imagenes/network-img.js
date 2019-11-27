const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/:img', function(req, res) {
    res.sendFile(path.resolve(path.join(__dirname, `../../public/files/${req.params.img}`)));
})

module.exports = router;