const note = document.getElementById("note");
const status = document.getElementById("status");

// Carregar nota salva
window.onload = () => {
  const savedNote = localStorage.getItem("minhaNota");
  if (savedNote) {
    note.value = savedNote;
    status.innerText = "Nota carregada automaticamente 💾";
  }
};

// Salvar nota
function salvarNota() {
  localStorage.setItem("minhaNota", note.value);
  status.innerText = "Nota salva com sucesso ✔";
}

// Limpar nota
function limparNota() {
  if (confirm("Tem certeza que deseja apagar tudo?")) {
    note.value = "";
    localStorage.removeItem("minhaNota");
    status.innerText = "Nota apagada 🗑";
  }
}