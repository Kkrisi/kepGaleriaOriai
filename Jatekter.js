import Kartya from "./Kartya.js";

export default class JatekTer {
    #lista=[]
    #taroloElem
    constructor(lista, taroloELEM) {
        this.#lista=lista
        this.#taroloElem=taroloELEM
        this.#taroloElem.empty()
        this.kiir()
    }

    kiir(){
        this.#lista.forEach((elem) => {
            console.log(elem);
            new Kartya(elem, this.#taroloElem);
          });
    }
  
}