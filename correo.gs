function sendCorreo(){
  const destinatario = "pako@uabc.edu.mx";
  const asunto = "Reporte Diario de Ventas"
  const cuerpo = `
    Estimado equipo,
    Este reporte fue generado automáticamente.
  `;

  GmailApp.sendEmail(destinatario, asunto, cuerpo);
  console.log("Reporte enviado a " + destinatario);
}