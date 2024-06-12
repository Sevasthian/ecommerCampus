//let header_information = document.querySelector(".header_information");
import { menuListCatergoryIndex } from "./module/menu.js";
import { galleryIndex } from "../components/gallery.js";
import { getAllProductName,getAllCategory } from "./module/app.js";

 


let input_search = document.querySelector("#input_search");
let main_article = document.querySelector(".main_article");
let nav_ul = document.querySelector(".nav_ul");

addEventListener("DOMContentLoaded", async(e)=>{
    let data = await getAllCategory();
    nav_ul.innerHTML = await menuListCatergoryIndex(data);
})

input_search.addEventListener("change", async e =>{
    let data = {search : e.target.value};
    input_search.value = null;

    let res = await getAllProductName(data)
    main_article.innerHTML += galleryIndex(res);
})
