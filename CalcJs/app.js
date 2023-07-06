const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
function ValidarNumero(numero){
    try{
        return Number.parseFloat(numero)
    }catch(e){
        console.log("Numero informado invalido")
    }
   }
   function validarOperador(operador){
   switch(operador){
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
        return operador
    default:
        console.log("Operador informado é invalido")     
   }
   }
readline.question("Digite um numero: ", (Number1)=>{
      const numeroValidado1 = ValidarNumero(Number1)
      if(numeroValidado1){
        readline.question("Informe outro numero: ", (Number2)=>{
            const numeroValidado2 = ValidarNumero(Number2)
            if(numeroValidado2){
                readline.question("Digite qual operação voce quer fazer(1:soma/2:subtração/3:divisão/4:multiplicação): ", (op)=>{
                    const operadorValido = validarOperador(op)
                    if(operadorValido){
                       switch(operadorValido){
                        case "+": console.log(`${numeroValidado1 + numeroValidado2}`)
                        break
                        case "-": console.log(`${numeroValidado1 - numeroValidado2}`)
                        break
                        case "*": console.log(`${numeroValidado1 * numeroValidado2}`)
                        break
                        case "/": console.log(`${numeroValidado1 / numeroValidado2}`)
                        break
                        case "%": console.log(`${numeroValidado1 % numeroValidado2}`)
                        break
                        default:
                            console.log("Erro, operador n existe")

                       }
                    }
                })
            }
        })
      }
})