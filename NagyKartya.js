export default class Kartya {
  //adattagok
  #obj = {}; //privát adattag
  #szuloElem;
  //construktor -
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.kiir();
    this.jobbELEM=$(".jobb")
    this.jobbELEM.on("click",()=>(this.#esemenyTrigger("jobb")))

    this.balELEM=$(".bal")
    this.balELEM.on("click",()=>(this.#esemenyTrigger("bal")))
  }




  //tagfüggvény
  kiir() {
    //egyetlen egy kép kíírása
    this.#szuloElem.append(`
            <div class="card kivalaszt">
                <div class="card-body">
                    <h3>${this.#obj.cim}</h3>              
                    <img src="${this.#obj.url}" alt="${this.#obj.cim}" class="card-img-top">
               </div>
            </div>
            `);
  }

  #esemenyTrigger(){
    const e = new CustomEvent("jobb");
    window.dispatchEvent(e);
  }


 
}
