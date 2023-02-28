//Задание 1
let div1 = document.querySelector('.div1')
div1.onclick = () =>{
    div1.style.width = '115px'
    div1.style.height = '95px'
}
//Задание 2
let div2 = document.querySelector('.div2')
div2.ondblclick = () =>{
   let tc = div2.textContent
   console.log(tc)
}

//Задание 3
let bi = document.querySelector('.bi')
bi.onclick = () =>{
    bi.style.backgroundImage = `url(../bi2.jpg)`;
}
//Задание 4
let out2 = document.querySelector('.out2')
document.querySelector('.inp1').onkeypress = (e) =>{
    let ck = e.charCode
    out2.innerHTML = ck
}
//Задание 5
let btn = document.querySelector('.btn')
btn.onclick = () =>{
    let tf = prompt('Введите что нибудь')
    if (isNaN(tf)) {
        console.log(true);
        
        } else {
        console.log( false);
        
        }
}