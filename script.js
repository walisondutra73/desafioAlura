const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector("#mensagem");

function criptografar() {
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enteder"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }

  return stringEncriptada;
}

function descriptografar() {
  const textoDesencriptado = Desencriptar(textArea.value);
  mensagem.value = textoDesencriptado;
  textArea.value = "";
}

function Desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enteder"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}
function copiar() {
  var textoCop = document.getElementById("mensagem").value;
  navigator.clipboard.writeText(textoCop);
  alert("Texto copiado.");
}
