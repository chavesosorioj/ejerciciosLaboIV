export class Promedio {
    numero1: number=0;
    numero2: number=0;
    resultado: number=0;

    promedio(){
        this.resultado = Number(this.numero1) + Number(this.numero2)/2;
      }
}
