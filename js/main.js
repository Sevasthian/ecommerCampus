//let header_information = document.querySelector(".header_information");
import { menuListCatergoryIndex } from "./components/menu.js";
import { galleryIndex } from "./components/gallery.js";
import { getAllProductName,getAllCategory } from "./module/app.js";

 


let input_search = document.querySelector("#input_search");
let main_article = document.querySelector(".main_article");
let nav_ul = document.querySelector(".nav_ul");

addEventListener("DOMContentLoaded", async e=>{
    if(!localStorage.getItem("getAllCategory"))localStorage.setItem("getAllCategory", JSON.stringify(await getAllCategory())); 
    nav_ul.innerHTML = await menuListCatergoryIndex(JSON.parse(localStorage.getItem("getAllCategory")));
})

input_search.addEventListener("change", async e =>{
    let params = new URLSearchParams(location.search);
    let data = {search : e.target.value, id: params.get('id')};
    input_search.value = null;


    let res = await getAllProductName(data)
    main_article.innerHTML += galleryIndex(res, params.get('id'));
})
