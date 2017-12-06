require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive'),
      ctrl = require('./controllers/controller'),
      checkForSession = require('./Middlewares/checkForSession'),
      session = require('express-session');


      const app = express();
      app.use(bodyParser.json());


      app.use(session({
            secret: process.env.SECRET, //real secret is in .env file
            resave: false,
            saveUninitialized: true
      }));

      app.use(cors());
      app.use(checkForSession)


      massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))

      //Auth
      app.post('./api/auth/login', ctrl.getUser)
      app.post('./api/auth/register', ctrl.postUser)
      app.post('./api/auth/logout', ctrl.logoutUser)


      //Animal Endpoints
      app.get('/api/animals', ctrl.getAnimals)
      app.get('./api/animal/:id', ctrl.getSpecificAnimal)
      app.put('api/animal', ctrl.editAnimal)
      app.post('./api/animal', ctrl.postAnimal)
      app.delete('./deleteanimal/,:id', ctrl.deleteAnimal)


      //Listener port
      const PORT = 3005;
      app.listen(PORT, () => console.log(`Gotcha on port ${PORT}`));

