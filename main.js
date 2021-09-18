menu_list_array = ["Vegeterian Pizza - $35.99", "Hawaiian Pizza - $30", "Spinach Pizza - $40",
"Cheese Pizza - $30", "Pepperoni Pizza - $30.30", "Mushroom Pizza - $40", "Meat Pizza - $30", "Special Daily Pizza - $52",
"Mystery Pizza $39.50"];

bought_list_array = [];

var reviewed=0

function getmenu() {
  var htmldata ="";
  var button = document.getElementById("menu_list")
  var display = button.textContent;
  
  if (display == "Show Menu") {
    menu_list_array.sort();
    for(var i=0; i<menu_list_array.length; i++){
        htmldata += menu_list_array[i] + '<br>'
    }
    document.getElementById("display_menu").innerHTML = htmldata;
    button.textContent = "Hide Menu";
  } 
  else {
    button.textContent = "Show Menu";
    document.getElementById("display_menu").innerHTML = '';    
  }
        //give the appropriate id name as display_menu  
}

function add_suggestion(){
  if (reviewed == 0) {
    var yellowstars=document.getElementById("sliderstars").value;
    var blackstars= 5 - yellowstars;
    var suggestion=document.getElementById("add_suggestion").value;
    var name=document.getElementById("add_name").value;

    var target = document.getElementById("review");
    var span = '<span class="fa fa-star checked" style="color:rgb(235, 200, 113)"></span>'
    var spantwo = '<span class="fa fa-star checked" style="color:rgb(0, 0, 0)"></span>'
    for (var x=0; x<yellowstars; x++) {
      target.innerHTML += span
    }
    for (var y=0; y<blackstars; y++) {
      target.innerHTML += spantwo
    }
    document.getElementById("review").innerHTML += "<br>" + '"' + suggestion + '"' + " - " + name;
    reviewed=1
  }
}



function add_boughtitem() {

  var select = document.getElementById('options');
  var text = select.options[select.selectedIndex].text;
  bought_list_array.push(text)
  bought_list_array.sort();
  showcart() 
  showcart() 
}

function showcart() {
  var htmldatathree ="";
  var buttonthree = document.getElementById("showcartbutton")
  var displaythree = buttonthree.textContent;

  if (displaythree == "Show Cart") {
    bought_list_array.sort();
    for(var j=0; j<bought_list_array.length; j++){
        htmldatathree += j+1 + ". " + bought_list_array[j] + '<br>'
    }
    document.getElementById("cart").innerHTML = htmldatathree;
    buttonthree.textContent = "Hide Cart";
  }
  else {
    buttonthree.textContent = "Show Cart";
    document.getElementById("cart").innerHTML = '';
  }
}


