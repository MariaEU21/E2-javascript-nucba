const pizzas = [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    },
  
    {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    },
  
    {
      id: 3,
      nombre: "pizza Napolitana",
      precio: 1350,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
    },
  
    {
      id: 4,
      nombre: "pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
    },
  
    {
      id: 5,
      nombre: "pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
    },
  
    {
      id: 6,
      nombre: "pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
    },
  ];

  console.log("Pizzas con id impar:");
pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log(pizza);
  }
});

const tienePizzaBarata = pizzas.some((pizza) => pizza.precio < 600);
console.log("¿Hay alguna pizza que valga menos de $600?");
console.log(tienePizzaBarata ? "Sí, hay una pizza barata." : "No, todas las pizzas son caras.");

console.log("Nombre y precio de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`La pizza ${pizza.nombre} tiene un valor de $${pizza.precio}.`);
});

console.log("Ingredientes de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`Ingredientes de la pizza ${pizza.nombre}:`);
  pizza.ingredientes.forEach((ingrediente) => {
    console.log(ingrediente);
  });
});
