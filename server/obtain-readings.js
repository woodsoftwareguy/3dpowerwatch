//Read PrinterBot power
const execSync = require('child_process');

const child_process = require("child_process")
function systemSync(cmd){
  child_process.exec(cmd, (err, stdout, stderr) => {
    console.log('stdout is:' + stdout)
    console.log('stderr is:' + stderr)
    console.log('error is:' + err)
  }).on('exit', code => console.log('final exit code is', code))
}

function shellcmd(cmd) {

};

systemSync('printrbot_power');


//console.log(shellcmd('printrbot_power'));

//, { encoding: 'utf-8' });

 //   console.log('power: ' + pb_power);
