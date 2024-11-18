/*//task 1:change background and text style of a header
const siteTitle=document.getElementById('siteTitle');
siteTitle.style.backgroundColor='lightcoral';
siteTitle.style.color='White';
siteTitle.style.padding='20px';
siteTitle.style.fontstyle='italic';

//task 2:update product card styles

const productCard=document.getElementsByClassName(".product-card");

for(let i=0;i<productCard.length;i++){
productCard[i].style.backgroundColor="lightgray";
productCard[i].style.padding="15px";
}

const productName=document.querySelector(".Product-name");
productName.style.fontSize="24px";
productName.style.color="darkblue";

const descr=document.querySelector(".description");
descr.style.color="green";

//task 3: modify list styles

const itemList=document.getElementById("itemList");
itemList.style.backgroundColor="lightyellow";
itemList.style.fontSize="18px";

const listitem=itemList.getElementsByTagName("li");

for(let i=0;i<listitem.length;i++){
listitem[i].style.padding="10px";
listitem[i].style.color="purple";
}

//task 4: style a footer

const footer1=document.getElementsByTagName("footer")
for(let i=0;i<footer1.length;i++){
footer1[i].style.backgroundColor="darkgray";
footer1[i].style.color="white";
footer1[i].style.textAlign="center";
footer1[i].style.padding="30px";
}

//task 5:update card layout

const info=document.querySelector(".info-card")
info.style.backgroundColor="lightblue";
info.style.borderRadius="8px";

const cardTitle=document.querySelector(".card-title");
cardTitle.style.color="navy";

const Cardcontent=document.querySelector(".card-content");
Cardcontent.style.fontSize="16px";
Cardcontent.style.padding="20px";*/


function add(){
    let box1=document.getElementById("box1");
    let val1=Number(box1.value);
    console.log(val1);

    let box2=document.getElementById("box2");
    let val2=Number(box2.value);
    console.log(val2);

    let p=document.getElementById("total");

    let total=val1+val2;
    console.log(total);
    p.innerText="Addition of Two Number:"+total
}
function sub(){
    let box1=document.getElementById("box1");
    let val1=Number(box1.value);
    console.log(val1);

    let box2=document.getElementById("box2");
    let val2=Number(box2.value);
    console.log(val2);

    let p=document.getElementById("total");

    let total=val1-val2;
    console.log(total);
    p.innerText="Subtraction of Two Number:"+total
}
function mul(){
    let box1=document.getElementById("box1");
    let val1=Number(box1.value);
    console.log(val1);

    let box2=document.getElementById("box2");
    let val2=Number(box2.value);
    console.log(val2);

    let p=document.getElementById("total");

    let total=val1*val2;
    console.log(total);
    p.innerText="Multiplication of Two Number:"+total
}
function div(){
    let box1=document.getElementById("box1");
    let val1=Number(box1.value);
    console.log(val1);

    let box2=document.getElementById("box2");
    let val2=Number(box2.value);
    console.log(val2);

    let p=document.getElementById("total");

    let total=val1/val2;
    console.log(total);
    p.innerText="Division of Two Number:"+total
}


function check(){
    let box1=document.getElementById("box1");
    let val1=Number(box1.value);

    let p=document.getElementById("text");
    if(val1>=18){
        p.textContent="you are eligible to  the vote";
    }
    else{
        p.textContent="you are not eligible to  the vote";
    }
}

