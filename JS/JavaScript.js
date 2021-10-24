
var valorTicket=200; 

function resumen() {
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;
    
    if(cantidad <= 0){
        alert("Recuerde que debe seleccionar una cantidad de entradas positivas y no nulas o vacias.");
    }

    var importe; 
    switch(categoria){
        case 'Junior': 
            importe= calculoDescuento(0.15,cantidad);
            break;
        case 'Estudiante':
            importe= calculoDescuento(0.8,cantidad);
            break;
        case 'Trainee':
            importe= calculoDescuento(0.5,cantidad);
            break;
    }

    document.getElementById("importeTotal").value = "Total a pagar: "+ "$" + importe;
}


function calculoDescuento(descuento,cantidad) {
    
    return valorTicket*cantidad-(valorTicket*cantidad*descuento); 
}