class Sentimientos {
  constructor(nombre, representacion){
    this.nombre=nombre;
    this.representacion=representacion;
  }
}
var usar =new Sentimientos("ira","malo");


console.log(usar.nombre)
console.log(usar.representacion)
console.log(usar.nom);



class Version2 extends Sentimientos{
  constructor(nombre){
    super(nombre, "bueno")
    
  }

}

var usar1 =new Version2 ("ira");
console.log(usar1.nombre);
console.log(usar1.representacion)


// class SentimientoBueno {
//   constructor(nombre){
//     this.nombre= nombre;
//     this.representacion="bueno";
//   }
// }


// var segundaInst =new SentimientoBueno("bondad");

// console.log (segundaInst.nombre);
// console.log (segundaInst.representacion)
/////
