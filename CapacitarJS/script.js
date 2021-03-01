    fetch('https://api.punkapi.com/v2/beers?page=2&per_page=80')
        .then(response => {
            return response.json()
        })
        
        .then(data => {
            informacao = new Object()
            informacao.nome = [5]
            informacao.acompanhamento = [["", "", "",], ["", "", "",],["", "", "",], ["", "", "",], ["", "", "",]]
            informacao.descricao =[5]
            informacao.imagem = [5]
            //nome, descrição, Excelente para conpanhar.
            for (let i = 0; i < 5; i++) {
                let num = Math.floor(Math.random() * 80 + 1)
            
            informacao.nome[i] = data[num].name
            informacao.descricao[i] = data[num].description
            informacao.acompanhamento[i][0] = data[num].food_pairing[0]
            informacao.acompanhamento[i][1] = data[num].food_pairing[1]
            informacao.acompanhamento[i][2] = data[num].food_pairing[2]
            informacao.imagem[i] = data[num].image_url
            console.log(informacao.nome[i])
        }
    })


function cincoItens(){
    var imagem_background = document.getElementById('image_background')
    var texto = document.getElementById('texto')
    var botao = document.getElementsByClassName('botao')
    var home = document.getElementById('home')
    
    
    home.innerHTML = "HOME"
    home.style.marginTop = '15px'
    texto.innerHTML = ""
    imagem_background.style.height =0
    texto.style.padding = 0
    texto.style.margin= 0
    botao[0].style.marginTop = '30px'
    botao[0].style.marginRight = '25px'
    botao[0].style.marginLeft = '25px'
    botao[1].style.marginTop = '30px'
    botao[1].style.marginRight = '25px'
    botao[1].style.marginLeft = '25px'
    alteraCSS()
    armazenaAsInformacoes()

}

function armazenaAsInformacoes(){
    var nome = document.getElementById("nome1")
    var imagem = document.getElementById("ilustracao1")
    var descricao = document.getElementById("descricao1")
    var acompanhamento1 = document.getElementById("acompanhamento1.1")
    var acompanhamento2 = document.getElementById("acompanhamento2.1")
    var acompanhamento3 = document.getElementById("acompanhamento3.1")
    var referencial = 0
    
    function colocaAsInformacoes(){

        nome.innerHTML = informacao.nome[referencial]
        imagem.src = informacao.imagem[referencial]
        acompanhamento1.innerHTML = informacao.acompanhamento[referencial][0]
        acompanhamento2.innerHTML = informacao.acompanhamento[referencial][1]
        acompanhamento3.innerHTML = informacao.acompanhamento[referencial][2]
        descricao.innerHTML = informacao.descricao[referencial]
        referencial++
        
        console.log(referencial)
    }

    colocaAsInformacoes()

    nome = document.getElementById("nome2")
    imagem = document.getElementById("ilustracao2")
    descricao = document.getElementById("descricao2")
    acompanhamento1 = document.getElementById("acompanhamento1.2")
    acompanhamento2 = document.getElementById("acompanhamento2.2")
    acompanhamento3 = document.getElementById("acompanhamento3.2")
    colocaAsInformacoes()

    nome = document.getElementById("nome3")
    imagem = document.getElementById("ilustracao3")
    descricao = document.getElementById("descricao3")
    acompanhamento1 = document.getElementById("acompanhamento1.3")
    acompanhamento2 = document.getElementById("acompanhamento2.3")
    acompanhamento3 = document.getElementById("acompanhamento3.3")
    colocaAsInformacoes()

    nome = document.getElementById("nome4")
    imagem = document.getElementById("ilustracao4")
    descricao = document.getElementById("descricao4")
    acompanhamento1 = document.getElementById("acompanhamento1.4")
    acompanhamento2 = document.getElementById("acompanhamento2.4")
    acompanhamento3 = document.getElementById("acompanhamento3.4")
    colocaAsInformacoes()

    nome = document.getElementById("nome5")
    imagem = document.getElementById("ilustracao5")
    descricao = document.getElementById("descricao5")
    acompanhamento1 = document.getElementById("acompanhamento1.5")
    acompanhamento2 = document.getElementById("acompanhamento2.5")
    acompanhamento3 = document.getElementById("acompanhamento3.5")
    colocaAsInformacoes()
}

function alteraCSS(){
    var alturaIndividual = document.getElementsByClassName('cerveja_individual')
    var colunas = document.getElementsByClassName('tres_primeiras')

    colunas[0].style.height = 'auto'
    for(var i =0; i<5; i++){
        alturaIndividual[i].style.height = 'auto'
        alturaIndividual[i].style.width = '90%'
        alturaIndividual[i].style.borderStyle ='solid'
    }
}

function home(){
    var imagem_background = document.getElementById('image_background')
    var texto = document.getElementById('texto')
    var botao = document.getElementsByClassName('botao')
    var home = document.getElementById('home')
    
    var alturaIndividual = document.getElementsByClassName('cerveja_individual')
    var colunas = document.getElementsByClassName('tres_primeiras')

    colunas[0].style.height = 0
    for(var i =0; i<5; i++){
        alturaIndividual[i].style.height = '0'
        alturaIndividual[i].style.width = '0'
        alturaIndividual[i].style.borderStyle ='none'
    }

    limpaTela()

    home.innerHTML = ""
    home.style.marginTop = 0
    imagem_background.style.height = "-webkit-fill-available"
    texto.innerHTML = "Aperte no botão a seguir para receber detalhes sobre cervejas específicas."
    texto.style.paddingTop= "290px"
    texto.style.marginTop = '25px'
    texto.style.marginBottom = '25px'
    botao[0].style.margin = 0
    botao[0].style.border = '2px'
    botao[1].style.margin = 0
    botao[1].style.marginborder = '2px'
    
}

function limpaTela(){
    var nome = document.getElementById("nome1")
    var imagem = document.getElementById("ilustracao1")
    var descricao = document.getElementById("descricao1")
    var acompanhamento1 = document.getElementById("acompanhamento1.1")
    var acompanhamento2 = document.getElementById("acompanhamento2.1")
    var acompanhamento3 = document.getElementById("acompanhamento3.1")
    var referencial = 0

    function colocaAsInformacoes(){

        nome.innerHTML = ""
        imagem.src = ""
        acompanhamento1.innerHTML = ""
        acompanhamento2.innerHTML = ""
        acompanhamento3.innerHTML = ""
        descricao.innerHTML = ""
        referencial++
        
        console.log(referencial)
    }

    colocaAsInformacoes()

    nome = document.getElementById("nome2")
    imagem = document.getElementById("ilustracao2")
    descricao = document.getElementById("descricao2")
    acompanhamento1 = document.getElementById("acompanhamento1.2")
    acompanhamento2 = document.getElementById("acompanhamento2.2")
    acompanhamento3 = document.getElementById("acompanhamento3.2")
    colocaAsInformacoes()

    nome = document.getElementById("nome3")
    imagem = document.getElementById("ilustracao3")
    descricao = document.getElementById("descricao3")
    acompanhamento1 = document.getElementById("acompanhamento1.3")
    acompanhamento2 = document.getElementById("acompanhamento2.3")
    acompanhamento3 = document.getElementById("acompanhamento3.3")
    colocaAsInformacoes()

    nome = document.getElementById("nome4")
    imagem = document.getElementById("ilustracao4")
    descricao = document.getElementById("descricao4")
    acompanhamento1 = document.getElementById("acompanhamento1.4")
    acompanhamento2 = document.getElementById("acompanhamento2.4")
    acompanhamento3 = document.getElementById("acompanhamento3.4")
    colocaAsInformacoes()

    nome = document.getElementById("nome5")
    imagem = document.getElementById("ilustracao5")
    descricao = document.getElementById("descricao5")
    acompanhamento1 = document.getElementById("acompanhamento1.5")
    acompanhamento2 = document.getElementById("acompanhamento2.5")
    acompanhamento3 = document.getElementById("acompanhamento3.5")
    colocaAsInformacoes()

}

function cadastro(){
    window.prompt('Cadastre seu e-mal, para receber as novidades')

}
