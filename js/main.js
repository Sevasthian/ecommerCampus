//let header_information = document.querySelector(".header_information");
import { menuListCatergoryIndex } from "./components/menu.js";
import { galleryIndex } from "./components/gallery.js";
import { getAllProductName, getAllCategory, getAllProductRandom } from "./module/app.js";
import { getProductId } from "./module/detail.js";
 

let input_search = document.querySelector("#input_search");
let main_article = document.querySelector(".main_article");
let nav_ul = document.querySelector(".nav_ul");


// let searchProducts = async e => {

//     let params = new URLSearchParams(location.search);
//     let dataSearch = { search : e.target.value, id: params.get('id')}
//     input_search.value = null;
//     let res = ""
//     if(input_search.dataset.opc == "random"){
//         res = await getAllProductRandom({})
//         delete input_search.dataset.opc
//         history.pushState(null, "", "?id=aps");
//         console.log(dataSearch);
//     }
//     else {
//         res = await getAllProductName(dataSearch)
//         console.log(dataSearch);
//     }
//     console.log(res);
//     main_article.innerHTML = galleryIndex(res, params.get('id'));

//     let {data: {products}} = res;
//     let asin = products.map(value => {return {id: value.asin}});

//     let proceso = new Promise(async(resolve, reject)=>{
//         for (let i = 0; i < asin.length; i++) {
//             if(localStorage.getItem(asin[i].id)) continue;
//             let data = await getProductId(asin[i])
//             localStorage.setItem(asin[i].id, JSON.stringify(data))
//         }
//         resolve({message: "Datos buscados correctamente" });
//     })
//     Promise.all([proceso]).then(res => {console.log(res);})

// }

addEventListener("DOMContentLoaded", async e=>{
    if(!localStorage.getItem("getAllCategory")) localStorage.setItem("getAllCategory", JSON.stringify(await getAllCategory()));
    nav_ul.innerHTML = await menuListCatergoryIndex(JSON.parse(localStorage.getItem("getAllCategory")));
    let params = new URLSearchParams(location.search);
    let idCategory = params.get('id');
    if(idCategory== undefined){
        let res = await getAllClothesUnder10();
        main_article.innerHTML = galleryIndex(res, "Fashion");
    }else{
        let res = await getAllProductRandom();
        main_article.innerHTML = galleryIndex(res, idCategory);
    }
})

input_search.addEventListener("change", async e => {
    let params = new URLSearchParams(location.search);
    let data = { search : e.target.value, id : params.get('id')};
    input_search.value = null;
    let res = await getAllProductName(data)
    main_article.innerHTML = galleryIndex(res, params.get('id'));
});