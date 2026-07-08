const images = [
"images/banner1.jpg",
"images/banner2.jpg",
"images/banner3.jpg"
];

let current = 0;

setInterval(()=>{

current++;

if(current>=images.length){

current=0;

}

document.getElementById("banner").src=images[current];

},3000);
