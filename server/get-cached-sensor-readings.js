    const getSensorReadings = require('./get-sensor-
    readings')

    /*
    Instantiate the cache. In this case its a simple variable 
    stored in local memory
    */
    const cache = 
      pb_power: null,
      ulti_power: null
    }

    /*
    Run a function to get the sensor readings every 5 seconds 
    (the same sampling rate as our sensor)
    */
    setInterval(() => {
      getSensorReadings((err, printerbot_power) => {
        if (err) {
          return console.error(err)
        }
        /*
        Set the values of the cache on receiving new readings
        */
        cache.pb_power= printerbot_power 
      })
    }, 5000)

    /*
    The functions that we expose only return the cached 
    values, and don't make a call to the sensors everytime
    */
    module.exports.getPbPower= () => cache.pb_power
