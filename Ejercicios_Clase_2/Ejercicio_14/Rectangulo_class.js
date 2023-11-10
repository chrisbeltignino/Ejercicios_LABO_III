"use strict";
/*import Punto from "./Punto_class";

export class Rectangulo
{
    private readonly _vertice1: Punto;
    private readonly _vertice2: Punto;
    private readonly _vertice3: Punto;
    private readonly _vertice4: Punto;
    private readonly _ladoUno: number;
    private readonly _ladoDos: number;
    private readonly _area: number;
    private readonly _perimetro: number;

    constructor(v1: Punto, v3: Punto)
    {
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
    
    public get GetArea(): number{
        return this._area;
    }

    public get GetPerimetro(): number{
        return this._perimetro;
    }

    ToString(): string
    {
        return `Rectángulo:
        Vértice 1: (${this._vertice1.GetX}, ${this._vertice1.GetY})
        Vértice 2: (${this._vertice2.GetX}, ${this._vertice2.GetY})
        Vértice 3: (${this._vertice3.GetX}, ${this._vertice3.GetY})
        Vértice 4: (${this._vertice4.GetX}, ${this._vertice4.GetY})
        Lado 1: ${this._ladoUno}
        Lado 2: ${this._ladoDos}
        Área: ${this._area}
        Perímetro: ${this._perimetro}`;
    }
}

export default Rectangulo;  // Exporta la clase Punto*/ 
//# sourceMappingURL=Rectangulo_class.js.map