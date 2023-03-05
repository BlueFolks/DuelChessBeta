// Quando a página estiver pronta
$(document).ready(function() {
    // Adiciona um evento de clique no botão de logout
    $('#logout-btn').click(function() {
      // Envia uma requisição AJAX para o servidor para realizar o logout
      $.ajax({
        url: '/logout',
        type: 'POST',
        success: function() {
          // Redireciona o usuário para a página de login
          window.location.href = '/login';
        }
      });
    });
  
    // Adiciona um evento de clique no botão de criar jogo
    $('#create-game-btn').click(function() {
      // Obtém o nome do jogo digitado pelo usuário
      var gameName = $('#game-name').val();
  
      // Envia uma requisição AJAX para o servidor para criar um novo jogo
      $.ajax({
        url: '/game/create',
        type: 'POST',
        data: { name: gameName },
        success: function(response) {
          // Redireciona o usuário para a página do jogo criado
          window.location.href = '/game/' + response.gameId;
        }
      });
    });
  });
  