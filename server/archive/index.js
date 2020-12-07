    const express = require('express')
    const app = express()

    const getSensorReadings = require('./get-sensor-
    readings')

    const cache =
	pb_power: null,
        ulti_power: null,
        repli_power: null,
        maker_power: null,
        end_1_power: null,
        end_2_power: null,
        end_3_power: null,
        end_4_power: null,
        raise_power: null
    } 

    /* Get sensor readings every 5 seconds, probably make this longer after dev over
     */
    setIntervale(() => {

    app.get('/pbpower', function (req, res) {
      getSensorReadings((err, pbpower) => {
        if (!err) {
          res.send(pbpower)
        }
      })
    })

    app.listen(3000, function () {
      console.log('Server listening on port 3000')
    })
