
var i = 0; 

function contador() 
{ 
i = i + 1; 
var btn = document.getElementById("boton"); 
btn.value = "Presiona Aqui (" + i + ")"; 
//document.write(+ i);
document.getElementById("contador").innerHTML= "NUMERO DE ASISTENTES: "+i


}
