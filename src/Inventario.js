import Producto from './Producto';
class Inventario {
  #productos = [];

  //METODOS DE GESTION DE INVENTARIO
  agregar(nombre, precio, stock) {
    const producto = new Producto(nombre, precio, stock);
    this.#productos.push(producto);
    return 'Producto Agregado';
  }

  buscar(nombre) {
    return this.#productos.find(p =>
      p.getProducto.toLowerCase().includes(nombre.toLowerCase()),
    );
  }

  eliminar(nombre) {
    const index = this.#productos.findIndex(
      p => p.getProducto.toLowerCase() === nombre.toLowerCase(),
    );

    if (index === -1) {
      return 'Producto no encontrado';
    }

    this.#productos.splice(index, 1);

    return 'Producto eliminado';
  }

  //GETTER OPCIONES DE ESTADISTICA
  get getTotal() {}

  get getValorTotal() {}

  get getSinStock() {}

  //METODO CREAR INVENTARIO DESDE ESTATICO
  static desdeArray([arr]) {}
}

// const nuevoProducto = new Inventario();
// console.log(nuevoProducto.agregar('Laptop', 200, 10));
// console.log(nuevoProducto.buscar('Laptop'));
// console.log(nuevoProducto.eliminar('Laptop'));
