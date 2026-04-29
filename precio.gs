function CLASIFICAR_PRECIO(precio) {
 //Esta funcion sera utilizada como
 //formula desde el archivo de google sheet
  if (precio < 50) {
    return "BARATO";
  } else if (precio <= 80) {
    return "NORMAL";
  } else {
    return "CARO";
  }
}