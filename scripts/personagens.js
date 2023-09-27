const kaidouPlay = {
    nome: "kaidou",
    forca: Math.floor(Math.random() * 140  + 35),
    agilidade: Math.floor(Math.random() * 120 + 35),
    resistencia: Math.floor(Math.random() * 132 + 35),
    profile: 'imagens/Kaido_29.webp',
}
const personagens = [    
    {
        nome: "Luffy",
        forca: Math.floor(Math.random() * 95 + 20),
        agilidade: Math.floor(Math.random() * 85 + 20),
        resistencia: Math.floor(Math.random() * 100 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1063598024951083030/1065415056147361832/luffy.png',
    },
    {
        nome: "Chopper",
        forca: Math.floor(Math.random() * 70 + 5),
        agilidade: Math.floor(Math.random() * 85 + 25),
        resistencia: Math.floor(Math.random() * 65 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1063598024951083030/1065415055891497151/chopper.png',
    },
    {
        nome: "Ace",
        forca: Math.floor(Math.random() * 85 + 15),
        agilidade: Math.floor(Math.random() * 100 + 30),
        resistencia: Math.floor(Math.random() * 75 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476113989644292/asce.png',
    },
    {
        nome: "Barba Branca",
        forca: Math.floor(Math.random() * 140 + 35),
        agilidade: Math.floor(Math.random() * 100 + 35),
        resistencia: Math.floor(Math.random() * 105 + 45),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476114291638393/Barba_Branca.png',
    },
    {
        nome: "Boa Hancock",
        forca: Math.floor(Math.random() * 70 + 25),
        agilidade: Math.floor(Math.random() * 75 + 25),
        resistencia: Math.floor(Math.random() * 55 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476114581041172/Boa_.png',
    },
    {
        nome: "Kizaru",
        forca: Math.floor(Math.random() * 115 + 35),
        agilidade: Math.floor(Math.random() * 145 + 45),
        resistencia: Math.floor(Math.random() * 125 + 30),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476114895605850/Borsalinoo.png',
    },
    {
        nome: "Doflamingo",
        forca: Math.floor(Math.random() * 100 + 25),
        agilidade: Math.floor(Math.random() * 100 + 35),
        resistencia: Math.floor(Math.random() * 75 +45),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476115231158292/Don_Flamino.png',
    },
    {
        nome: "Franky",
        forca: Math.floor(Math.random() * 70 + 25),
        agilidade: Math.floor(Math.random() * 75 + 25),
        resistencia: Math.floor(Math.random() * 90 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476115499597875/frank.png',
    },
    {
        nome: "Luffy Gear 5",
        forca: Math.floor(Math.random() * 120 + 40),
        agilidade: Math.floor(Math.random() * 115 + 35),
        resistencia: Math.floor(Math.random() * 118 + 55),
        profile: 'imagens/luffy_gear_51.png',
    },
    {
        nome: "Mihawk",
        forca: Math.floor(Math.random() * 110 + 35),
        agilidade: Math.floor(Math.random() * 130 + 35),
        resistencia: Math.floor(Math.random() * 105 + 35),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476116070023198/mi_hawk.png',
    },
    {
        nome: "Nami",
        forca: Math.floor(Math.random() * 30 + 25),
        agilidade: Math.floor(Math.random() * 30 + 25),
        resistencia: Math.floor(Math.random() * 30 + 25),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476116317474896/Nami.png',
    },
    {
        nome: "kuzan",
        forca: Math.floor(Math.random() * 110 +25),
        agilidade: Math.floor(Math.random() * 130 + 25),
        resistencia: Math.floor(Math.random() * 100 + 35),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476116619473017/pngegg.png',
    },
    {
        nome: "Robin",
        forca: Math.floor(Math.random() * 90 + 20),
        agilidade: Math.floor(Math.random() * 70 + 25),
        resistencia: Math.floor(Math.random() * 60 + 45),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476171829096478/Robin.png',
    },
    {
        nome: "sanji",
        forca: Math.floor(Math.random() * 100 + 20),
        agilidade: Math.floor(Math.random() * 110 + 25),
        resistencia: Math.floor(Math.random() * 115 + 45),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476172340805722/sanji.png',
    },
    {
        nome: "Shanks",
        forca: Math.floor(Math.random() * 130 + 25),
        agilidade: Math.floor(Math.random() * 122 + 35),
        resistencia: Math.floor(Math.random() * 170 + 45),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476172709900288/Shanks.png',
    },
    {
        nome: "Smoke",
        forca: Math.floor(Math.random() * 80 + 40),
        agilidade: Math.floor(Math.random() * 100 + 35),
        resistencia: Math.floor(Math.random() * 75 + 45),
        profile: 'https://cdn.discordapp.com/attachments/1065475855498891344/1065476173083189459/smoke.png',
    },
    {
        nome: "Deus Usopp",
        forca: Math.floor(Math.random() * 170 +25),
        agilidade: Math.floor(Math.random() * 170 + 35),
        resistencia: Math.floor(Math.random() * 170 + 25),
        profile: 'imagens/usopp-modoDeus.png',
    },
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
const  Kaidou = document.getElementById('Kaidou');
const apostaRandom = document.getElementById('apostaRandom');
const apostaDeafault = document.getElementById('apostaDefault');
let forcaOponente = document.getElementById('forcaOponente');
let agilidadeOponente = document.getElementById('agilidadeOponente');
let resistenciaOponente = document.getElementById('resistenciaOponente');
let forcaKaidou = document.getElementById('forcaKaidou');
let agilidadekaidou = document.getElementById('agilidadeKaidou');
let resistenciaKaidou = document.getElementById('resistenciaKaidou');
const resultado = document.getElementById('resultado');
const restart = document.getElementById('restart');

document.querySelector('#sortear').addEventListener('click', function(){
    primeiraTela.style.display = 'none';
    segundaTela.style.display = 'flex';

    const randomOponentSort = Math.floor(Math.random() * personagens.length);
    const randomOponent = personagens[randomOponentSort];

    setTimeout(function(){
        segundaTela.style.display = 'none';
        telaAposta.style.display = 'flex';
        
        profileOponent.setAttribute ('src' , randomOponent.profile);
        nomeOponent.innerText = randomOponent.nome;

        // Adicionando botões de aposta
        document.getElementById("apostaDefault").addEventListener("click", function() {
            compararPersonagens(kaidouPlay, randomOponent);
            telaAposta.style.display = 'none';
            terceiraTela.style.display = 'flex';

            // define a força oponente
            forcaOponente.innerText = randomOponent.forca;
            agilidadeOponente.innerText = randomOponent.agilidade;
            resistenciaOponente.innerText = randomOponent.resistencia;
            nomeOponentRes.innerText = randomOponent.nome;
            profileOponent2.setAttribute ('src' , randomOponent.profile);

            // define a força kaidou
            forcaKaidou.innerText = kaidouPlay.forca;
            agilidadekaidou.innerText = kaidouPlay.agilidade;
            resistenciaKaidou.innerText = kaidouPlay.resistencia;
        });
        
        document.getElementById("apostaRandom").addEventListener("click", function() {
            compararPersonagens(randomOponent, kaidouPlay);
            telaAposta.style.display = 'none';
            terceiraTela.style.display = 'flex';

            // define a força oponente
            forcaOponente.innerText = randomOponent.forca;
            agilidadeOponente.innerText = randomOponent.agilidade;
            resistenciaOponente.innerText = randomOponent.resistencia;
            nomeOponentRes.innerText = randomOponent.nome;
            profileOponent2.setAttribute ('src' , randomOponent.profile);

            // define a força kaidou
            forcaKaidou.innerText = kaidouPlay.forca;
            agilidadekaidou.innerText = kaidouPlay.agilidade;
            resistenciaKaidou.innerText = kaidouPlay.resistencia;
        });

    }, 2500);  
})

function compararPersonagens(personagemApostado, personagem2) {
    let score1 = 0;
    let score2 = 0;

    if (personagemApostado.forca > personagem2.forca) {
        score1++;
        console.log("+1 forca")
    } else if(personagemApostado.forca > personagem2.forca){
        score2++;
    }

    if (personagemApostado.resistencia > personagem2.resistencia) {
        score1++;
        console.log("+1 res")
    } else if (personagemApostado.resistencia < personagem2.resistencia){
        score2++;
    }

    if (personagemApostado.agilidade > personagem2.agilidade) {
        score1++;
        console.log("+1 agi")
    } else if (personagemApostado.agilidade < personagem2.agilidade){
        score2++;
    }

    if (score1 > score2){
        resultado.innerHTML = "Você ganhou"
    } else{
        resultado.innerHTML = "Você Perdeu"
    }

}

restart.addEventListener('click', function(){
    terceiraTela.style.display = 'none'
    primeiraTela.style.display = 'flex'
})
