var lista = new Array;
var obj = new Array;

document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o comportamento padrão de recarregar a página

  // Obter os valores dos campos do formulário
  var nome = document.getElementById('lnome').value;
  var endereco = document.getElementById('lende').value;
  var bairro = document.getElementById('lbair').value;
  var cidade = document.getElementById('lcida').value;
  var celular = document.getElementById('lcel').value;

  var obj = new Array;
  obj.push(nome);
  obj.push(endereco);
  obj.push(bairro);
  obj.push(cidade);
  obj.push(celular);

  lista.push(obj);

  console.log(lista);
  console.log(lista.length)

  setTimeout(function () {
    document.getElementById("lista").innerHTML = " ";
    for (let i = 0; i < lista.length; i++) {

      for (let x = 0; x < 5; x++) {

        document.getElementById("lista").innerHTML += "<span>" + i + ' ' + lista[i][x] + "</span><br>";

      }
      document.getElementById("lista").innerHTML += '<p></p>';
    }

  }, 3500);
  });



  var form = document.getElementById("formulario");
  var submitButton = document.getElementById("submitButton");


  form.addEventListener("submit", function (event) {
    event.preventDefault();

    submitButton.disabled = true; // Desabilita o botão
    processar();
    setTimeout(function () {

      submitButton.disabled = false; // Reabilita o botão de envio após o atraso
      form.reset(); // Opcional: Redefine o formulário após o envio
    }, 3500);


  });

  function processar() {
    var loadingDiv = document.getElementById("loading");
    loadingDiv.style.display = "block";
    exibeImagem();

    setTimeout(function () {

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