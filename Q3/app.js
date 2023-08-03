const readline = require('readline');
const { getName } = require('./namebot');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUser() {
  rl.question('Please Enter Your City Name: ', (name) => {
    if (name.trim() === '') {
      console.log('City Name Cannot Be Empty. Please Try Again.');
      promptUser();
    } else {
      const nameData = getName(name);
      console.log(`Your City Name is ${nameData.name} !!`);
      rl.close();
    }
  });
}

console.log('Welcome To The City Name bot!');
promptUser();
