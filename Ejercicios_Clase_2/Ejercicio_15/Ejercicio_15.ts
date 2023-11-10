abstract class FiguraGeometrica 
{
    protected _color: string = '';
    protected _perimetro: number = 0;
    protected _superficie: number = 0;

    constructor(color: string) {
    this._color = color;
    }

    abstract CalcularDatos(): void;

    abstract Dibujar(): string;

    GetColor(): string {
    return this._color;
    }

    SetColor(color: string): void {
    this._color = color;
    }

    ToString(): string {
    return `Color: ${this._color}\nSuperficie: ${this._superficie}\nPerímetro: ${this._perimetro}`;
    }
}
    
class Rectangulo extends FiguraGeometrica {
    private _ladoUno: number = 0;
    private _ladoDos: number = 0;

    constructor(ladoUno: number, ladoDos: number, color: string) {
    super(color);
    this._ladoUno = ladoUno;
    this._ladoDos = ladoDos;
    this.CalcularDatos();
    }

    CalcularDatos(): void {
    this._superficie = this._ladoUno * this._ladoDos;
    this._perimetro = 2 * (this._ladoUno + this._ladoDos);
    }

    Dibujar(): string {
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
    private _base: number = 0;
    private _altura: number = 0;

    constructor(base: number, altura: number, color: string) {
    super(color);
    this._base = base;
    this._altura = altura;
    this.CalcularDatos();
    }

    CalcularDatos(): void {
    this._superficie = (this._base * this._altura) / 2;
    this._perimetro = this._base + 2 * Math.sqrt(Math.pow(this._base / 2, 2) + Math.pow(this._altura, 2));
    }

    Dibujar(): string {
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