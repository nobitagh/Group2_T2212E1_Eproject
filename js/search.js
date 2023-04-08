function search() {
    var k = document.getElementById("kw")
    if (k != null){
        k = k.value

        var items =document.querySelectorAll("div.items > div.item");
        for (var i = 0; i < items.length; i++)
           var h5 = items[i].getElementsByTagName("h5")[0].innerText;
            if (h5.indexOf(k) >=0)
                items[i].style.outline = "2px dashed red"
    }
}