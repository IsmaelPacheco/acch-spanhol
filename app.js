//create ID of users in the localStorage
function getId() {
  var id = localStorage.getItem("ID");

  if (id === null) {
    localStorage.setItem("ID", 0);
    id = 0;
  }
  return id;
}

//create Users in the localStorage
function getUser() {
  var user = localStorage.getItem("User");

  if (user === null) {
    localStorage.setItem("User", localStorage.getItem("User"));
    user = localStorage.getItem("User");
  }
  return user;
}

//check and sets the user's gender
function getSexo() {
  var sex = "";
  for (i = 0; i < document.getElementsByName("sexo").length; i++) {
    if (document.getElementsByName("sexo")[i].checked) {
      if (document.getElementsByName("sexo")[i].value == "fem")
        sex = "Feminino";
      if (document.getElementsByName("sexo")[i].value == "masc")
        sex = "Masculino";
    }
  }
  return sex;
}

//set ID of the user with 4 spaces of numbers
document.getElementById("ident").innerText =
  "ID: # " + getId().padStart(4, "0");

//increment counter
document.getElementById("btn_save").addEventListener("click", function() {
  count = Number(getId());
  localStorage.setItem("ID", count + 1);
});

//define user data values
document.getElementById("btn_save").addEventListener("click", function() {
  var dadosDoUsuario = {
    idade: document.getElementById("idade").value,
    sexo: getSexo(),
    corDosOlhos: document.getElementById("corOlhos").value,
    corDosCabelos: document.getElementById("corCabelos").value
  };

  pessoa = JSON.stringify(dadosDoUsuario);
  localStorage.setItem("User" + getId(), pessoa);
});

//reload page when you click on btn cancel
document.getElementById("btn_cancel").addEventListener("click", function() {
  location.reload();
});

//create table
var j = 0;
for (var i = 0; i < localStorage.getItem("ID"); i++) {
  j++;
  var dadosPessoa = JSON.parse(localStorage.getItem("User" + j));

  var tr = [
    "<tr>" +
      "<td>" +
      i +
      "</td>" +
      "<td>" +
      dadosPessoa.idade +
      "</td>" +
      "<td>" +
      dadosPessoa.sexo +
      "</td>" +
      "<td>" +
      dadosPessoa.corDosOlhos +
      "</td>" +
      "<td>" +
      dadosPessoa.corDosCabelos +
      "</td>" +
      "</tr>"
  ];
  document.getElementById("tbody").innerHTML += tr;
}
