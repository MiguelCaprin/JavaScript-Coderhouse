
alert("Hola! te damos la bienvenida a nuestra tienda")


let nombreUsuario = prompt("Ingrese su nombre")



alert("Bienvenido  " + nombreUsuario + "  a nuestra tienda")


let totalCompra = 0
let compraUsuario = prompt("Ingresa el nombre del producto que vas a comprar. Los productos son: camiseta, campera, short, campera, remera.")
while (compraUsuario !== "comprar") {
    switch (compraUsuario) {
        case "camiseta":
            totalCompra += 10000
            compraUsuario = prompt("Usted selecciono una camiseta de Los Angeles Lakers. Ingresa el nombre de otro producto si desea comprar algo mas o la palabra 'comprar' si desea finalizar la compra.")
            break
        case "short":
            totalCompra += 80000
            compraUsuario = prompt("Usted selecciono un short de Los Angeles Lakers. Ingresa el nombre de otro producto si desea comprar algo mas o la palabra 'comprar' si desea finalizar la compra.")
            break
        case "campera":
            totalCompra += 150000
            compraUsuario = prompt("Usted selecciono una campera de Los Angeles Lakers. Ingresa el nombre de otro producto si desea comprar algo mas o la palabra 'comprar' si desea finalizar la compra.")
            break
        case "remera":
            totalCompra += 40000
            compraUsuario = prompt("Usted selecciono un jogging de Los Angeles Lakers. Ingresa el nombre de otro producto si desea comprar algo mas o la palabra 'comprar' si desea finalizar la compra.")
            break
        default:
            compraUsuario = prompt("La prenda que selecciono no es correcta.Ingrese el producto que desea comprar.Y si queres finalizar la comprar escribi la palabra ''comprar ")
            break
    }
}
alert("El total de su compra es : $  " + totalCompra)
console.log(totalCompra)



const arrayProductos = [
    { nombre: "Remera", precio: 40000},
    { nombre: "Short", precio: 80000 },
    { nombre: "Short", precio: 80000 },
    { nombre: "Short", precio: 80000 },
    { nombre: "Short", precio: 80000 },
    { nombre: "Short", precio: 80000 },
    { nombre: "Gorras", precio: 60000 },
    { nombre: "Gorras", precio: 60000 },
    { nombre: "Gorras", precio: 60000 },
    { nombre: "Gorras", precio: 60000 },
    { nombre: "Gorras", precio: 60000 },
    { nombre: "Campera", precio: 150000 },
    { nombre: "Campera", precio: 150000 },
    { nombre: "Campera", precio: 150000 },
    { nombre: "Campera", precio: 150000 },
    { nombre: "Campera", precio: 150000 },
    { nombre: "Camiseta", precio: 100000 },
    { nombre: "Camiseta", precio: 100000 },
    { nombre: "Camiseta", precio: 100000},
    { nombre: "Camiseta", precio: 100000},
    { nombre: "Camiseta", precio: 100000},
    { nombre: "Camiseta", precio: 100000},
    { nombre: "Camiseta", precio: 100000 },
    { nombre: "Camiseta", precio: 100000 },
    { nombre: "Camiseta", precio: 100000 },
    { nombre: "Camiseta", precio: 100000 },
    { nombre: "Camiseta", precio: 100000 },
    { nombre: "Camiseta", precio: 100000 },
    { nombre: "Camiseta", precio: 100000 },
    { nombre: "Camiseta", precio: 100000 },
    { nombre: "Camiseta", precio: 100000},
    { nombre: "Camiseta", precio: 100000 },
    { nombre: "Camiseta", precio: 100000 },
   
]
const filtrados1 = arrayProductos.filter((elm) => elm.nombre === "Remera")
console.log(filtrados1);

const filtrados2 = arrayProductos.filter((elm) => elm.nombre === "Short")
console.log(filtrados2);

const filtrados3 = arrayProductos.filter((elm) => elm.nombre === "Campera")
console.log(filtrados3);

const filtrados4 = arrayProductos.filter((elm) => elm.nombre === "Gorras")
console.log(filtrados4);

const filtrados5 = arrayProductos.filter((elm) => elm.nombre === "Camiseta")
console.log(filtrados5);


