export function htmlOsszeAllit(lista) {
   /* itt állítjuk össze a html kódot egy stringként */

   /* <div class="kep"><img src="elérésiút" alt="cím" /></div> */

   let txt = "";
   for (let index = 0; index < lista.length; index++) {
    txt += `<div class="kep">
                <img src="${lista[index].kep}" alt="${lista[index].cim}" />
            </div>`;
    }
    console.log(txt)
    return txt
}