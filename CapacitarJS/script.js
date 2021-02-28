function cincoItens(){

    var imagem_background = document.getElementById('image_background')
    var texto = document.getElementById('texto')
    var botao = document.getElementsByClassName('botao')

    imagem_background.src = "#"
    texto.innerHTML = "eu acho tambem"
    botao.innerHTML = "Aperte novamente" 
    armazenaInformacao()
}

function armazenaInformacao(){
    var nome = ["", "", "", "", ""]
    var descricao = ["", "", "", "", ""]
    var imagem = ["", "", "", "", ""]
    var acompanhamentos = [["", "", "",], ["", "", "",],["", "", "",], ["", "", "",], ["", "", "",]]
    
    var informacao = new Object()
    informacao.acompanhamento = [3]
    


   for(var i=0; i<5; i++){
        informacao = geraInformacao()
        nome[i] = informacao.nome 
        descricao[i] = informacao.descricao
        imagem[i] = informacao.imagem
        console.log(String(nome[0]))
        console.log(String(imagem[0]))
        console.log(descricao[0])
    }

}

function geraInformacao() {
    var informacao = new Object()
    informacao.nome = "inicial"
    informacao.descricao = "inicial"
    informacao.acompanhamento = [3]
    informacao.imagem = "inicial"
    //nome, descrição, Excelente para conpanhar.

    document.addEventListener('DOMContentLoaded', () => {
        fetch('https://api.punkapi.com/v2/beers/random')
            .then(response => {
                return response.json()
            })
            
            .then(data => {
                console.log(data)
    
                informacao.nome = data[0].name
                informacao.descricao = data[0].description
                informacao.acompanhamento[0] = data[0].food_pairing[0]
                informacao.acompanhamento[1] = data[0].food_pairing[1]
                informacao.acompanhamento[2] = data[0].food_pairing[2]
                informacao.imagem = data[0].image_url
                console.log(informacao.nome)
            })
    })

    return informacao

}