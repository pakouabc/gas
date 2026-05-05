function doGet(e) {
  return HtmlService.createTemplateFromFile('index').evaluate();
}


/* PROCESS FORM */
function processForm(formObject){  
  var result = "";
  if(formObject.searchtext){//Execute if form passes search text
      result = search(formObject.searchtext);
     // if(formObject.searchtext =='nestor'){
       // Sheets.SpreadsheetApp.getUi().alert("Alert message");
      //}
  }
  return result;
}

//SEARCH FOR MATCHED CONTENTS 
function search(searchtext){
  var spreadsheetId   = '---------------------------------------'; //** CHANGE !!!
  var dataRange        = 'Almacen!B2:J';                                    //** CHANGE !!!
  var data = SpreadsheetApp.openById(spreadsheetId)
             .getRange(dataRange)
             .getValues();
  var ar = [];
  console.log(data);
  data.forEach(function(f) {
      ind = f[0].includes(searchtext)
      console.log(f[0] + " ?= " + searchtext + "  ==>>  " + ind);

    if (ind) {
      ar.push(f);
      console.log(ind);
    }
  });
  console.log("dato agregados " + ar);
  return ar;
}
//search("TIZNADO");



function search_fail(){
  var spreadsheetId   = '---------------------------------------'; //** CHANGE !!!
  var dataRange        = 'Almacen!B2:B';                                    //** CHANGE !!!
  var data = SpreadsheetApp.openById(spreadsheetId)
             .getRange(dataRange)
             .getValues();
//  const valor = sheet.getRange("A1:A13").getValues();
  var ar = [];
  var abc = "1236547890=-_+;'.,.<></?:"
  data.forEach(function(f) {
      palabra = f[0].split("")
      palabra.forEach(function(c){
          if (c == '�'){
            console.log("Tienes DEFECTO ==> " + palabra)
          }
      }
    )
      //console.log(f[0] + " ?= " + f[0].split(""));

  });
  return ar;
}
