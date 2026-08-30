document.getElementById('cadastroForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  console.log('Nome:', nome);
  console.log('E-mail:', email);
  console.log('Telefone:', telefone);
});

document.getElementById('limpar').addEventListener('click', function() {
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefone').value = '';
});