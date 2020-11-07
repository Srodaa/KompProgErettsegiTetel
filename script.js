function download(){ 
    var text = document.getElementById("textArea").value;
    text = text.replace(/\n/g, "\r\n");
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "my-filename.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }


  
function findTotal(){
   var arr = document.getElementsByName('osszeg');
   var tot=0;
   for(var i=0;i<arr.length;i++){
       if(parseInt(arr[i].value))
           tot += parseInt(arr[i].value);
   }
   document.getElementById('total').value = tot;
}
