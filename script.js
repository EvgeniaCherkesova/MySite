let switchMode = document.getElementById('switch');
console.log(switchMode)
switchMode.onclick = function(){
    let theme = document.getElementById('theme');
    
    if(theme.getAttribute('href') == "style maket.css"){
        theme.href = "dark.css";
    }
    else{
        theme.href = "style maket.css";
    }
}