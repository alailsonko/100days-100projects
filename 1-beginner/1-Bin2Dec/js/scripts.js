window.addEventListener("load", loaded)
document.getElementById("input-bin").addEventListener("change", onChangeInputBin, false);

function loaded() {
  console.log("loaded")
}


function onChangeInputBin() {  
    var x = document.getElementById("input-bin").value
    r = /^([0-1]{1,8})+$/
    console.log(x.match(r)[1])
    return x
}