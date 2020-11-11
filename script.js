function Letoltes(){ 
    var text = document.getElementById("textArea").value;
    text = text.replace(/\n/g, "\r\n");
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "Tételem.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }

 $('.table-group').on('input', '.prc', function () {
   var totalSum = 0;
   $('.table-group .prc').each(function () {
     var inputVal = $(this).val();
     if ($.isNumeric(inputVal)) {
       totalSum += parseFloat(inputVal);
     }
   });
   $('#result').val(totalSum);
 });
 $('.table-group').on('input', '.prc1', function () {
   var totalSum = 0;
   $('.table-group .prc1').each(function () {
     var inputVal = $(this).val();
     if ($.isNumeric(inputVal)) {
       totalSum += parseFloat(inputVal);
     }
   });
   $('#result1').val(totalSum);
 });
 $('.table-group').on('input', '.prc2', function () {
   var totalSum = 0;
   $('.table-group .prc2').each(function () {
     var inputVal = $(this).val();
     if ($.isNumeric(inputVal)) {
       totalSum += parseFloat(inputVal);
     }
   });
   $('#result2').val(totalSum);
 });
 $('.table-group').on('input', '.prc3', function () {
   var totalSum = 0;
   $('.table-group .prc3').each(function () {
     var inputVal = $(this).val();
     if ($.isNumeric(inputVal)) {
       totalSum += parseFloat(inputVal);
     }
   });
   $('#result3').val(totalSum);
 });
 $('.table-group').on('input', '.prc4', function () {
   var totalSum = 0;
   $('.table-group .prc4').each(function () {
     var inputVal = $(this).val();
     if ($.isNumeric(inputVal)) {
       totalSum += parseFloat(inputVal);
     }
   });
   $('#result4').val(totalSum);
 });
 $('.table-group').on('input', '.prc5', function () {
   var totalSum = 0;
   $('.table-group .prc5').each(function () {
     var inputVal = $(this).val();
     if ($.isNumeric(inputVal)) {
       totalSum += parseFloat(inputVal);
     }
   });
   $('#result5').val(totalSum);
 });
 $('.table-group').on('input', '.prc6', function () {
   var totalSum = 0;
   $('.table-group .prc6').each(function () {
     var inputVal = $(this).val();
     if ($.isNumeric(inputVal)) {
       totalSum += parseFloat(inputVal);
     }
   });
   $('#result6').val(totalSum);
 });
 $('.table-group').on('input', '.prc7', function () {
   var totalSum = 0;
   $('.table-group .prc7').each(function () {
     var inputVal = $(this).val();
     if ($.isNumeric(inputVal)) {
       totalSum += parseFloat(inputVal);
     }
   });
   $('#result7').val(totalSum);
 });
 $('.table-group').on('input', '.prc8', function () {
   var totalSum = 0;
   $('.table-group .prc8').each(function () {
     var inputVal = $(this).val();
     if ($.isNumeric(inputVal)) {
       totalSum += parseFloat(inputVal);
     }
   });
   $('#result8').val(totalSum);
 });
 $('.table-group').on('input', '.prc8', function () {
   var totalSum = 0;
   $('.table-group .prc8').each(function () {
     var inputVal = $(this).val();
     if ($.isNumeric(inputVal)) {
       totalSum += parseFloat(inputVal);
     }
   });
   $('#result8').val(totalSum);
 });



