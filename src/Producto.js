export default class Producto {
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
    return this.#producto;
  }
  get getPrecio() {
    return this.#precio;
  }
  get getStock() {
    return this.#stock;
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
