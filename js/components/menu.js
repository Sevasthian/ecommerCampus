export const menuListCatergoryIndex = (res)=>{
    let {data} = res;
    console.log(res)
    let plantilla = "";
    data.forEach((value,index) => {
        plantilla += /*html*/`
        <li title="${value.name}">
            <a href="?id=${value.id}" >
                <img src="storage/img/category.svg" >
                <span>${value.name}</span>
            </a>
        </li>
        `
    });
    return plantilla;
}