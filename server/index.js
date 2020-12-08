    const path = require('path');
    const express = require('express');
    const app = express();
    const getCachedSensorReadings = require('./get-cached-sensor-readings');

    /*
    We now utilize the synchronous methods exported from the 
    'get-cached-sensor-readings' module
    */

    app.get('/pbpower', function (req, res) {
        res.send('<strong>' + getCachedSensorReadings.getPbPower()
                 + '<\strong>' + 'Watts' )
    })

    // Register Middlewares/Headers
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        next();
    });
/*
    app.get('/public', function (req, res) {
        res.sendFile(path.join(__dirname, './index.html'))
    })
*/
    app.use('/public', express.static( path.join(__dirname + "/public") ))
    //app.use('/public', express.static('public'))

    app.listen(3000, function () {
      console.log('Server 3dPowerWatch listening on port 3000')
    })
