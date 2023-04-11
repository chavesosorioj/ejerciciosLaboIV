export class Calculos {

    numero1: number=0;
    numero2: number=0;
    resS: number=0;
    resP: number=0;

    promedio(){
        this.resP = (Number(this.numero1) + Number(this.numero2))/2;
      }

    sumar(){
        this.resS = Number(this.numero1) + Number(this.numero2);
    }
}
