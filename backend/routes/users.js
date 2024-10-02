const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("User List")
});

router.get('/new', (req, res) => {
    res.send("New User Form")
})


router.post('/', (req, res) => { // create new user
    res.send("User created")
})

router
    .route("/:id")
    .get((req, res) => {
        res.send('Get User with ID ${req.params.id}')
    })



module.exports = router;