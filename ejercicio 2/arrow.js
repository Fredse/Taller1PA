var name = prompt("Hola Obi-Wan Kenobi por favor escriba comando de nave");
pilot1 = "Sara Bel-Sun"; 
pilot2 = "Nodin Chavdri";
pilot3 = "Finn";

if(name == "" || name== null){
    alert("ERROR");
}else{
    var pilot = (name) => name;
    name == "ARQ2555" ? alert(pilot1):name == "ARQ2556" ? alert(pilot2):name == "ARQ2557" ? alert(pilot3): alert("NO SE ENCONTRO");
}