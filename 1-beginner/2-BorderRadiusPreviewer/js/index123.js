window.addEventListener('load', loaded123)
document.getElementById("border-input").addEventListener('input', borderFunction)

function loaded123() {
    console.log('javascript working!')
}

function borderFunction() {
    let x = document.getElementById("border-input").value
    console.log(x.slice(14,-1))
//    document.getElementById("square-border-radius").style.borderRadius = "25px";
   document.getElementById('square-border-radius').style.borderRadius = x.slice(14,-1);
//    console.log(v)
//    v = x.slice(14,);
}