function Hello(){

    var mensaje = "Hello Diego Developer"
    console.log(mensaje)

    a = 5,b=10;
    var suma = a + b;
    console.log(suma)
}

function numerosPrimos(n) {
    var primos = [];
    for (var i = 2; i <= n; i++) {
        var esPrimo = true; 
        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                esPrimo = false; 
                break; 
            }       
        }
        if (esPrimo) {
            primos.push(i); 
        }           
    }
    return primos;
}

