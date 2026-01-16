<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Bloco de Notas Web</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <h1>📒 Meu Bloco de Notas</h1>

    <textarea 
      id="note"
      placeholder="Digite suas anotações aqui..."
    ></textarea>

    <div class="buttons">
      <button onclick="salvarNota()">💾 Salvar</button>
      <button onclick="limparNota()">🗑 Limpar</button>
    </div>

    <p id="status"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>