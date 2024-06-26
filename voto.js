let resposta = document.getElementById('resposta')
console.log(resposta)

function verVoto(){
    // Entrada de dados
    let nome = document.getElementById('nome').value
    let idade = Number (document.getElementById('idade').value)

    console.log(nome)
    console.log(idade)

    // Processamento das informações

    if((idade >= 0) && (idade < 16)){
        resposta.innerHTML = nome+ ', você ainda não pode votar!' + '<br>'
    }
    else if((idade >= 16) && (idade < 18)){
        resposta.innerHTML = nome+ ', seu voto é facultativo!' + '<br>'
    }
    else if((idade >= 18) && (idade < 70)){
        resposta.innerHTML = nome+ ', seu voto é obrigatório!' + '<br>'
    }
    else if(idade >= 70){
        resposta.innerHTML = nome+ ', seu voto é facultativo!' + '<br>'
    }
    else{
        resposta.innerHTML = nome+ ', você digitou um valor inválido. Digite sua idade novamente!' + '<br>'
    }

    resposta.innerHTML += 'Pois sua idade é: ' + idade + ' anos!'
    
    // Estilo da Resposta
    resposta.style.fontSize = "2.5rem"
    resposta.style.color= "black"
    resposta.style.fontFamily = "Montserrat"
    resposta.style.transition = "5s"
    resposta.style.backgroundColor = "aliceblue"
    resposta.style.width = "15rem"
    resposta.style.borderRadius = "5px"
    resposta.style.border = "solid black 3px"
    resposta.style.padding = "2rem"
}