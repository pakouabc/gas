function setCelda(zelda, balor, hoja) {
  console.log("setCelda function")
  const cuaderno = SpreadsheetApp.getActiveSpreadsheet();
  const celda = cuaderno.getSheetByName(hoja); // nombre de la hoja
  celda.getRange(zelda).setValue(balor);
  //const num = Math.floor(Math.random() * 100);
  //oja.getRange("B1").setValue(num);
}

function onEdit(e) {
  const hoja = e.source.getActiveSheet();
  const rango = e.range;
  hoja.getRange("C2").setValue("Hola mundo");
  //gas()
  Logger.log("Se editó la celda: " + rango.getActiveSheet());
  Logger.log("Nuevo valor: " + rango.getValue());
}

function leerCelda(celda, hoja) {
  console.log("Celda :: " + celda)
  const cuaderno = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = cuaderno.getSheetByName(hoja);
  //const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const valor = sheet.getRange(celda).getValue();
  Logger.log("El valor es: " + valor);
  return valor
}

function leerCeldas() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const valor = sheet.getRange("A1:A13").getValues();
  Logger.log("El valor es: " + valor);
}

function leerTabla() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // Obtiene todos los datos con contenido
  const datos = sheet.getDataRange().getValues();

  // datos es un array de arrays: datos[fila][columna]
  for (let i = 0; i < datos.length; i++) {
    Logger.log("Fila " + i + ": " + datos[i]);
  }
}




