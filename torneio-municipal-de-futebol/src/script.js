// Criando uma lista com objetos
var times = [
  {
    time: "Titans FC",
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  },
  {
    time: "Plástico FC",
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  },
  {
    time: "Ferro FC",
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  },
  {
    time: "CR Esportivo",
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  },
  {
    time: "Sinistros FC",
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  },
  {
    time: "Clubinho FC",
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  },
  {
    time: "Real Safira",
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  },
  {
    time: "Real Cobra Naja",
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
];

var elementoTabela = document.getElementById("tabelaTimes");
exibirNaTela();

function exibirNaTela() {
  var tabelaHTML = "";
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    tabelaHTML += `
      <tr>
            <td>${time.time}</td>
            <td>${time.jogos}</td>
            <td>${time.vitorias}</td>
            <td>${time.empates}</td>
            <td>${time.derrotas}</td>
            <td>${time.pontos}</td>
            <td><button onClick="adicionarVitoria(times[${i}])">Vitória</button></td>
            <td><button onClick="adicionarEmpate(times[${i}])">Empate</button></td>
            <td><button onClick="adicionarDerrota(times[${i}])">Derrota</button></td>
          </tr>
    `;
  }
  elementoTabela.innerHTML = tabelaHTML;
}

function adicionarVitoria(time) {
  time.vitorias++;
  time.jogos++;
  time.pontos = time.pontos + 3;
  exibirNaTela();
}
function adicionarEmpate(time) {
  time.empates++;
  time.jogos++;
  time.pontos++;
  exibirNaTela();
}
function adicionarDerrota(time) {
  time.derrotas++;
  time.jogos++;
  exibirNaTela();
}

function reset() {
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    time.jogos = 0;
    time.vitorias = 0;
    time.empates = 0;
    time.derrotas = 0;
    time.pontos = 0;
  }
  exibirNaTela();
}
