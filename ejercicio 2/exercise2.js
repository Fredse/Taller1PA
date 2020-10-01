var name = prompt("Hola Obi-Wan Kenobi por favor escriba comando de nave");
pilot1 = "Sara Bel-Sun"; 
pilot2 = "Nodin Chavdri";
pilot3 = "Finn";

if(name == "" || name== null){
    alert("ERROR LA NAVE ESCRITA NO HA SIDO ENCONTRADA");
}else{
    Naves();
}

function Naves(){
    if(name == "ARQ2555" || name == "arq2555"){

        alert("El piloto de la nave es: " + pilot1);//console.log

    }else{
        if(name == "ARQ2556" || name == "arq2556"){
        
            alert("El piloto de la nave es: " + pilot2);

        }else{

            if(name == "ARQ2557" || name == "arq2557"){
       
                alert("El piloto de la nave es: " + pilot3);

            }else{

                alert("No se encontro el piloto");
            }
        }
    }
}