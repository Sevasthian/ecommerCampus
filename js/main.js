//let header_information = document.querySelector(".header_information");
import { menuListCatergoryIndex } from "./components/menu.js";
import { galleryIndex } from "./components/gallery.js";
import { getAllProductName, getAllCategory, getAllProductRandom } from "./module/app.js";
import { getProductId } from "./module/detail.js";
 

let input_search = document.querySelector("#input_search");
let main_article = document.querySelector(".main_article");
let nav_ul = document.querySelector(".nav_ul");


let searchProducts = async e => {

    let params = new URLSearchParams(location.search);
    let dataSearch = { search : e.target.value, id: params.get('id')}
    input__search.value = null;
    let res = ""
    if(input__search.dataset.opc == "random"){
        res = await getAllProductRandom({})
        delete input__search.dataset.opc
        history.pushState(null, "", "?id=aps");
        console.log(dataSearch);
    }
    else {
        res = await getAllProductName(dataSearch)
        console.log(dataSearch);
    }
    console.log(res);
    main_article.innerHTML = galleryIndex(res, params.get('id'));

    let {data: {products}} = res;
    let asin = products.map(value => {return {id: value.asin}});

    let proceso = new Promise(async(resolve, reject)=>{
        for (let i = 0; i < asin.length; i++) {
            if(localStorage.getItem(asin[i].id)) continue;
            let data = await getProductId(asin[i])
            localStorage.setItem(asin[i].id, JSON.stringify(data))
        }
        resolve({message: "Datos buscados correctamente" });
    })
    Promise.all([proceso]).then(res => {console.log(res);})

}

addEventListener("DOMContentLoaded", async e=>{
    if(!localStorage.getItem("getAllCategory")) localStorage.setItem("getAllCategory", JSON.stringify(await getAllCategory()));
    nav_ul.innerHTML = await menuListCategoryIndex(JSON.parse(localStorage.getItem("getAllCategory")));  

    history.pushState(null, "", "?id=fashion");
    input_search.value = "zapato"
    const eventoChange = new Event('change');
    input_search.dispatchEvent(eventoChange);
})
input_search.addEventListener("change", searchProducts);
