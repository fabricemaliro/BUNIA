
function generateur() {
        var qr_text=document.querySelector(".qr_text");
        var codeQr=document.querySelector(".qr_code");
        codeQr.style.display="flex";
        codeQr.innerHTML="";//Initialisation
        new QRCode(codeQr,qr_text.value);
        //Effacons le contenu de notre div
        qr_text.value="";
    }