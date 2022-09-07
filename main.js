let shop = document.getElementById('shop');
let shopItemsData = [
    {
    id: "123",
    name: "Casual Shirt",
    price: 45,
    desc: "Here comes the description of the product that is pretender to be purshaced.",
    img: "images/img-1.jpg"
    },
    {
        id: "123",
        name: "Casual Scco",
        price: 45,
        desc: "Here comes the description of the product that is pretender to be purshaced.",
        img: "images/img-2.jpg"
    },
    {
        id: "456",
        name: "Casual Thing",
        price: 45,
        desc: "Here comes the description of the product that is pretender to be purshaced.",
        img: "images/img-3.jpg"
        },
        {
            id: "123",
            name: "Casual Shirt",
            price: 45,
            desc: "Here comes the description of the product that is pretender to be purshaced.",
            img: "images/img-4.jpg"
        },
];


let generateShop = () =>{
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            return `
            <div id="product-id-${x.id}" class="item">
            <img width="200" src="${x.img}" alt="">
            <div class="details">
                <h3>${x.name}</h3>
                <p>${x.desc}</p>
                <div class="price-quantity">
                    <h2>$ ${x.price}</h2>
                    <div class="buttons">
                        <i class="bi bi-plus-lg"></i>
                        <div class="quantity">0</div>
                        <i class="bi bi-dash-lg"></i>
                    </div>
                </div>
            </div>
            </div>
            `;
        }).join(""));
};

generateShop();