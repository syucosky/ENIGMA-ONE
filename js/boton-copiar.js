var botonCopiar = document.querySelector("#copiar");


botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    copiar();
});

function copiar(){
    var copiar = document.querySelector("#resultado");
    copiar.select();
    document.execCommand("copy");
}