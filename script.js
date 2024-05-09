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