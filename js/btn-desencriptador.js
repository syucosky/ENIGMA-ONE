var botonDesencriptar = document.querySelector("#desencriptar-codigo");
var resultado = document.querySelector("#resultado");
var error = document.querySelector("#error");

botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var codigo = document.querySelector("#codigo").value;
    var arrayCodigo = Array.from(codigo);
    
    if (validarTexto(arrayCodigo)){
        error.classList.add("mensaje-error");
        resultado.value = desencriptador(arrayCodigo);
    }else{
        error.classList.remove("mensaje-error");
   }
});

function desencriptador(codigo){
    var codDesencriptado = "";
    for (var i = 0; i < codigo.length; i++){
        var ok = true;
 
        if ((codigo[i] + codigo[i+1]) == "ai"){
            codDesencriptado += "a";
            i += 1;
            ok = false;
        }
        if ((codigo[i] + codigo[i+1] + codigo[i+2] + codigo[i+3] + codigo[i+4]) == "enter"){
            codDesencriptado += "e";
            i += 4;
            ok = false;
        }
        if ((codigo[i] + codigo[i+1] + codigo[i+2] + codigo[i+3]) == "imes"){
            codDesencriptado += "i";
            i += 3;
            ok = false;
        }
        if ((codigo[i] + codigo[i+1] + codigo[i+2] + codigo[i+3]) == "ober"){
            codDesencriptado += "o";
            i += 3;
            ok = false;
        }
        if ((codigo[i] + codigo[i+1] + codigo[i+2] + codigo[i+3]) == "ufat"){
            codDesencriptado += "u";
            i += 3;
            ok = false;
        }
        if (ok){
            codDesencriptado += codigo[i];
        }
    }
    return(codDesencriptado);
}