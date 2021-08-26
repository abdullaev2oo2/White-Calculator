var monitor = document.querySelector('.valuee');

document.querySelectorAll('.num').forEach(function(btn) {
    btn.addEventListener('click', function(e){
        var x = e.target.innerText;
        
        if(x === "C" ){
            monitor.value = ""
        }
        else if(x === "=") {
            monitor.value = eval(monitor.value)
        }
        else if(x === "DEL") {
            monitor.value = monitor.value.slice(0, -1)
        }
        else {
            monitor.value += x;        
        }
    })
})