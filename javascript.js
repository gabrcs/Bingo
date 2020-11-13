
var bloco1,bloco2,bloco3,bloco4,bloco5,bloco6,bloco7,bloco8,bloco9,bloco10,bloco11,bloco12,bloco13,bloco14,bloco15;
var numUsados = new Array();

function geraCartela(){
  //Gera numeros aleatórios
  var  b1 = Math.floor(Math.random() * 20) + 1;  //Entre 1 a 20
  var  b2 = Math.floor(Math.random() * (40 - 21)) + 21;  //Entre 21 a 40
  var  b3 = Math.floor(Math.random() * (60 - 41)) + 41;  //Entre 41 a 60
 
  //Verifica se os numeros são iguais ao anteriores
  var  b4 = Math.floor(Math.random() * 20) + 1;
  if(b4 == b1){
    var  b4 = Math.floor(Math.random() * 20) + 1;
  } 

  var  b5 = Math.floor(Math.random() * (40 - 21)) + 21;
  if(b5 == b2){
    var  b5 = Math.floor(Math.random() * (40 - 21)) + 21;
  }

  var  b6 = Math.floor(Math.random() * (60 - 41)) + 41;
  if(b6 == b3){
    var  b6 = Math.floor(Math.random() * (60 - 41)) + 41;
  }
  
  var  b7 = Math.floor(Math.random() * 20) + 1;
  if(b7 == b1){
    var  b7 = Math.floor(Math.random() * 20) + 1;
  } if(b7 == b4){
      var  b7 = Math.floor(Math.random() * 20) + 1;
  }

  var  b8 = Math.floor(Math.random() * (40 - 21)) + 21;
  if(b8 == b2){
    var  b8 = Math.floor(Math.random() * (40 - 21)) + 21;
  } if(b8 == b5){
      var  b8 = Math.floor(Math.random() * (40 - 21)) + 21;
  }

  var  b9 = Math.floor(Math.random() * (60 - 41)) + 41;
  if(b9 == b3){
    var  b9 = Math.floor(Math.random() * (60 - 41)) + 41;
  } if(b9 == b6){
      var  b9 = Math.floor(Math.random() * (60 - 41)) + 41;
  }
  
  var  b10 = Math.floor(Math.random() * 20) + 1;
  if(b10 == b1){
    var  b10 = Math.floor(Math.random() * 20) + 1;
  } if (b10 == b4){
     var  b10 = Math.floor(Math.random() * 20) + 1;
  } if (b10 == b7){
     var  b10 = Math.floor(Math.random() * 20) + 1;
  }

  var  b11 = Math.floor(Math.random() * (40 - 21)) + 21;
  if(b11 == b2){
    var  b11 = Math.floor(Math.random() * (40 - 21)) + 21;
  } if(b11 == b5){
     var  b11 = Math.floor(Math.random() * (40 - 21)) + 21;
  } if(b11 == b8){
     var  b11 = Math.floor(Math.random() * (40 - 21)) + 21;
  }

  var  b12 = Math.floor(Math.random() * (60 - 41)) + 41;
  if(b12 == b3){
    var  b12 = Math.floor(Math.random() * (60 - 41)) + 41;
  } if (b12 == b6){
     var  b12 = Math.floor(Math.random() * (60 - 41)) + 41;
  } if (b12 == b9){
     var  b12 = Math.floor(Math.random() * (60 - 41)) + 41;
  }

  var  b13 = Math.floor(Math.random() * 20) + 1;
  if(b13 == b1){
    var  b13 = Math.floor(Math.random() * 20) + 1;
  } if (b13 == b4){
     var  b13 = Math.floor(Math.random() * 20) + 1;
  } if (b13 == b7){
     var  b13 = Math.floor(Math.random() * 20) + 1;
  } if (b13 == b10){
     var  b13 = Math.floor(Math.random() * 20) + 1;
  }

  var  b14 = Math.floor(Math.random() * (40 - 21)) + 21;
  if(b14 == b2){
    var  b14 = Math.floor(Math.random() * (40 - 21)) + 21;
  } if (b14 == b5){
      var  b14 = Math.floor(Math.random() * (40 - 21)) + 21;
  } if (b14 == b8){
      var  b14 = Math.floor(Math.random() * (40 - 21)) + 21;
  } if (b14 == b11){
      var  b14 = Math.floor(Math.random() * (40 - 21)) + 21;
  }

  var  b15 = Math.floor(Math.random() * (60 - 41)) + 41;
  if(b15 == b3){
    var  b15 = Math.floor(Math.random() * (60 - 41)) + 41;
  } if (b15 == b6){
      var  b15 = Math.floor(Math.random() * (60 - 41)) + 41;
  } if (b15 == b9){
      var  b15 = Math.floor(Math.random() * (60 - 41)) + 41;   
  } if (b15 == b12){
      var  b15 = Math.floor(Math.random() * (60 - 41)) + 41;
  }

  bloco1 = document.getElementById("bloco0").innerHTML = b1;
  bloco2 = document.getElementById("bloco1").innerHTML = b2;
  bloco3 = document.getElementById("bloco2").innerHTML = b3;
  bloco4 = document.getElementById("bloco3").innerHTML = b4;
  bloco5 = document.getElementById("bloco4").innerHTML = b5;
  bloco6 = document.getElementById("bloco5").innerHTML = b6;
  bloco7 = document.getElementById("bloco6").innerHTML = b7;
  bloco8 = document.getElementById("bloco7").innerHTML = b8;
  bloco9 = document.getElementById("bloco8").innerHTML = b9
  bloco10 = document.getElementById("bloco9").innerHTML = b10;
  bloco11 = document.getElementById("bloco10").innerHTML = b11;
  bloco12 = document.getElementById("bloco11").innerHTML = b12;
  bloco13 = document.getElementById("bloco12").innerHTML = b13;
  bloco14 = document.getElementById("bloco13").innerHTML = b14;
  bloco15 = document.getElementById("bloco14").innerHTML = b15;
  
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
        var currentSquare = document.getElementById("bloco" + i);
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
    if(numAtual == numAtual){
      if(numSorteados.indexOf(numAtual) ==-1){
       numSorteados.push(numAtual);
          var div = document.getElementById("textSorteio");
          div.innerText = "Números sorteados:" ;
          numUsados.push(numAtual);
          document.getElementById("numSorteados").innerHTML = numUsados;
      }
    }
  }
} 

function seleciona(bloco) {
  var blocoAtual = document.getElementById(bloco);
  if (blocoAtual.style.backgroundColor == "lightblue") 
      blocoAtual.style.backgroundColor = "lightblue";
  else
      blocoAtual.style.backgroundColor = "lightblue";
  return;
}

function verifNum(sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq9,sq10,sq11,sq12,sq13,sq14,sq15){
  
  sq1 = document.getElementById("bloco0");
  sq2 = document.getElementById("bloco1");
  sq3 = document.getElementById("bloco2");
  sq4 = document.getElementById("bloco3");
  sq5 = document.getElementById("bloco4");
  sq6 = document.getElementById("bloco5");
  sq7 = document.getElementById("bloco6");
  sq8 = document.getElementById("bloco7");
  sq9 = document.getElementById("bloco8");
  sq10 = document.getElementById("bloco9");
  sq11 = document.getElementById("bloco10");
  sq12 = document.getElementById("bloco11");
  sq13 = document.getElementById("bloco12");
  sq14 = document.getElementById("bloco13");
  sq15 = document.getElementById("bloco14");
  
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
    cout++;
  }  
  
  if (sq15.style.backgroundColor == "lightblue"){
    cout++;
  }
  
  var div = document.getElementById("acertos");
  div.innerText = "Quantidade de acertos: " + cout;
}
