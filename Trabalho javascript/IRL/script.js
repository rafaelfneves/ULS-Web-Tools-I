function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

//PROGRAMA
function enviarR(){

  //Receita
    var precoVenda = document.getElementById('PV').value;
    var quantidade = document.getElementById('Q').value;
    var receita = (precoVenda * quantidade);
    document.getElementById('R').value=receita;
}

function enviarQ(){

  //Quantidade
    var precoVenda2 = document.getElementById('PV2').value;
    var receita2 = document.getElementById('R2').value;
    var quantidade2 = (receita2/precoVenda2);
    document.getElementById('Q2').value=quantidade2;

}

function enviarPV(){

  //Quantidade
    var quantidade3 = document.getElementById('Q3').value;
    var receita3 = document.getElementById('R3').value;
    var precoVenda3 = (receita3/quantidade3);
    document.getElementById('PV3').value=precoVenda3;

}

function enviarCV(){
  //Custo Variavel
  var custoVU = document.getElementById('CVU').value;
  var quantidade2 = document.getElementById('Q4').value;
  var custoV = (custoVU * quantidade2);
  document.getElementById('CV').value=custoV;
}