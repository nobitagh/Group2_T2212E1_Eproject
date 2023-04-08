var data = [
    {"id":"p01","name":"prada pr 04wv", "pic":"PR04WV.jpeg","price":288,"description":"These glasses from Prada feature a classic rectangular frame with a modern twist. The frame is made of high-quality acetate and has a tortoise shell pattern. The temples are embellished with the Prada logo and have a metal accent for added style.", "cat":"eyeglasses",},
    
    {"id":"p02","name":"prada pr 51yv", "pic":"PradaPR51YV.jpeg","price":713, "description":"These Prada glasses have a unique frame shape that is both bold and modern. The frame is made of high-quality metal and has a semi-rimless design. The temples feature the iconic Prada logo and have a sleek, streamlined look.","cat":"eyeglasses"},

    {"id":"p03","name":"gucci gg0241O", "pic":"gucci_gg0241.png","price":625,"description":"These glasses from Gucci are a stylish choice for those who want a classic look with a modern twist. The frame is made of high-quality acetate and has a square shape with rounded edges. The temples feature the iconic Gucci logo and have a bold, oversized design.", "cat":"eyeglasses"},

    {"id":"p04","name":"gucci gg0025O", "pic":"gucci_gg0025.png","price":350,"description":"These Gucci glasses have a classic design that is both timeless and sophisticated. The frame is made of high-quality metal and has a rectangular shape with rounded edges. The temples feature the iconic Gucci logo and have a sleek, streamlined design.", "cat":"eyeglasses"},

    {"id":"p05","name":"dior stellaiteo11", "pic":"DIOR_STELLAIREO11.jpg","price":82,"description":"These glasses from Dior are a stylish and modern choice for those who want to make a statement. The frame is made of high-quality metal and has a round shape with a sleek, minimalist design. The temples are embellished with the Dior logo and have a unique, asymmetrical shape.", "cat":"eyeglasses"},

    {"id":"p06","name":"dior cd3025", "pic":"DIOR_CD3025.jpg","price":63,"description":"These Dior glasses have a classic design with a modern twist. The frame is made of high-quality acetate and has a rectangular shape with a bold, oversized look. The temples feature the iconic Dior logo and have a sleek, streamlined design.", "cat":"eyeglasses"},

    {"id":"p07","name":"ray ban rx0316v", "pic":"Ray-ban_RX0316V.png","price":110,"description":"These glasses from Ray-Ban are a classic choice for those who want a timeless look. The frame is made of high-quality metal and has a round shape with a sleek, minimalist design. The temples feature the iconic Ray-Ban logo and have a slim, lightweight design.", "cat":"eyeglasses"},

    {"id":"p08","name":"ray ban rx5283", "pic":"Ray-ban_RX5283.png","price":100,"description":"These Ray-Ban glasses have a modern design that is both sleek and stylish. The frame is made of high-quality acetate and has a square shape with rounded edges. The temples feature the iconic Ray-Ban logo and have a slim, streamlined design.", "cat":"eyeglasses"},

    {"id":"p09","name":"randolph p3 23k", "pic":"p3-23k.png","price":395,"description":"These glasses from Randolph have a classic design with a modern twist. The frame is made of high-quality metal and has a round shape with a sleek, minimalist look. The temples feature a unique, twisted design and have a lightweight, comfortable feel", "cat":"sunglasses"},

    {"id":"p10","name":"ray ban rb3558", "pic":"RB3558.png","price":180,"description":"These Ray-Ban glasses have a modern design that is both stylish and versatile. The frame is made of high-quality metal and has a rectangular shape with a sleek, minimalist look. The temples feature the iconic Ray-Ban logo and have a lightweight, comfortable feel.", "cat":"sunglasses"},

    {"id":"p11","name":"moscot tinif sun", "pic":"TINIFI_SUN.png","price":370,"description":"These Moscot sunglasses have a classic design that is both timeless and sophisticated. The frame is made of high-quality acetate and has a round shape with a bold, oversized look. The lenses are tinted for added style and protection from the sun.", "cat":"sunglasses"},

    {"id":"p12","name":"persol po0649 24 bl", "pic":"PO0649_24BL.jpeg","price":220,"description":"These Persol sunglasses have a classic design that is both timeless and sophisticated. The frame is made of high-quality acetate and has a square shape with rounded edges. The lenses are polarized for added style and protection from the sun.", "cat":"sunglasses"},

    {"id":"p13","name":"persol er2 0170", "pic":"swansEr2.jpeg","price":215,"description":"The glasses are designed for sports enthusiasts and feature a wrap-around style that provides excellent coverage and protection from the wind and sun. They have shatterproof polycarbonate lenses that are scratch-resistant and offer 100% UV protection.", "cat":"sunglasses"},

    {"id":"p14","name":"ray ban clubmaster", "pic":"CLUBMASTERCLASSIC.png","price":163,"description":"The is a timeless and iconic pair of glasses that exudes vintage style. They have a metal and acetate frame with a browline design and round lenses. The glasses feature adjustable nose pads and temple tips for a comfortable and secure fit.", "cat":"sunglasses"},

    {"id":"p15","name":"moscot miltzen sun", "pic":"moscotMILTZEN.png","price":340,"description":"The glasses are a classic pair of sunglasses that offer a retro-inspired look. They feature a round frame with a keyhole bridge and metal accents. The glasses have polarized lenses that reduce glare and provide 100% UV protection.", "cat":"sunglasses"},

    {"id":"p16","name":"randolph elinor", "pic":"elinor.png","price":340,"description":"The glasses are a modern take on the classic aviator style. They feature a lightweight titanium frame with acetate accents and polarized lenses that offer 100% UV protection. The glasses also have adjustable nose pads and temple tips for a personalized fit.", "cat":"sunglasses"},

    {"id":"p17","name":"laurel readers", "pic":"lookopitic.png","price":68,"description":"The LAUREL READERS are a stylish and functional pair of reading glasses. They have a rectangular frame with a keyhole bridge and come in a range of magnification strengths. The glasses feature lightweight and durable materials for everyday use.", "cat":"reading glasses"},

    {"id":"p18","name":"miklos reading", "pic":"caddis.PNG","price":99,"description":"The MIKLOS READING GLASSES are a sleek and minimalist pair of reading glasses. They have a round frame with a thin metal construction and come in a range of magnification strengths. The glasses feature adjustable nose pads for a comfortable fit.", "cat":"reading glasses"},

    {"id":"p19","name":"tv party", "pic":"tvparty.png","price":95,"description":"The TV PARTY glasses are designed for people who spend long hours in front of screens. They have a blue light-blocking lens that reduces eye strain and fatigue. The glasses feature a retro-inspired frame with a square shape and come in a range of colors.", "cat":"reading glasses"},

    {"id":"p20","name":"peeperspecs", "pic":"PeeperSpecs.jpg","price":50,"description":"The PEEPERSPECS are a fun and colorful pair of reading glasses. They have a round frame with a bold pattern and come in a range of magnification strengths. The glasses feature lightweight and durable materials for everyday use.", "cat":"reading glasses"},

    {"id":"p21","name":"acuvue oasys", "pic":"acuvue_oasys.png","price":50,"description":"The ACUVUE OASYS are a popular brand of contact lenses. They are made from a silicone hydrogel material that allows for high oxygen permeability, making them comfortable to wear for extended periods. The lenses feature UV blocking and come in a range of prescription strengths.", "cat":"contact lenses"},

    {"id":"p22","name":"alcon air optic", "pic":"alcondamau.png","price":20,"description":"The ALCON AIR OPTIC COLORS are a range of colored contact lenses that allow for a subtle or dramatic change in eye color. The lenses feature a unique 3-in-1 color technology that blends three colors to create a natural-looking effect. They also have high oxygen permeability for comfortable wear.", "cat":"contact lenses"},

    {"id":"p23","name":"soflens natural", "pic":"soflens.png","price":25,"description":"The SOFLENS NATURAL COLORS are a range of colored contact lenses that enhance the natural beauty of the eyes. They feature a unique design that blends seamlessly with the natural color of the iris for a subtle and natural-looking effect. The lenses also have high oxygen permeability for comfortable wear.", "cat":"contact lenses"},

    {"id":"p24","name":"biofinity multifocal", "pic":"R.jpg","price":50,"description":"Biofinity multifocal contact lenses are a type of contact lens that can help people with presbyopia see clearly at all distances. They are made by CooperVision and feature Balanced Progressive Technology with two different optical designs and four distinct ADDs up to +2.50 - virtually all presbyopes. This streamlined fitting approach allows for a simplified, flexible and individualized fitting.", "cat":"contact lenses"}

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