function saludar(mensaje, color) {
  if (color == "rojo") {
  } else {
  }
  document.write();
}

function mostraFecha() {
  var tiempo = document.getElementById("tiempo");
  tiempo.innerHTML = date();
}
function borrarFecha() {
  var tiempo = document.getElementById("tiempo");
  tiempo.innerHTML = date();
}

$("#tabla_calificacion").on("click", " tr .ver", function () {
  let row = $(this).closest("tr");
  let nombre = row.find("td:eq(1)").text();
  let calificacion = row.find(".calificacion").val();
  alert("La calificacion de " + nombre + " - " + calificacion + " estrellas");
});

$("#tabla_calificacion").on("click", " tr .fa-star", function (e) {
  let count;
  count = e.currentTarget.id[0];
  let nombre = e.currentTarget.id.substring(1);
  let row = $(this).closest("tr");
  row.find(".calificacion").val(count);
  for (let i = 0; i < 5; i++) {
    //i=0 , i=1, i=2, i=3, i=4
    if (i < count) {
      document.getElementById(i + 1 + nombre).style.color = "orange";
    } else {
      document.getElementById(i + 1 + nombre).style.color = "black";
    }
  }
});

function mensaje() {
  alert("Gracias por calificar con" + count + " estrellas");
}
