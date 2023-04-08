var data = [
    {"id":"p17","name":"laurel readers", "pic":"lookopitic.png","price":68,"description":"The LAUREL READERS are a stylish and functional pair of reading glasses. They have a rectangular frame with a keyhole bridge and come in a range of magnification strengths. The glasses feature lightweight and durable materials for everyday use.", "cat":"laurel"},

    {"id":"p18","name":"miklos reading", "pic":"caddis.PNG","price":99,"description":"The MIKLOS READING GLASSES are a sleek and minimalist pair of reading glasses. They have a round frame with a thin metal construction and come in a range of magnification strengths. The glasses feature adjustable nose pads for a comfortable fit.", "cat":"miklos"},

    {"id":"p19","name":"tv party", "pic":"TVPARTY.PNG","price":95,"description":"The TV PARTY glasses are designed for people who spend long hours in front of screens. They have a blue light-blocking lens that reduces eye strain and fatigue. The glasses feature a retro-inspired frame with a square shape and come in a range of colors.", "cat":"tv-party"},

    {"id":"p20","name":"peeperspecs", "pic":"PeeperSpecs.jpg","price":50,"description":"The PEEPERSPECS are a fun and colorful pair of reading glasses. They have a round frame with a bold pattern and come in a range of magnification strengths. The glasses feature lightweight and durable materials for everyday use.", "cat":"peeperspecs"},
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