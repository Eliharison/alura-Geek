import { conectaAPI } from "./conectaAPI.js";

const submit = document.querySelector("[data-submit]");
const cards = document.querySelector("[data-card]");

async function novosGames(evento) {
  evento.preventDefault();

  const nome = document.querySelector("[data-name]").value;
  const preco = document.querySelector("[data-price]").value;
  const imagem = document.querySelector("[data-image]").value;

  try {
    await conectaAPI.novoGame(nome, preco, imagem);
    carregarGames(); // Recarregar os jogos para incluir o novo
  } catch (e) {
    alert(e.message);
  }
}

submit.addEventListener("click", novosGames);

function constroiCard(id, nome, preco, imagem) {
  const game = document.createElement("div");
  game.classList.add("card");
  game.classList.add("bg-primary");
  game.classList.add("p-2");
  game.innerHTML = `
            <img
              class="img-thumbnail bg-primary border-0"
              src="${imagem}"
              alt="${nome}"
            />
            <p class="text-white">${nome}</p>
            <div class="d-inline-flex justify-content-between">
              <p class="text-white m-0">$ ${preco}</p>
              <img src="imgs/icon-trash.svg" alt="lixo-icone" class="delete-icon" data-id="${id}" />
            </div>
    `;

  const deleteIcon = game.querySelector(".delete-icon");
  deleteIcon.addEventListener("click", async () => {
    try {
      await conectaAPI.excluirGame(id);
      carregarGames(); // Recarregar os jogos após a exclusão
    } catch (e) {
      alert(e.message);
    }
  });

  return game;
}

async function carregarGames() {
  cards.innerHTML = ""; // Limpa os cards existentes antes de carregar novos

  try {
    const listaApi = await conectaAPI.games();
    listaApi.forEach((elemento) =>
      cards.appendChild(
        constroiCard(
          elemento.id,
          elemento.nome,
          elemento.preco,
          elemento.imagem
        )
      )
    );
  } catch {
    cards.innerHTML = `<h1>Erro no Server-Side</h1>`;
  }
}


carregarGames();
