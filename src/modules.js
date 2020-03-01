function displaytemp(sel, grad) {
    if (grad == "") grad = 0;
    if (sel == "") {
      alert("Perfavore seleziona un'unità di misura");
      return;
    }
    //alert("La temperatura in Fahrenheit è " + (celsius * 9/5 + 32));  mostra un messaggio a schermo con il risultato
    //document.getElementById('stampa').innerHTML = "La temperatura in gradi Fahrenheit è " + (celsius * 9 / 5 + 32) + "°F";
    var fahr;
    var cel;
    var kel;
    grad = parseFloat(grad);
    switch (sel) {
      case "F":
        cel = (grad - 32) * 5 / 9;
        kel = (grad - 32) * 5/9 + 273.15;
        fahr = grad;
        break;
      case "C":
        fahr = grad * 9 / 5 + 32;
        kel = grad + 273.15;
        cel = grad;
        break;
      case "K":
        kel = grad;
        cel = grad - 273.15;
        fahr = (grad + 32*5/9 - 273.15) / (5/9);
        break;
    }
    kel = parseFloat(kel.toFixed(1));
    cel = parseFloat(cel.toFixed(1));
    fahr = parseFloat(fahr.toFixed(1));
    document.getElementById('stampa').innerHTML = 
    "<table>" +
    "<tr><th style=\"border-color:#d61a1f;color:#d61a1f\">Celsius</th><th style=\"border-color:#4cd63f;color:#4cd63f\">Kelvin</th><th style=\"border-color:#3f5ad6;color:#3f5ad6\">Fahrenheit</th></tr>" +
    "<tr><td style=\"color:#d61a1f\">" + cel + "°C</td><td style=\"color:#4cd63f\">" + kel + "°K</td><td style=\"color:#3f5ad6\">" + fahr + "°F</td></tr>" +
    "</table>";
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
