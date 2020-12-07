    const child_process = require("child_process")

    /*
    We abstract away the functionality to read sensor    
    information inside the getSensorReadings function.
    This function is also asynchronous. It accepts a callback  
    function as an argument.
    */
    function systemSync(cmd){
      child_process.exec(cmd, (err, stdout, stderr) => {
        console.log('stdout is:' + stdout)
        console.log('stderr is:' + stderr)
        console.log('error is:' + err)
      }).on('exit', code => console.log('final exit code is', code))
    ;}

    const getSensorReadings = (callback) => {
       child_process.exec('printrbot_power', (err, stdout, stderr) => {
         if (err) {
           /*
           If there is an error, call the callback function with the error as its first argument
           */
           return callback(err)
         }
         /*
         If everything went well, call the callback with 
    	"null" as the first argument to indicate that there was no error.
         The second and third arguments would be the results 
    	(temperature and humidity respectively)
         */
         callback(null, stdout)
       })
    }

    /*
    Finally, export the function so that it can be used by 
    other parts of our code
    */
    module.exports = getSensorReadings
