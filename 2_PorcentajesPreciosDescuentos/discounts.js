
//const priceOriginal = 120;
//const discount = 18;
//const percentajePricewithDiscount = 100 - discount;
//const priceDiscounted =  (priceOriginal * percentajePricewithDiscount) / 100;

//console.log({
//    priceOriginal,
//    discount,
//    percentajePricewithDiscount,
//    priceDiscounted
//});

function calcPricewDiscount(price, discount){
    const percentajePricewithDiscount = 100 - discount;
    const priceDiscounted =  (price * percentajePricewithDiscount) / 100;
    return priceDiscounted;
}


function calculatePrice() {
    const inputPrice = document.getElementById("input-price");
    const inpuDiscount = document.getElementById("input-discount");
    const Pval1 = inputPrice.value;
    const Dval2 = inpuDiscount.value;
    const price =  calcPricewDiscount(Pval1,Dval2);
    const result = document.getElementById("finalPrice");
    result.innerText = "El precio con descuento son: $" + price;
}