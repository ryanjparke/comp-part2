module.exports = {
    getUser: function(req, res, next) {
        const db = req.app.get('db');
        const {username, password} = req.body;

        db.find_user([username, password]).then(res => {
            if(res) {
                req.session.user.username = username;
                req.session.user.password = password;
                res.status(200).send(res)
            } else {
                res.status(400).send("No user found")
            }
        })
    },
    postUser: function(req, res, next) {
        const db = req.app.get('db');
        const { username, password } = req.body
        const { session } = req

        db.create_user([username, password]).then(res => {
            session.user.username = res[0].username
            session.user.password = res[0].password
            res.status(200).send(res)
        })
    },
    logoutUser: function(req, res, next) {
        req.session.destory();
        res.status(200).send(req.session)
    },
    getAnimals: function(req, res, next) {
        const db = req.app.get('db')

        db.get_animals().then(res => {
            console.log(res)
            res.status(200).send(res)
        })
    },
    getSpecificAnimal: function(req, res, next) {
        const db = req.app.get('db')
        const animalId = req.params.id

        db.get_specific_animal([animalId]).then(res => {
            res.status(200).send(res)
        })
    },
    editAnimal: function(req, res, next) {
        const db = req.app.get('db')
        const {name, type, animalId} = req.body
        
        db.edit_animal([name, type, animalId]).then(res => {
            res.status(200).send(res)
        })
    },
    postAnimal: function(req, res, next) {
        const db = req.app.get('db');
        const{name, type} = req.body

        db.add_animal([name, type]).then(res => {
            res.status(200).send(res)
        })
    }
}