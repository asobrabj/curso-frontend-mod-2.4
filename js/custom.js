 
    document.getElementById("formulario").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita o comportamento padrão de recarregar a página

      // Obter os valores dos campos do formulário
      var nome = document.getElementById('lnome').value;
      var endereco = document.getElementById('lende').value;
      var bairro = document.getElementById('lbair').value;
      var cidade = document.getElementById('lcida').value;
      var celular  = document.getElementById('lcel').value;

      // Exibir os valores ao lado
      var output = document.getElementById("lista");
      output.innerHTML += "Nome: " + nome + "<br>Endereço: " + endereco + "<br>Bairro: " + 
      bairro + "<br>Cidade: " + cidade + "<br>Celular: " + celular + "<br><br>";
    });


 function processar() {
      var loadingDiv = document.getElementById("loading");
      loadingDiv.style.display = "block";
      exibeImagem();

      setTimeout(function() {
        ocultarImagem();
      }, 3000); // 3 segundos
    }

     function ocultarImagem() {
      var loadingImg = document.getElementById("loadingImg");
      loadingImg.style.display = "none";
      document.getElementById("carrega").innerHTML = "";
    }

    function exibeImagem() {
      var loadingImg = document.getElementById("loadingImg");
      loadingImg.style.display = "block";
      document.getElementById("carrega").innerHTML = "Carregando!";
    }