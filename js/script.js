var title = document.querySelectorAll("#h2-content")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")
var show = document.querySelector("#total-price")
var img = document.querySelectorAll("#card")
var totalprice = 0
img.forEach(function(item){
    item .onclick = function(){
        content.innerHTML += item.textContent +" + " 
        content.style.border="2px solid black"
        content.style.padding="5px"
        totalprice += +(item.getAttribute("price"))
        if(content.innerHTML !=""){
            btn.style.display="block";
            btn.style.padding="5px";
            btn.border="2px solid black"
        }
    };

})
btn.onclick = function(){
    show .innerHTML = totalprice
    show.style.padding = "5px"
    show.style.border="2px solid black"
}
