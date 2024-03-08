import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/* 1. feladat: galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const galeriaELEM = document.getElementsByClassName("galeria");
/* írd bele az összeállított html képsorozatot */
galeriaELEM[0].innerHTML = htmlOsszeAllit(KEPEK)

/* 2. feladat: A .nagykep divben lévő img elem megfogása */
const nagyKEPELEM = document.querySelector(".nagykep img");
/* A .nagykep div megfogása */
const nagyKEPDIVELEM = document.querySelector(".nagykep div");
/* 3. feladat: eseménykezelő hozzáadása a kisképekhez */

/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const galeriaKEPEK = document.querySelectorAll(".kep img");

/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for (let index = 0; index < galeriaKEPEK.length; index++) {
    galeriaKEPEK[index].addEventListener("click", function (event) {
        nagyKEPELEM.src = event.target.src;
        aktIndex = index;
    });
}

/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */


/* 4. feladat: .bal és a .jobb gombokra kattintva léptessük a galériát */
let aktIndex = 0;

const balGOMB = document.querySelector(".bal");
balGOMB.addEventListener("click", function () {
    aktIndex--;
    aktIndex = aktIndex % KEPEK.length;
    nagyKEPELEM.src = KEPEK[aktIndex].kep;
});

const jobbGOMB = document.querySelector(".jobb");
jobbGOMB.addEventListener("click", function () {
    aktIndex++;
    aktIndex = aktIndex % KEPEK.length;
    nagyKEPELEM.src = KEPEK[aktIndex].kep;
});