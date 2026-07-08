const products = [

{
id:1,
brand:"Kalki",
name:"Sona Masuri Broken Raw Rice",
category:"Raw Rice",
weight:"26 Kg",
price1:933,
price6:930,
price16:928,
image:"images/products/kalki.jpg"
},

{
id:2,
brand:"Meera",
name:"Sona Masuri Raw Rice",
category:"Raw Rice",
weight:"26 Kg",
price1:1545,
price6:1540,
price16:1535,
image:"images/products/meera.jpg"
},

{
id:3,
brand:"Rajbhog",
name:"Premium Basmati Rice",
category:"Raw Rice",
weight:"26 Kg",
price1:2490,
price6:2475,
price16:2460,
image:"images/products/rajbhog.jpg"
}

];

const container=document.getElementById("productContainer");

function loadProducts(list){

container.innerHTML="";

list.forEach(product=>{

container.innerHTML+=`

<div class="product-card">

<img src="${product.image}" alt="">

<div class="info">

<h3>${product.brand}</h3>

<p>${product.name}</p>

<p>${product.weight}</p>

<div class="prices">

<div>16+<br>₹${product.price16}</div>

<div>6+<br>₹${product.price6}</div>

<div>1+<br>₹${product.price1}</div>

</div>

<button>Add</button>

</div>

</div>

`;

});

}

loadProducts(products);
