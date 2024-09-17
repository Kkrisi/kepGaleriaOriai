import { LISTA } from "./adat.js";
import JatekTer from "./Jatekter.js";

import NagyKartya from "./NagyKartya.js";


const taroloELEM = $(".tartalom");
const kivELEM = $(".kivalasztott");

let index = 0;

new NagyKartya(LISTA[0],kivELEM)
new JatekTer(LISTA,taroloELEM)


$(window).on("kivalaszt",(event)=>{
   console.log(event.detail)

   kivELEM.empty()
   index=event.detail.id
   new NagyKartya(event.detail, kivELEM)
})


$(window).on("jobb",(event)=>{
   index++;
   if(index===LISTA.length){index=0}
   kivELEM.empty()
   new NagyKartya(LISTA[index], kivELEM)
})



$(window).on("bal",(event)=>{
   index++;
   if(index<0){index=LISTA.length-1}
   kivELEM.empty()
   new NagyKartya(LISTA[index], kivELEM)
})