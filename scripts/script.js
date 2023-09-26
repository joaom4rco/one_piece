import {personagens} from './personagens'

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