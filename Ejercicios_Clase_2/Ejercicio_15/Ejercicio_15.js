"use strict";
class FiguraGeometrica {
    constructor(color) {
        this._color = '';
        this._perimetro = 0;
        this._superficie = 0;
        this._color = color;
    }
    GetColor() {
        return this._color;
    }
    SetColor(color) {
        this._color = color;
    }
    ToString() {
        return `Color: ${this._color}\nSuperficie: ${this._superficie}\nPerímetro: ${this._perimetro}`;
    }
}
class Rectangulo extends FiguraGeometrica {
    constructor(ladoUno, ladoDos, color) {
        super(color);
        this._ladoUno = 0;
        this._ladoDos = 0;
        this._ladoUno = ladoUno;
        this._ladoDos = ladoDos;
        this.CalcularDatos();
    }
    CalcularDatos() {
        this._superficie = this._ladoUno * this._ladoDos;
        this._perimetro = 2 * (this._ladoUno + this._ladoDos);
    }
    Dibujar() {
        let dibujo = '';
        for (let i = 0; i < this._ladoDos; i++) {
            for (let j = 0; j < this._ladoUno; j++) {
                dibujo += '*';
            }
            dibujo += '\n';
        }
        return dibujo;
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(base, altura, color) {
        super(color);
        this._base = 0;
        this._altura = 0;
        this._base = base;
        this._altura = altura;
        this.CalcularDatos();
    }
    CalcularDatos() {
        this._superficie = (this._base * this._altura) / 2;
        this._perimetro = this._base + 2 * Math.sqrt(Math.pow(this._base / 2, 2) + Math.pow(this._altura, 2));
    }
    Dibujar() {
        let dibujo = '';
        for (let i = 0; i < this._altura; i++) {
            const espacios = this._altura - i - 1;
            const asteriscos = i * 2 + 1;
            dibujo += ' '.repeat(espacios) + '*'.repeat(asteriscos) + ' '.repeat(espacios) + '\n';
        }
        return dibujo;
    }
}
// Ejemplo de uso para un rectángulo
const rectangulo = new Rectangulo(5, 3, 'Rojo');
console.log(rectangulo.ToString());
console.log(rectangulo.Dibujar());
// Ejemplo de uso para un triángulo
const triangulo = new Triangulo(4, 3, 'Verde');
console.log(triangulo.ToString());
console.log(triangulo.Dibujar());
