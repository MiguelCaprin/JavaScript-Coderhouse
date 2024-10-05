
alert("Hola! te damos la bienvenida a nuestra tienda");

let nombre = prompt("Ingrese su nombre");

alert("Bienvenido  "  +  nombre  +  "  a nuestra tienda");

let totalCompra = 0
let compraUsuario = prompt("Ingresa el nombre del producto que vas a comprar. Los productos son: camiseta, short, campera, jogging.")
while(compraUsuario !== "comprar"){ 
switch(compraUsuario){
    case "camiseta":
        totalCompra+= 10000
        compraUsuario= prompt("Usted selecciono una camiseta de Los Angeles Lakers. Ingresa el nombre de otro producto si desea comprar algo mas o la palabra 'comprar' si desea finalizar la compra.")
        break
    case "short":
        totalCompra+= 5000
        compraUsuario= prompt("Usted selecciono un short de Los Angeles Lakers. Ingresa el nombre de otro producto si desea comprar algo mas o la palabra 'comprar' si desea finalizar la compra.")
        break
    case "campera":
        totalCompra+= 15000
        compraUsuario= prompt("Usted selecciono una campera de Los Angeles Lakers. Ingresa el nombre de otro producto si desea comprar algo mas o la palabra 'comprar' si desea finalizar la compra.")
        break
    case "jogging":
        totalCompra+= 8000
        compraUsuario= prompt("Usted selecciono un jogging de Los Angeles Lakers. Ingresa el nombre de otro producto si desea comprar algo mas o la palabra 'comprar' si desea finalizar la compra.")
        break    
    default:
    compraUsuario = prompt ("La prenda que selecciono no es correcta.Ingrese el producto que desea comprar.Y si queres finalizar la comprar escribi la palabra ''comprar ")
    break          
}
}
alert("El total de su compra es : $  "  + totalCompra)
console.log(totalCompra)
