/*
Crea una aplicación web para gestionar una lista de productos, 
donde el usuario pueda agregar productos a través de un formulario.
 Los productos se deben almacenar en Local Storage 
 y mostrarse en una tabla en la página web.
  Si el usuario agrega un producto que ya existe,
   en lugar de duplicarlo,
    se debe incrementar un contador que indique 
    cuántas veces se ha agregado el producto.
     Además, añade un botón "Eliminar" para cada producto que,
      al hacer clic, debe decrementar el contador de ese producto.
       Si el contador llega a cero, 
       el producto debe eliminarse de la lista y del Local Storage.
*/

//pseudocodigo
/*
Inicio
crear funcion que permita agregar elementos a un array lista de productos
esta lista se debera almacenar local eStorage 
si se agrega un producto se añade a la lista
si se vuelve a agregar la lista mantiene un producto con un contador indicandodos unidades
la funcion añade un boton de eliminar producto
si el producto llega a cero desaparece de la lista
*/

const arrayProductos = []
