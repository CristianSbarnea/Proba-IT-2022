const express = require('express');
const router = express.Router();
const User = require('../entities/User');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');  // imaginile incarcate merg in folderul uploads
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);  // numele imaginilor
    }
});

var upload = multer({
    storage: storage,
}).single();  // incarcarea unei imagini odata

router.post('/add', upload, (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        
    })
})

// ruta catre home page
router.get('/', (req, res) => {
    res.send("Home Page");
})

// ruta catre useri
router.get('/users', (req, res) => {
    res.send("All users");
})

module.exports = router;