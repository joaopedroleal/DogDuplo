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
                afirmacao: "Ter a cozinha toda suja e com gordura"
            }
        ]
    },
    {
        enunciado: "O que você faz para vender as bebidas?",
        alternativas: [
            {
                texto: "Ter bebidas na geladeira",
                afirmacao: "alface, tomate, salsicha, hamburguer, pão, etc..."
            },
            {
                texto: "O cliente abre o freezer e pega uma coca-cola e depois paga",
                afirmacao: "de soja, ja que as frituras dos hamburguers e da chapa são todas horriveis"
            }
        ]
    },
    {
        enunciado: "No seu restaurante tem cadeiras e mesas?",
        alternativas: [
            {
                texto: "Não, as pessoas comem no chão.",
                afirmacao: "As bebidas também tem que comprar, assim como os ingredientes para o lanche,"
            },
            {
                texto: "Os clientes comem em um banheiro privativo de luxo",
                afirmacao: "de óleo de soja. Para ir ao banheiro, precisa passar pela cozinha,"
            }
        ]
    },
    {
        enunciado: "Tem alguma regra no restaurante?",
        alternativas: [
            {
                texto: "Não eles comem como um elefante e saiem fazendo fezes pelo restaurante",
                afirmacao: "para comprar as bebidas, precisa ir na distribuidora e pedir para entregar as cocas-colas."
            },
            {
                texto: "Eles vão em um iate e depois voltam para comer, tiveram que aprender as regras no iate.",
                afirmacao: "lavar os pés e as mãos para não entrar na cozinha sujo."
            }
        ]
    },
    {
        enunciado: "Vocês tem um ou mais cozinheiros?",
        alternativas: [
            {
                texto: "Temos mais de um cozinheiros, eles são bem harmônicos",
                afirmacao: "As nossas mesas são de alto nivel sendo elas, mesas de plastico com a logomarca da skol estampada"
            },
            {
                texto: "Os nossos cozinheiros não sabem fazer o lanche, mas logo eles pegam o jeito",
                afirmacao: "E o mais importante de todos até agora, sempre ajudar os cozinheiros a preparar sua própria comida com as mãos sujas depois de sair do banheiro"
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
    caixaPerguntas.textContent = "Nessa empresa você encontra a melhor qualidade devida...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();