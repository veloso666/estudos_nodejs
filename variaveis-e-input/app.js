const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let leitura;
readline.question("Digite algo: ", input =>{
    leitura = input;
    console.log(`o usuario digitou: ${leitura}`)
} );


