const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como vender dog duplo?",
        alternativas: [
            {
                texto: "Ter uma chapa para fazer os lanches",
                afirmacao: "Comprar os ingredientes certo"
            },
            {
                texto: "Ter um cozinheiro",
                afirmacao: "alface, tomate, salsicha, hamburguer, pão, etc..."
            }
        ]
    },
    {
        enunciado: "O que você faz para vender as bebidas?",
        alternativas: [
            {
                texto: "Ter bebidas na geladeira",
                afirmacao: "As bebidas também tem que comprar, assim como os ingredientes para o lanche,"
            },
            {
                texto: "O cliente abre o freezer e pega uma coca-cola e depois paga",
                afirmacao: "para comprar as bebidas, precisa ir na distribuidora e pedir para entregar as cocas-colas."
            }
        ]
    },
    {
        enunciado: "No seu restaurante tem cadeiras e mesas?",
        alternativas: [
            {
                texto: "Não, as pessoas comem no chão.",
                afirmacao: "Sim, nós compramos as cadeiras de plásticos e as mesas da Skol "
            },
            {
                texto: "Os clientes comem em um banheiro privativo de luxo",
                afirmacao: "essas mesas são as melhores do Brasil todo, assim como o lanhce DogDuplo"
            }
        ]
    },
    {
        enunciado: "Tem alguma regra no restaurante?",
        alternativas: [
            {
                texto: "Não eles comem como um elefante e saiem fazendo fezes pelo restaurante",
                afirmacao: "Sim, é importante que a regra do estabelecimento seja seguida"
            },
            {
                texto: "Eles vão em um iate e depois voltam para comer, tiveram que aprender as regras no iate.",
                afirmacao: "e seja muito bem respeitada para zelar nosso comprometimento com a empresa e todos os clientes"
            }
        ]
    },
    {
        enunciado: "Vocês tem um ou mais cozinheiros?",
        alternativas: [
            {
                texto: "Temos mais de um cozinheiros, eles são bem harmônicos",
                afirmacao: "Sim temos 5 cozinheiros chefes"
            },
            {
                texto: "Os nossos cozinheiros não sabem fazer o lanche, mas logo eles pegam o jeito",
                afirmacao: "muito bem qualificados e mandam muito bem na cozinha. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();