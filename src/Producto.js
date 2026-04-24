class Producto {
  #producto;
  #precio;
  #stock;

  constructor(producto, precio, stock) {
    this.#producto = producto;
    this.#precio = precio;
    this.#stock = stock;
    if (typeof producto !== 'string') {
      throw new Error('El nombre del producto debe ser texto');
    }

    if (typeof precio !== 'number' || precio < 0) {
      throw new Error('El precio debe ser un número positivo');
    }

    if (!Number.isInteger(stock) || stock < 0) {
      throw new Error('El stock debe ser un entero positivo');
    }
  }
  //GETTER PARA LECTURA DE CADA CAMPO
  get getProducto() {
    return `Producto: ${this.#producto}`;
  }
  get getPrecio() {
    return `Precio: $${this.#precio}`;
  }
  get getStock() {
    return `Stock de ${this.#producto}: ${this.#stock}ud disponibles`;
  }

  //SETTER DE VALIDACION DE CAMPOS EN CASO DE SUSTITUCION

  set setNuevoPrecio(nuevoPrecio) {
    if (nuevoPrecio >= 0) {
      this.#precio = nuevoPrecio;
      return `(Nuevo Precio: $${nuevoPrecio}) agregado correctamente`;
    } else {
      throw new Error('Campo rellenado incorrectamente');
    }
  }
  set setNuevoStock(nuevoStock) {
    if (nuevoStock % 1 === 0) {
      this.#precio = nuevoPrecio;
      return `(Nuevo Stock: $${nuevoStock}) agregado correctamente`;
    } else {
      throw new Error('Campo rellenado incorrectamente');
    }
  }
  //GETTER RESUMEN
  get getResumen() {
    return `Producto: ${this.#producto} -- Precio: $${this.#precio} -- Stock: ${this.#stock}ud`;
  }
  //GETTER VERIFICAR STOCK EN BOOLEAN
  get getDisponible() {
    if (this.#stock >= 1) {
      return true;
    } else {
      return false;
    }
  }

  aplicarDescuento(porcentaje) {
    if (porcentaje >= 0) {
      this.#precio = this.#precio * (1 - porcentaje / 100);
      return 'Descuento aplicado correctamente';
    } else {
      throw new Error('Ingrese descuento valido');
    }
  }

  static desdeObjeto({ nombre, precio, stock }) {
    return new Producto(nombre, precio, stock);
  }
}

const nuevosProductos = [
  { nombre: 'Samsung S23', precio: 100, stock: 50 },
  { nombre: 'Apple Pencil', precio: 10, stock: 10 },
  { nombre: 'Tv Phillips 30 Pulgadas', precio: 800, stock: 20 },
  { nombre: 'Xiaomi Mouse', precio: 50, stock: 100 },
];

const listaProductos = nuevosProductos.map(p => Producto.desdeObjeto(p));

console.log(listaProductos);

// nuevoProducto.getDisponible;
// nuevoProducto.aplicarDescuento(50);
// nuevoProducto.getResumen;
// nuevoProducto.setNuevoPrecio = 10;
// nuevoProducto.setNuevoStock = 10;
// nuevoProducto.getProducto;
// nuevoProducto.getPrecio;
// nuevoProducto.getStock;

// feat: clase Producto con campos privados, getters y setters
