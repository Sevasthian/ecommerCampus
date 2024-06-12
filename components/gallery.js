export const galleryIndex = (res)=>{
    let {products} = res.data
    let plantilla = "";
    products.forEach(vale, index) => {
        plantilla += return /*html*/`
        <section>
            <div class="section_front_page">
                <a href="views/detail.html">
                    <img src="storage/img/img4.png">
                </a>
                <img src="storage/img/heart.svg">
            </div>
            <h5>Moder light clothes</h5>
            <small>Dress modern</small>
            <div class="section_price">
                <span>$212.99</span>
                <div class="price_score">
                    <img src="storage/img/star.svg">
                    <p>5.0</p>
                </div>
            </div>
        </section>
        `;
    }
};