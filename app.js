function adicionarAmigo() {
  const listaAmigos = [];
  let nome = document.getElementById("amigo").value;
  listaAmigos.push(nome);

  document
    .getElementById("listaAmigos")
    .appendChild(document.createTextNode(nome + " "));
}

function sortearAmigo() {
  const listaAmigos = document.getElementById("listaAmigos").childNodes;
  if (listaAmigos.length === 0) {
    alert("Nenhum amigo adicionado!");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[indiceAleatorio].textContent;

  document.getElementById("resultado").textContent =
    "Amigo sorteado: " + amigoSorteado;

    
}
