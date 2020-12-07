    console.log('Hello World!');
const execSync = require('child_process').execSync
const pb_power = execSync('printrbot_power', { encoding: 'utf-8' });
console.log(pb_power);
