/*class Punto {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public get GetX(): number {
        return this._x;
    }

    public get GetY(): number {
        return this._y;
    }
}

class Rectangulo {
    private _vertice1: Punto;
    private _vertice2: Punto;
    private _vertice3: Punto;
    private _vertice4: Punto;
    private _ladoUno: number;
    private _ladoDos: number;
    private _area: number;
    private _perimetro: number;

    constructor(v1: Punto, v3: Punto) {
        this._vertice1 = v1;
        this._vertice3 = v3;

        // Calculamos las coordenadas de los otros dos vértices
        this._vertice2 = new Punto(v1.GetX, v3.GetY);
        this._vertice4 = new Punto(v3.GetX, v1.GetY);

        // Calculamos las longitudes de los lados
        this._ladoUno = Math.abs(this._vertice1.GetX - this._vertice2.GetX);
        this._ladoDos = Math.abs(this._vertice1.GetY - this._vertice4.GetY);

        // Calculamos el área y el perímetro
        this._area = this._ladoUno * this._ladoDos;
        this._perimetro = 2 * (this._ladoUno + this._ladoDos);
    }

    public get GetArea(): number {
        return this._area;
    }

    public get GetPerimetro(): number {
        return this._perimetro;
    }

    ToString(): string {
        return `Rectángulo:
        Vértice 1: (${this._vertice1.GetX}, ${this._vertice1.GetY})
        Vértice 2: (${this._vertice2.GetX}, ${this._vertice2.GetY})
        Vértice 3: (${this._vertice3.GetX}, ${this._vertice3.GetY})
        Vértice 4: (${this._vertice4.GetX}, ${this._vertice4.GetY})
        Lado choto 1: ${this._ladoUno}
        Lado cheto 2: ${this._ladoDos}
        Área: ${this.GetArea}
        Perímetro: ${this.GetPerimetro}`;
    }
}

// Ejemplo de uso
const punto1 = new Punto(0, 0);
const punto3 = new Punto(5, 3);
const rectangulo = new Rectangulo(punto1, punto3);

// Mostrar en la consola
console.log(rectangulo.ToString());
*/
/*
import Punto from "./Punto_class";
import Rectangulo from "./Rectangulo_class";

const punto1 = new Punto(0, 0);
const punto2 = new Punto(5, 3);
const rectangulo = new Rectangulo(punto1, punto2);

console.log(rectangulo.ToString());
*/