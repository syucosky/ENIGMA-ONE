var botonEncriptar = document.querySelector("#encriptar-codigo");
var resultado = document.querySelector("#resultado");

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var codigo = document.querySelector("#codigo").value;
    var arrayCodidgo = Array.from(codigo);

    
    resultado.value = encriptador(arrayCodidgo);
    
});

function encriptador(codigo){
    var codEncriptado = "";
    codigo.forEach(function(cod){
        console.log(cod);
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