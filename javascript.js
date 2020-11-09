
var bloco1,bloco2,bloco3,bloco4,bloco5,bloco6,bloco7,bloco8,bloco9,bloco10,bloco11,bloco12,bloco13,bloco14,bloco15;
var calledNumbers = new Array();

function geraCartela(){
  var  b1 = Math.floor(Math.random() * 20) + 1;
  var  b2 = Math.floor(Math.random() * 40) + 21;
  var  b3 = Math.floor(Math.random() * 60) + 41;
  var  b4 = Math.floor(Math.random() * 20) + 1;
  var  b5 = Math.floor(Math.random() * 40) + 21;
  var  b6 = Math.floor(Math.random() * 60) + 41;
  var  b7 = Math.floor(Math.random() * 20) + 1;
  var  b8 = Math.floor(Math.random() * 40) + 21;
  var  b9 = Math.floor(Math.random() * 60) + 41;
  var  b10 = Math.floor(Math.random() * 20) + 1;
  var  b11 = Math.floor(Math.random() * 40) + 21;
  var  b12 = Math.floor(Math.random() * 60) + 41;
  var  b13 = Math.floor(Math.random() * 20) + 1;
  var  b14 = Math.floor(Math.random() * 40) + 21;
  var  b15 = Math.floor(Math.random() * 60) + 41;

  bloco1 = document.getElementById("square0").innerHTML = b1;
  bloco2 = document.getElementById("square1").innerHTML = b2;
  bloco3 = document.getElementById("square2").innerHTML = b3;
  bloco4 = document.getElementById("square3").innerHTML = b4;
  bloco5 = document.getElementById("square4").innerHTML = b5;
  bloco6 = document.getElementById("square5").innerHTML = b6;
  bloco7 = document.getElementById("square6").innerHTML = b7;
  bloco8 = document.getElementById("square7").innerHTML = b8;
  bloco9 = document.getElementById("square8").innerHTML = b9
  bloco10 = document.getElementById("square9").innerHTML = b10;
  bloco11 = document.getElementById("square10").innerHTML = b11;
  bloco12 = document.getElementById("square11").innerHTML = b12;
  bloco13 = document.getElementById("square12").innerHTML = b13;
  bloco14 = document.getElementById("square13").innerHTML = b14;
  bloco15 = document.getElementById("square14").innerHTML = b15;
  
  var sq1 = b1;
  var sq2 = b2;
  var sq3 = b3;
  var sq4 = b4;
  var sq5 = b5;
  var sq6 = b6;
  var sq7 = b7;
  var sq8 = b8;
  var sq9 = b9;
  var sq10 = b10;
  var sq11 = b11;
  var sq12 = b12;
  var sq13 = b13;
  var sq14 = b14;
  var sq15 = b15;

  for (var i = 0; i < 25; i++) {
        if (i == 12)
            continue;
        var currentSquare = document.getElementById("square" + i);
        currentSquare.style.backgroundColor = "#ffffff";
    }
    return;
}

function sorteia(){
  var numSorteados = [];
  var numSorteios = 0;
  var numAtual = 0;
  for (i = 0; i <= numSorteios; i++){
    numAtual = Math.floor(Math.random() * 60) + 1;
    if(numAtual != 0){
      if(numSorteados.indexOf(numAtual) ==-1){
       numSorteados.push(numAtual);
          var div = document.getElementById("textSorteio");
          div.innerText = "Números sorteados:" ;
          calledNumbers.push(numAtual);
          document.getElementById("numSorteados").innerHTML = calledNumbers;
      }
    }
  }
} 

function seleciona(square) {
  var currentSquare = document.getElementById(square);
  if (currentSquare.style.backgroundColor == "lightblue") 
      currentSquare.style.backgroundColor = "lightblue";
  else
      currentSquare.style.backgroundColor = "lightblue";
  return;
}

function verifNum(sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq9,sq10,sq11,sq12,sq13,sq14,sq15){
  
  sq1 = document.getElementById("square0");
  sq2 = document.getElementById("square1");
  sq3 = document.getElementById("square2");
  sq4 = document.getElementById("square3");
  sq5 = document.getElementById("square4");
  sq6 = document.getElementById("square5");
  sq7 = document.getElementById("square6");
  sq8 = document.getElementById("square7");
  sq9 = document.getElementById("square8");
  sq10 = document.getElementById("square9");
  sq11 = document.getElementById("square10");
  sq12 = document.getElementById("square11");
  sq13 = document.getElementById("square12");
  sq14 = document.getElementById("square13");
  sq15 = document.getElementById("square14");
  
  var cout = 0;

  if (sq1.style.backgroundColor == "lightblue"){
    cout++; 
  }        
  if (sq2.style.backgroundColor == "lightblue"){
    cout++; 
  }          
  if (sq3.style.backgroundColor == "lightblue"){
    cout++; 
  }       
  if (sq4.style.backgroundColor == "lightblue"){
    cout++; 
  }             
  if (sq5.style.backgroundColor == "lightblue"){
    cout++; 
  }         
  if (sq6.style.backgroundColor == "lightblue"){
    cout++; 
  }           
  if (sq7.style.backgroundColor == "lightblue"){
    cout++; 
  }          
  if (sq8.style.backgroundColor == "lightblue"){
    cout++;
  }      
  if (sq9.style.backgroundColor == "lightblue"){
    cout++;
  }
  if (sq11.style.backgroundColor == "lightblue"){
    cout++;
  }
  if (sq12.style.backgroundColor == "lightblue"){
    cout++;
  }
  if (sq13.style.backgroundColor == "lightblue"){
    cout++;
  }       
  if (sq14.style.backgroundColor == "lightblue"){
    cout = cout + 1;
  }       
  if (sq15.style.backgroundColor == "lightblue"){
    cout++;
  }
  else {
    window.alert("Você não acertou nenhum número!");
  }

  var div = document.getElementById("acertos");
  div.innerText = "Quantidade de acertos: " + cout;
}