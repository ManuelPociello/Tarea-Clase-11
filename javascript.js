let topping = prompt("Ingresa el helado que quieres");
let precio;
let precioFinal;
let helado = 20;
if (topping == "Oreo"){
    precio = 10;
    precioFinal = precio + helado;
    console.log("El helado cuesta $" + precioFinal);
}
else if (topping == "KitKat"){
    precio = 15;
    precioFinal = precio + helado;
    console.log("El helado cuesta $" + precioFinal);
}
else if (topping == "Kinder"){
    precio = 25;
    precioFinal = precio + helado;
    console.log("El helado cuesta $" + precioFinal);
}
else {
    console.log("No tenenmos este topping");
}
let pedido = prompt("Indique su pedido")
switch(pedido){
    case "carne":
        console.log("Quiere acompañarlo con vino tinto");
        break;
    case "pescado":
        console.log("Quiere acompañarlo con vino blanco");
        break;
    case "verdura":
        console.log("Quiere acompañarlo con agua");
        break;
    default:
        console.log("Elija carne, pescado o verdura");
}
let nombres = ["Manuel", "Enzo", "Sandra"]
for (let i=0; i<nombres.length; i++){
    console.log(nombres[i]);
}
nombres.push (prompt("Ingrese otro nombre"));
for (let i=0; i<nombres.length; i++){
    console.log(nombres[i]);
}
let numero = 0;
while (numero<11){
    console.log("El numero " + numero + " es mas chico que 11");
    numero = numero + 1;
}