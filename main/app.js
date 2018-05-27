'use strict';

const express    = require('express');        
const app        = express();                
const bodyParser = require('body-parser');
const logger 	   = require('morgan');
const router 	   = express.Router();
//const port 	   = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use(bodyParser.json());
app.use(logger('dev'));
console.log("router"+router);

require('./routes')(router);
app.use('/api/v1', router);

app.listen(port,ip);

console.log(`flashmob App is Running on port`,port);
console.log(`flashmob App is Running on ip`,ip);
console.log(`flashmob App is Running on ${port} ${ip} `);