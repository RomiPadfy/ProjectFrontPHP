//const totalAPagar = document.getElementById("inputTotalPagar")

//console.log(totalAPagar)
//console.log(totalAPagar.value)


var cantidad = document.getElementById("inputCantidad")


//var valorCantidad = parseFloat(cantidad.value);




var categoria = document.getElementById("inputCategoria")
console.log(categoria.value)

var valorCategoria = categoria.value


function calcularTotal(){
    var categoria = document.getElementById("inputCategoria")
    console.log(categoria.value)

    var valorCategoria = categoria.value

    valorCantidad = parseFloat(cantidad.value);

    console.log(valorCantidad)
    console.log(valorCategoria)

    subtotal = valorCantidad*200

    console.log("el subtotal es: "+ subtotal)

    if(valorCategoria === "estudiante"){

            console.log("esto es un estudiante")
            total = subtotal-(subtotal*80/100)
            console.log(total)
    }else if(valorCategoria === "trainee"){
        console.log("esto es un trainee") 
        total = subtotal-(subtotal*50/100)
        console.log(total)
    }else{
        console.log("esto es un junior") 
        total = subtotal-(subtotal*15/100)
        console.log(total)
    }

    var leyendaTotal = document.getElementById("total")
     
    console.log(leyendaTotal.textContent)

    leyendaTotal.textContent = "Total a pagar: $"+ total
        
}