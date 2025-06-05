function maiorvalor(){
  //+---------------
  //Recebe as valores
  //+---------------
  var a = parseFloat(document.getElementById('valor01').value);
  var b = parseFloat(document.getElementById('valor02').value);
  var c = parseFloat(document.getElementById('valor03').value);
  
  //+----------------
  // Cálculo da média
  //+----------------

  
  //+----------------
  //Verificação de notas
  //Saídas esperadas: (Aprovado com Distinção, Quase, mas reprovado, Reprovadp)
  //+----------------
  if (a>=b) {
    document.getElementById('demo').innerHTML = "maior = a"
  } 

  if  {
    document.getElementById('demo').innerHTML =  "O maior é = "+ a.toString + "(A)";
  }
}