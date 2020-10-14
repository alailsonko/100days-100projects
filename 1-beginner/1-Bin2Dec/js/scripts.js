window.addEventListener("load", loaded)
document.getElementById("input-bin").addEventListener("change", onChangeInputBin, false);

function loaded() {
  console.log("loaded")
}

function bin_to_dec(bstr) { 
    return parseInt((bstr + '').replace(/[^01]/gi, ''), 2);
}

function onChangeInputBin() {

    var x = document.getElementById("input-bin").value
    
    r = /^([0-1]{1,8})+$/
    
    const value = x.match(r)

    console.log(value)
    
    if(value === null){
        alert("please insert a valid value")
        return
    }
   if(value[0].length > 8){
       alert("can not be more than 8")
       return
   }
   document.getElementById("input-dec").innerHTML = bin_to_dec(value[1])
    
}