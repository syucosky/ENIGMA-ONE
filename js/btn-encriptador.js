
var botonEncriptar = document.querySelector("#encriptar-codigo");
var resultado = document.querySelector("#resultado");
var error = document.querySelector("#error");

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var codigo = document.querySelector("#codigo").value;
    var arrayCodigo = Array.from(codigo);

    if (validarTexto(arrayCodigo)){
        error.classList.add("mensaje-error");
        resultado.value = encriptador(arrayCodigo);
    }else{
        error.classList.remove("mensaje-error");
   }
});

function encriptador(codigo)
    {
    var codEncriptado = "";
        codigo.forEach(function(cod){
            if (cod == "a" || cod == "e" || cod == "i" || cod == "o" || cod == "u"){
                if (cod == "a"){
                    codEncriptado += "ai";
                }
                if (cod == "e"){
                    codEncriptado += "enter";
                }
                if (cod == "i"){
                    codEncriptado += "imes";
                }
                if (cod == "o"){
                    codEncriptado += "ober";
                }
                if (cod == "u"){
                    codEncriptado += "ufat";
                }
            }else{
                codEncriptado += cod;
            }
        });
        return codEncriptado;
}
function validarTexto(codigo){
    var ok = false;
    for (var i = 0; i < codigo.length; i++){
        if (codigo[i].codePointAt(0) >= 97 && codigo[i].codePointAt(0) <= 122){
            ok = true;
        }else{
            ok = false;
            break;
        }
    }
    return ok;
}