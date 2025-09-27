const actividades={
    lunes: "atender a un cliente en especifico",
    martes: "visitar a una agencia fuera de la ciudad",
    miercoles: "llevar a mi hija al ballet",
    jueves: "priorizar entregasr de desarrollo",
    viernes: "atender problemas de manera remota",
    sabado: "hacer lo que mi esposa quiera"
}

function recordatorio(dia){
    dia=dia.toLowerCase();
    if (actividades[dia]) {
        return "Hoy es " + dia + "y debo " + actividades[dia];
    } else {
        return "No tienes actividades programadas para '" + dia + "'";
    }
}

function mostrarRecordatorio(){
    const diaIngresado = document.getElementById("dia").ariaValueMax.trim()
    const mensaje = recordatorio(diaIngresado);
    document.getElementById("evento").innerText = mensaje;
}