const listaArgs = process.argv.slice(2)

console.log('-----------------------executando um FOR---------------------------')
for(let cont = 0; cont <listaArgs.length ; cont++){
    console.log(`indice  ${cont} valor lido = ${listaArgs[cont]}`)
}

console.log('-----------------------executando um WHILE---------------------------')
let contW = 0;
while(contW < listaArgs.length){
    console.log(`indice  ${contW} valor lido = ${listaArgs[contW]}`)
    contW++;
}

console.log('-----------------------executando um DO WHILE---------------------------')
let contDo = 0
do{
    console.log(`indice  ${contDo} valor lido = ${listaArgs[contDo]}`)
        contDo++
}while(contDo < listaArgs.length)

console.log('-----------------------executando um FOR OF---------------------------')
let contFor = 0
for(const argumento of listaArgs){
    console.log(`indice  ${contFor} valor lido = ${argumento}`)
    contFor++;
}
