const personagens = [
    {
        nome: 'usopp',
        força: Math.floor(Math.random()*  80 + 30) ,
        haki: Math.floor(Math.random()*  150 + 30) ,
        agilidade:Math.floor(Math.random()* 40 + 80) , 
    },
    {
        nome: 'Luffy',
        força: Math.floor(Math.random()*  40 + 10) ,
        haki: Math.floor(Math.random()*  100 + 30) ,
        agilidade:Math.floor(Math.random()* 60 + 40) , 
    },
    {
        nome: 'nami',
        força: Math.floor(Math.random()*  40 + 55) ,
        haki: Math.floor(Math.random()*  80 + 50) ,
        agilidade:Math.floor(Math.random()* 40 + 50) , 
    }
];

const sortear = document.getElementById('sortear')
const primeiraTela = document.getElementById('firstScreen')
const segundaTela = document.getElementById('secondScreen')
const telaAposta = document.getElementById('telaAposta')
const terceiraTela = document.getElementById('thirdSecond')

document.querySelector('#sortear').addEventListener('click', function(){
    primeiraTela.style.display = 'none';
    segundaTela.style.display = 'flex'
    setTimeout(function(){
        segundaTela.style.display = 'none'
        telaAposta.style.display = 'flex'
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

