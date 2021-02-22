const consola = require('consola');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Type here your question:', (answer) => {
  if (answer.length < 5) {
    consola.error(`Please try again, ${answer} is too short...`);
  } else {
    consola.success(`Your answer: ${answer}`);
    rl.close();
  } 
})



// Creare uno script node che chiede all'utente di inserire una frase di almeno 5 parole da riga di comando.
// Se la frase inserita ha meno di 5 parole viene stampato un messaggio di errore.
// Altrimenti viene stampato un messaggio di successo.

// Bonus (opzionale):
// Lo script deve continuare a chiedere all'utente di inserire la frase finché non viene inserita una frase valida.