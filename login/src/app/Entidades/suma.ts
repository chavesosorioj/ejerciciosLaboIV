export class Suma {
    numero1: string ='';
    numero2: string ='';
    resultado=0;

    sumar(){
      //return String(parseInt(this.numero1) + parseInt(this.numero2));
      this.resultado = Number(this.numero1) + Number(this.numero2);
      }
}
