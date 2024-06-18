let imgid=document.getElementById("imgid");
let textid=document.getElementById("text");
let qrimg=document.getElementById("qrimg")
function generateQr(){
    if(textid.value.length>0){
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"+textid.value;
    }
    else{
      textid.classlist.add('error');  
      setTimeout(()=>{
        textid.classlist.remove('error');  
      },1000);
  
}
}