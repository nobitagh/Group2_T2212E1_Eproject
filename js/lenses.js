var data = [
    {"id":"p21","name":"acuvue oasys", "pic":"acuvue_oasys.png","price":50,"description":"The ACUVUE OASYS are a popular brand of contact lenses. They are made from a silicone hydrogel material that allows for high oxygen permeability, making them comfortable to wear for extended periods. The lenses feature UV blocking and come in a range of prescription strengths.", "cat":"acuvue"},

    {"id":"p22","name":"alcon air optic", "pic":"alcondamau.png","price":20,"description":"The ALCON AIR OPTIC COLORS are a range of colored contact lenses that allow for a subtle or dramatic change in eye color. The lenses feature a unique 3-in-1 color technology that blends three colors to create a natural-looking effect. They also have high oxygen permeability for comfortable wear.", "cat":"alcon"},

    {"id":"p23","name":"soflens natural", "pic":"soflens.png","price":25,"description":"The SOFLENS NATURAL COLORS are a range of colored contact lenses that enhance the natural beauty of the eyes. They feature a unique design that blends seamlessly with the natural color of the iris for a subtle and natural-looking effect. The lenses also have high oxygen permeability for comfortable wear.", "cat":"soflens"},

    {"id":"p24","name":"biofinity multifocal", "pic":"R.jpg","price":50,"description":"Biofinity multifocal contact lenses are a type of contact lens that can help people with presbyopia see clearly at all distances. They are made by CooperVision and feature Balanced Progressive Technology with two different optical designs and four distinct ADDs up to +2.50 - virtually all presbyopes. This streamlined fitting approach allows for a simplified, flexible and individualized fitting.", "cat":"biofinity"}

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