const usoppPlay = {
    nome: 'usopp',
    força: Math.floor(Math.random()*  80 + 30) ,
    haki: Math.floor(Math.random()*  150 + 30) ,
    agilidade:Math.floor(Math.random()* 40 + 80) , 
}
const personagens = [
    
    {
        nome: 'ace',
        força: Math.floor(Math.random()*  40 + 10) ,
        haki: Math.floor(Math.random()*  100 + 30) ,
        agilidade:Math.floor(Math.random()* 60 + 40) , 
        profile: 'imagens/imagens/Ace_png.webp'
    },
    {
        nome: 'luffy',
        força: Math.floor(Math.random()*  40 + 10) ,
        haki: Math.floor(Math.random()*  100 + 30) ,
        agilidade:Math.floor(Math.random()* 60 + 40) , 
        profile: 'imagens/luffy(pós udon).webp'
    },
    {
        nome: 'nami',
        força: Math.floor(Math.random()*  40 + 55) ,
        haki: Math.floor(Math.random()*  80 + 50) ,
        agilidade:Math.floor(Math.random()* 40 + 50) , 
        profile: 'imagens/nami.png'
    }
];

const sortear = document.getElementById('sortear');
const primeiraTela = document.getElementById('firstScreen');
const segundaTela = document.getElementById('secondScreen');
const telaAposta = document.getElementById('telaAposta');
const terceiraTela = document.getElementById('thirdScreen');
let oponente = document.getElementById('oponente');
let profileOponent = document.getElementById('imagemOponente');
let profileOponent2 = document.getElementById('imagemOponente2');
let nomeOponent = document.getElementById('nomeOponente');
let nomeOponentRes = document.getElementById('nomeOponenteRes');
const  usopp = document.getElementById('usopp');
const apostaRandom = document.getElementById('apostaRandom');
const apostaDeafault = document.getElementById('apostaDefault'); 


document.querySelector('#sortear').addEventListener('click', function(){
    primeiraTela.style.display = 'none';
    segundaTela.style.display = 'flex';

    const randomOponentSort = Math.floor(Math.random() * personagens.length);
    const randomOponent = personagens[randomOponentSort];


    setTimeout(function(){
        segundaTela.style.display = 'none'
        telaAposta.style.display = 'flex'

        profileOponent.setAttribute ('src' , randomOponent.profile);
        nomeOponent.innerText = randomOponent.nome;

    }, 2500)

}) 







const paineis = document.querySelectorAll('.painel');



paineis.forEach((painel) => {
    painel.addEventListener('click', () => {
        removeActiveClass()
        painel.classList.add('active')
    })
})
function removeActiveClass(){
    paineis.forEach(painel => {
        painel.classList.remove('active')
    })
}

