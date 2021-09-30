const input = document.getElementById("convert").value
const result = document.getElementById("result")




function convertir() {
//  let org = ["07", "08", "09", "47", "48", "49", "57", "58", "59", "67", "68", "69", "77", "78", "79", "87", "88", "89", "97", "98", "99"];
//  let mtn = ["04", "05", "06", "44", "45", "46", "54", "55", "56", "64", "65", "66", "74", "75", "76", "84", "85", "86", "94", "95", "96"];
//  let moov = ["01", "02", "03", "41", "42", "43", "51", "52", "53", "61", "62", "63", "71", "72", "73", "81", "82", "83", "91", "92", "93"];
 let firstNum = input[0]+input[1];
if (input.length === 8) {
  let text  
  switch(firstNum) {
     case "01":
     case "02":
     case "03":
       text = "Votre numero a 10 chiffres est : 01" + input;
     break;
     case "04":
     case "05":
     case "06":
         text = "Votre numero a 10 chiffres est : 05" + input;
     break;
     case "07": 
     case "08": 
     case "09":
         text = "Votre numero a 10 chiffres est : 07" + input;
     break;
     default:
     text = "Le numero n'est pas pris en compte dans la convertion";
   }
   result.innerHTML = text;

  
} else {
  result.innerHTML = "Votre numero doit etre 8 chiffres"
   
}
    

}