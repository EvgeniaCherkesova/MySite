let switchMode = document.getElementById('switch');
console.log(switchMode)
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