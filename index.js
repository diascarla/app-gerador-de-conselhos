const idConselho = document.querySelector('.conselho-id');
const conselho = document.querySelector(".frase");
const btn = document.querySelector(".atualizar-conselho");

async function criarConselho() {
    try {
        const resposta = await fetch("https://api.adviceslip.com/advice");
    
    if (!resposta.ok) {
        throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
    }

    const textoConselho = await resposta.json();
    const novoId = `Conselho #${textoConselho.slip.id}`;
    const conselhos = `"${textoConselho.slip.advice}"`;

    idConselho.innerText = novoId;
    conselho.innerText = conselhos;

} catch(error) {
    console.log("Erro ao tentar buscar as informações da API, error");
}
}

btn.addEventListener('click', criarConselho);
criarConselho();

