const API_URL = "https://6695dcb40312447373c04214.mockapi.io/Alura-geek"

async function games() {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error("Erro ao conectar com o servidor")
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

async function novoGame(nome, preco, imagem) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, preco, imagem }),
    })
    if (!response.ok) throw new Error("Erro ao adicionar novo jogo")
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

async function excluirGame(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" })
    if (!response.ok) throw new Error("Erro ao excluir jogo")
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const conectaAPI = {
  games,
  novoGame,
  excluirGame,
}