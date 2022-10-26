                                                                                                //  SIMULADOR INTERACTIVO DE LA TIENDA ONIXGLAM
// Definir la cantidad que desea comprar 
// Calcular el valor
// Informar lo que pidió el usuario

const menu = opcionSeleccionada => {
    switch (opcionSeleccionada) {
      case 1:
        console.log('1', opcionSeleccionada);
        cuantos('Mouse', 360);
        break;
      case 2:
        console.log('2', opcionSeleccionada);
        cuantos('carcasa de smartphone', 500);
        break;
      case 3:
        console.log('3', opcionSeleccionada);
        cuantos('audifono', 680);
      case 4:
        console.log('4', opcionSeleccionada);
        cuantos('teclado', 980);
      default: 
        alert("Ingresó una opcion invalida, Intentelo de nuevo");    
    }
  }


  //Funcion donde se le pide al usuario cuanta cantidad de productos desea
  const cuantos = (nombreDelProducto, precioDelProducto)  => {
     let cantidad = prompt(`¿Cuántas unidades del producto ${nombreDelProducto} desea?`)
     let precio = cantidad * precioDelProducto; // calculo el valor
    // informo lo que pidió
         alert(` El usuario-${nombre} seleccionó ${cantidad} ${nombreDelProducto}  y el total a pagar es $${precio}MXN`);
  } 

  //Variables

  let opcion;

  // PROGRAMA PRINCIPAL

  let nombre = prompt('Ingrese su usuario');
  const ingresarNombre = () => {
      while (nombre === "" || nombre === null  ) {
        nombre = prompt('Ingrese su nombre');
      }
      alert(`Bienvenido ${nombre} a ONIXGLAM la tienda mas grande de LATINOAMERICA`);
  }
  ingresarNombre();

  // Pido opción a comprar
  opcion = parseInt(prompt("¿Qué deseas comprar? - Ingrese solamente un numero de las siguientes opciones:\n 1-Mouse \n 2-carcasa de smartphone \n3-Audifonos \n4-Teclado \n 0-FINALIZAR"));
  while (opcion !== 0) {  // mientras que la opcion sea diferente a o se le pregunta al usuario que elija de las opciones de los contrario el programa saldra
    menu(opcion)
    // Pido opción a comprar
    opcion = parseInt(prompt("¿Qué deseas comprar? - Ingrese solamente un numero de las siguientes opciones:\n 1-Mouse \n 2-carcasa de smartphone \n3-Audifonos \n4-Teclado \n 0-FINALIZAR"));
  }
  alert("Gracias por su visita!"); // cuando tecleo 0 el programa dara por finalizado y sacara un alert donde agradece su visita.



