function notas(nota1, nota2){
    if((nota1+nota2)/2 >= 7){
        console.log("Aprovado")
    }else if((nota1+nota2)/2<7){
        console.log("Final")
    }else{
        console.log("Reprovado")
    }
}

const nota1 = 7
const nota2 = 7
console.log(notas(nota1,nota2))