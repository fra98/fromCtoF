function displaytemp(sel, grad) {
    if (grad == "") grad = 0;
    if (sel == "") {
      alert("Perfavore seleziona un'unità di misura");
      return;
    }
    //alert("La temperatura in Fahrenheit è " + (celsius * 9/5 + 32));  mostra un messaggio a schermo con il risultato
    //document.getElementById('stampa').innerHTML = "La temperatura in gradi Fahrenheit è " + (celsius * 9 / 5 + 32) + "°F";
    var fahr = grad * 9 / 5 + 32;
    var cel = (grad - 32) * 5 / 9;
    var celsius;
    if (sel == "F") celsius = grad;
    else celsius = cel;
    document.getElementById('emoji').innerHTML = "";
    if (celsius <= 0) document.getElementById('emoji').innerHTML ="   🥶";
    if (celsius >= 35) document.getElementById('emoji').innerHTML ="   🥵";
    fahr = fahr.toFixed(1);
    cel = cel.toFixed(1);
    switch (sel) {
      case "F":
        document.getElementById('stampa').innerHTML = grad + " gradi celsius sono " + fahr + " gradi fahrenheit.";
        break;
      case "C":
        document.getElementById('stampa').innerHTML = grad + " gradi fahrenheit sono " + cel + " gradi celsius.";
        break;
    }
  
  };

function changemode(mode) {
    switch (mode) {
      case "🌙":
        document.getElementsByClassName('bodydark')[0].className = "bodylight"
        
        var arroptions = document.getElementsByTagName('option');
        for (let index = 0; index < arroptions.length; index++) {
          element = arroptions[index];
          element.className = "optionlight";
        }
  
        var arroptions = document.getElementsByTagName('select');
        for (let index = 0; index < arroptions.length; index++) {
          element = arroptions[index];
          element.className = "optionlight";
        }
  
        var arrinput = document.getElementsByTagName('input');
        for (let index = 0; index < arrinput.length; index++) {
          element = arrinput[index];
          element.className = "inputlight";
        }
  
        var arrbutton= document.getElementsByTagName('button');
        for (let index = 0; index < arrbutton.length; index++) {
          element = arrbutton[index];
          element.className = "buttonlight";
        }
  
        document.getElementById('mode').innerHTML = "☀️";
        break;
  
      case "☀️":
        document.getElementsByClassName('bodylight')[0].className = "bodydark"
  
        var arroptions = document.getElementsByTagName('option');
        for (let index = 0; index < arroptions.length; index++) {
          const element = arroptions[index];
          element.className = "optiondark";
        }
  
        var arroptions = document.getElementsByTagName('select');
        for (let index = 0; index < arroptions.length; index++) {
          const element = arroptions[index];
          element.className = "optiondark";
        }
  
        var arrinput = document.getElementsByTagName('input');
        for (let index = 0; index < arrinput.length; index++) {
          const element = arrinput[index];
          element.className = "inputdark";
        }
  
        var arrbutton= document.getElementsByTagName('button');
        for (let index = 0; index < arrbutton.length; index++) {
          const element = arrbutton[index];
          element.className = "buttondark";
        }
  
        document.getElementById('mode').innerHTML = "🌙";
        break;
    }
  };