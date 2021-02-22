const consola = require('consola');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function typeYourWords() {
  rl.question('Type here your question:', (answer) => {
    if (answer.length < 5) {
      consola.error(new Error(`Please try again, '${answer}' is too short...`));
      typeYourWords();
    } else {
      consola.success(`Your answer '${answer}' is valid!`);
      rl.close();     
    } 
  })
}

typeYourWords();