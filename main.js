// cart open and close

let cart=document.getElementById("cart");
function opencart(){
    cart.style.right="0"
}
function closecart(){
    cart.style.right="-650px"
}

//add to cart
let add=document.querySelectorAll("#button");
let total=0;
let totalc=0;
add.forEach( btn =>{
    btn.addEventListener('click' , () =>{
        let div=document.createElement("div");
        let title=btn.dataset.text;
        let price=parseInt(btn.dataset.price);
        let image=btn.dataset.img;
        let btndata=btn.dataset.btn
        div.innerHTML=
        `<img src='${image}'/>
        <p>${title}</p>
        <p>${price}</p>
        <button class='del' data-price="${price}">-</button>`;
        cart.appendChild(div);
        total=total+price;
        document.getElementById("total").innerHTML="total:" + total + ".00$";
        totalc +=1
        document.getElementById("counter").innerHTML=totalc;
    })
});

//remove from cart
cart.addEventListener('click', e =>{
    if(e.target.className == "del"){
        e.target.parentElement.remove();
        let price1=parseInt(e.target.dataset.price);
        total=total-price1;
        document.getElementById("total").innerHTML="total:" + total + ".00$";
        totalc -=1;
        document.getElementById("counter").innerHTML=totalc
    }
});

//info div 

let infobutton=document.querySelectorAll("#infobutton");

let info=document.getElementById("info");

info.style.display="none";

function infoo(){
    info.style.display="block"
}
function infooo(){
    info.style.display="none"
}

infobutton.forEach (info =>{
     info.addEventListener('click',()=>{
        let image=info.dataset.img;
        let title=info.dataset.title;
        let screen=info.dataset.screen;
        let colors=info.dataset.colors;
        let storage=info.dataset.storage;

        let div=document.createElement("div");
        div.id="infocontent"

        div.innerHTML=
        `<img src='${image}' >
        <div id='infodiv'>
            <h2>${title}</h2>
            <p>screen: ${screen}</p>
            <p>colors: <span class='red'>red,</span><span class='blue'>blue,</span>yellow</p>
            <p>storage: ${storage}</p>
        </div>
        <i id='ii' onclick='infooo()'>close</i>`

        document.getElementById("info").appendChild(div)
     })
})


document.getElementById("info").addEventListener('click', e =>{
    if(e.target.tagName.toUpperCase()==="I"){
        e.target.parentElement.remove()
    }
})




//search bar


function search(){
    let searchbar=document.querySelector("#search").value.toUpperCase();
    let productlist=document.querySelector(".root");
    let product=document.querySelectorAll(".item");
    let pname=document.querySelectorAll(".h4");
    for(let i=0;i<pname.length;i++){
        if(pname[i].innerHTML.toUpperCase().indexOf(searchbar) >=0){
            product[i].style.display = ""
        }

        else{
            product[i].style.display = "none";
        }
    }
};

