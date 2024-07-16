const camposDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");
const tiposDeErro = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError",
];

const mensagens = {
  name: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido.",
  },
  price: {
    valueMissing: "O campo de preço não pode estar vazio.",
    typeMismatch: "Por favor, preencha um preço válido.",
    tooShort: "Por favor, preencha um preço válido.",
  },
  image: {
    valueMissing: "O campo de imagem não pode estar vazio.",
    typeMismatch: "Por favor, preencha uma URL válida.",
    tooShort: "Por favor, preencha uma URL válida.",
    customError: "A URL deve começar com https://",
  },
};

function mostrarErro(message) {
  const mostrarMensagem = document.querySelector("#erro");
  mostrarMensagem.innerHTML = message;
  mostrarMensagem.classList.add("mostrar");
}

function esconderErro() {
  const mensagemErro = document.querySelector("#erro");
  mensagemErro.classList.remove("mostrar");
}

function validateForm() {
  let formIsValid = true;

  camposDoFormulario.forEach((campo) => {
    const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
    const validadorDeInput = campo.checkValidity();
    let mensagem = "";

    if (!validadorDeInput) {
      tiposDeErro.forEach((erro) => {
        if (campo.validity[erro]) {
          mensagem = mensagens[campo.name][erro] || "";
        }
      });

      mensagemErro.textContent = mensagem;
      formIsValid = false;
    } else {
      mensagemErro.textContent = "";
    }
  });

  if (!formIsValid) {
    mostrarErro("Por favor, corrija os campos inválidos.");
  } else {
    esconderErro();

    const listaRespostas = {
      nome: formulario.elements["name"].value,
      preco: formulario.elements["price"].value,
      imagem: formulario.elements["image"].value,
    };

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
    window.location.href = "index.html";
  }
}

camposDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificaCampo(campo) {
  let mensagem = "";
  campo.setCustomValidity("");

  if (
    campo.name === "image" &&
    campo.value &&
    !campo.value.startsWith("https://")
  ) {
    campo.setCustomValidity(mensagens.image.customError);
  }

  tiposDeErro.forEach((erro) => {
    if (campo.validity[erro]) {
      mensagem = mensagens[campo.name][erro] || "";
    }
  });

  const mensagemErro = document.querySelector("#erro");
  const validadorDeInput = campo.checkValidity();

  if (!validadorDeInput) {
    mensagemErro.textContent = mensagem;
    mostrarErro(mensagem);
  } else {
    esconderErro();
    mensagemErro.textContent = "";
    
  }
}
