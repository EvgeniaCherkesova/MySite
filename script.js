let switchMode = document.getElementById('switch');
switchMode.onclick = function(){
    let theme = document.getElementById('theme');
    
    if(theme.getAttribute('href') == "style maket.css"){
        theme.href = "dark.css";
        switchMode.innerText="standart theme"
    }
    else{
        theme.href = "style maket.css";
        switchMode.innerText="spring theme"
    }
}
 
const plus = document.querySelector('.plus');
plus.onclick = function () {
    let elements = document.querySelectorAll(".texnUp");
    for (const element of elements) {
        let size = parseInt(window.getComputedStyle(element).fontSize);
        element.style.fontSize = size + 2 + 'px';
    }
}
const minus = document.querySelector('.minus');
minus.onclick = function () {
    let elements = document.querySelectorAll(".texnUp");
    for (const element of elements) {
        let size = parseInt(window.getComputedStyle(element).fontSize);
        element.style.fontSize = size - 2 + 'px';
    }
}
const white = document.querySelector('.white');
white.onclick = function(){
    let text = document.querySelectorAll(".whiteText");
    for (const element of text) {
        element.style.color = 'black';
    }
    let fons = document.querySelectorAll(".blackfon");
    for (const fon of fons) {
        fon.style.backgroundColor = 'white';
    }
}
const black = document.querySelector('.black');
black.onclick = function(){
    let text = document.querySelectorAll(".whiteText");
    for (const element of text) {
        element.style.color = 'white';
    }
    let fons = document.querySelectorAll(".blackfon");
    for (const fon of fons) {
        fon.style.backgroundColor = 'rgb(21, 21, 23)';
    }
}

























const animItems = document.querySelectorAll('.anim');
if(animItems.length > 0){
    window.addEventListener('scroll',scrollAnim);
    function scrollAnim(){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            let animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight/animStart;
            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight/animStart;
            }

            if(scrollY > (animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            }
            else{
                animItem.classList.remove('_active');
            }
        }
    }

    function offset(el) {
        let rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
} 