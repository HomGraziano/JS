const Pizzas = [
    {
        id: 1,
        nombre: "Grande de mozzarella",
        ingredientes: ["Salsa de tomate", "Mozzarella", "Aceitunas"],
        precio: 400
    },
    {
        id: 2,
        nombre: "Calabresa",
        ingredientes: ["Salsa de tomate", "Calabresa", "Mozzarella"],
        precio: 775
    },
    {
        id: 3,
        nombre: "Rúcula",
        ingredientes: ["Queso mozzarella", "Jamón crudo", "Rúcula", "Aceitunas negras",],
        precio: 1000
    },
    {
        id: 4,
        nombre: "Napolitana",
        ingredientes: [ "Queso mozzarella", "Tomate","Salsa de tomate"],
        precio: 950
    },
    {
        id: 5,
        nombre: "Provolone",
        ingredientes: ["Salsa de tomate", "Mozzarella", "Provolone"],
        precio: 1200
    },
    {
        id: 6,
        nombre: "Fugazzetta",
        ingredientes: ["Mozzarella", "Cebolla"],
        precio: 800
    }


]

//Pizza con precio menor a $600 

const PizzaM600 = Pizzas.some((pizza) => pizza.precio < 600)

PizzaM600 ? console.log("Hay algun producto por debajo de $600") : console.log("No hay ningun producto por debajo de $600")

//Pizzas con id impar

const PizzasImpar = Pizzas.filter(pizza => pizza.id % 2 !== 0)

PizzasImpar.forEach(pizza => console.log(`La siguiente pizza tiene un id impar  ${pizza.nombre}.`))

//Ingredientes

Pizzas.forEach((pizza) => {
    console.log(`La pizza ${pizza.nombre} tiene de ingredientes:`)
    pizza.ingredientes.forEach((ingrediente) => {
        console.log(ingrediente)
    })
})

//Nombre precio

Pizzas.forEach((pizza) => console.log(`La Pizza ${pizza.nombre} tiene un valor de $${pizza.precio}`))



