var data = [
    {"id":"p09","name":"randolph p3 23k", "pic":"p3-23k.png","price":395,"description":"These glasses from Randolph have a classic design with a modern twist. The frame is made of high-quality metal and has a round shape with a sleek, minimalist look. The temples feature a unique, twisted design and have a lightweight, comfortable feel", "cat":"randolph"},

    {"id":"p10","name":"ray ban rb3558", "pic":"RB3558.png","price":180,"description":"These Ray-Ban glasses have a modern design that is both stylish and versatile. The frame is made of high-quality metal and has a rectangular shape with a sleek, minimalist look. The temples feature the iconic Ray-Ban logo and have a lightweight, comfortable feel.", "cat":"ray-ban"},

    {"id":"p11","name":"moscot tinif sun", "pic":"TINIFI_SUN.png","price":370,"description":"These Moscot sunglasses have a classic design that is both timeless and sophisticated. The frame is made of high-quality acetate and has a round shape with a bold, oversized look. The lenses are tinted for added style and protection from the sun.", "cat":"moscot"},

    {"id":"p12","name":"persol po0649 24 bl", "pic":"PO0649_24BL.jpeg","price":220,"description":"These Persol sunglasses have a classic design that is both timeless and sophisticated. The frame is made of high-quality acetate and has a square shape with rounded edges. The lenses are polarized for added style and protection from the sun.", "cat":"persol"},

    {"id":"p13","name":"persol er2 0170", "pic":"swansEr2.jpeg","price":215,"description":"The glasses are designed for sports enthusiasts and feature a wrap-around style that provides excellent coverage and protection from the wind and sun. They have shatterproof polycarbonate lenses that are scratch-resistant and offer 100% UV protection.", "cat":"persol"},

    {"id":"p14","name":"ray ban clubmaster", "pic":"CLUBMASTERCLASSIC.png","price":163,"description":"The is a timeless and iconic pair of glasses that exudes vintage style. They have a metal and acetate frame with a browline design and round lenses. The glasses feature adjustable nose pads and temple tips for a comfortable and secure fit.", "cat":"ray-ban"},

    {"id":"p15","name":"moscot miltzen sun", "pic":"moscotMILTZEN.png","price":340,"description":"The glasses are a classic pair of sunglasses that offer a retro-inspired look. They feature a round frame with a keyhole bridge and metal accents. The glasses have polarized lenses that reduce glare and provide 100% UV protection.", "cat":"moscot"},

    {"id":"p16","name":"randolph elinor", "pic":"elinor.png","price":340,"description":"The glasses are a modern take on the classic aviator style. They feature a lightweight titanium frame with acetate accents and polarized lenses that offer 100% UV protection. The glasses also have adjustable nose pads and temple tips for a personalized fit.", "cat":"randolph"},

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