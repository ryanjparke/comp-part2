require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive'),
      ctrl = require('./controllers/controller'),
      checkSession = require('./middlewares/checkForSession'),
      session = require('express-session');


      const app = express();

      app.use(bodyParser).json());


      //Endpoints





      //Listener
      const PORT = 3005;
      app.listen(PORT, () => console.log(`Gotcha on port ${PORT}`));

