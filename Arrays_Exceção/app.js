try{
    const listaProdutos = [
        "Pão",
        "Leite",
        "Cafe",
        "Laranja",
        "Macarrão",
        "Sabonete",
        "Detergente",
    ]
    
    const listaArg = process.argv.slice(2)
    
    const listaProdutosSoc = listaProdutos.filter(produto =>{
        return listaArg.find(argumento => argumento === produto)
    })
    
    listaProdutosSoc.forEach(produto => console.log(`Este produtos nos temos: ${produto}`))
    
    const listaProdutosNaoDisp = listaArg.filter(argumento => {
        return !listaProdutos.find(produto => produto === argumento)
    })
    listaProdutosNaoDisp.forEach(argumento=>console.log(`Este produto nos não temos: ${argumento}`))
    
    const listaOrdernada = listaProdutos.sort()
    listaOrdernada.forEach(produto => console.log(`Este produto esta disponivel: ${produto}`))
}catch(e){
    console.log("Não foi possivel executar o pedido de compra")
}
