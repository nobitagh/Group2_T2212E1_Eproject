var data = [
    {"id":"p01","name":"prada pr 04wv", "pic":"PR04WV.jpeg","price":288,"description":"These glasses from Prada feature a classic rectangular frame with a modern twist. The frame is made of high-quality acetate and has a tortoise shell pattern. The temples are embellished with the Prada logo and have a metal accent for added style.", "cat":"prada",},
    
    {"id":"p02","name":"prada pr 51yv", "pic":"PradaPR51YV.jpeg","price":713, "description":"These Prada glasses have a unique frame shape that is both bold and modern. The frame is made of high-quality metal and has a semi-rimless design. The temples feature the iconic Prada logo and have a sleek, streamlined look.","cat":"prada"},

    {"id":"p03","name":"gucci gg0241O", "pic":"gucci_gg0241.png","price":625,"description":"These glasses from Gucci are a stylish choice for those who want a classic look with a modern twist. The frame is made of high-quality acetate and has a square shape with rounded edges. The temples feature the iconic Gucci logo and have a bold, oversized design.", "cat":"gucci"},

    {"id":"p04","name":"gucci gg0025O", "pic":"gucci_gg0025.png","price":350,"description":"These Gucci glasses have a classic design that is both timeless and sophisticated. The frame is made of high-quality metal and has a rectangular shape with rounded edges. The temples feature the iconic Gucci logo and have a sleek, streamlined design.", "cat":"gucci"},

    {"id":"p05","name":"dior stellaiteo11", "pic":"DIOR_STELLAIREO11.jpg","price":82,"description":"These glasses from Dior are a stylish and modern choice for those who want to make a statement. The frame is made of high-quality metal and has a round shape with a sleek, minimalist design. The temples are embellished with the Dior logo and have a unique, asymmetrical shape.", "cat":"dior"},

    {"id":"p06","name":"dior cd3025", "pic":"DIOR_CD3025.jpg","price":63,"description":"These Dior glasses have a classic design with a modern twist. The frame is made of high-quality acetate and has a rectangular shape with a bold, oversized look. The temples feature the iconic Dior logo and have a sleek, streamlined design.", "cat":"dior"},

    {"id":"p07","name":"ray ban rx0316v", "pic":"Ray-ban_RX0316V.png","price":110,"description":"These glasses from Ray-Ban are a classic choice for those who want a timeless look. The frame is made of high-quality metal and has a round shape with a sleek, minimalist design. The temples feature the iconic Ray-Ban logo and have a slim, lightweight design.", "cat":"ray-ban"},

    {"id":"p08","name":"ray ban rx5283", "pic":"Ray-ban_RX5283.png","price":100,"description":"These Ray-Ban glasses have a modern design that is both sleek and stylish. The frame is made of high-quality acetate and has a square shape with rounded edges. The temples feature the iconic Ray-Ban logo and have a slim, streamlined design.", "cat":"ray-ban"},

];
// $.getJSON("js/data.json", function (items) {
//     data = items;
//     displayImages(data);
// });

displayImages(data);

//lap trinh su kien search
$("#formSearch").submit(function (e) {
    e.preventDefault();

    let search = $("#search").val();
    let re = new RegExp(search, "ig");
    let subdata = data.filter(item => item.name.search(re) >= 0);

    displayImages(subdata);
});


//lap trinh chi tiet san pham
var res = '';
function getUrlID(){
    var urlID = window.location.href;
    res = urlID.slice(-3);
}

function productDetail(){
    var d = ``;
    var i = 0;
    for (var v of data){
        if (v.id == res){
            i++;
            d += `
                <div class="row">
                    <div class="col-md-6">
                        <div><img src="image/${v.pic}" alt="" class="flowerImaged"></div>
                    </div>
                    <div class="col-md-6">
                        <h3>${v.name.toUpperCase()}</h3>
                        <hr>
                        <h3>Price: $ ${v.price}</h3>
                        <hr>
                        <div>
                            <p>${v.description}</p>
                        </div>
                        <hr>
                        <a href="#" data-name="${v.name}" data-price="${v.price}" class="add-to-cart btn btn-primary">ADD TO CART</a>
                    </div>
                </div>  
                `;
            break;
        }
    }
    if (i == 0){
        d += `404 Not Found`;
    }
    $("#productDetail").html(d);
}


//lap trinh su kien click chon loai san pham
$("input[type=checkbox]").click(function () {
    let cats = $(".chk-cake:checked").map(function () { return $(this).val() }).toArray().toString();
    
    let subdata = (cats.length==0)?data: data.filter(item => cats.search(item.cat) >= 0);
    
    displayImages(subdata);

});


function displayImages(items) {
    let s = ``;
	
	$.each(items, function (k, v) {

        s += `<div class="col-sm-6 col-md-4 divImage">
                <div class="selectProduct" data-id="${v.id}" data-name="${v.name}" data-price="${v.price}" data-description="${v.description}">
                    <a class="addButtonCircular addToCompare"> + </a>
                    <a href="product_detail_page.html?id=${v.id}" class="productImg"><img src="image/${v.pic}" alt="" class="flowerImage"></a>
                    <h3>${v.name.toUpperCase()} </h3>
                    <h4>Price: $ ${v.price}</h4>
                </div>
                <a href="#" data-name="${v.name}" data-price="${v.price}" class="add-to-cart btn btn-primary">ADD TO CART</a>
            </div>`;
    });
    
    $("#products").html(s);
}