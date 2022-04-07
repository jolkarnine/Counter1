let hone = document.querySelector('.hi')
let counter = document.querySelector('.count')
let btn = document.querySelector('.go')

btn.addEventListener('click', function () {
    let cnum = 0

    function fire() {
        cnum++
        hone.innerHTML = cnum

        if (cnum == counter.value){
            clearInterval(pauss)
        }else{
            counter.style.display = "none"
            btn.style.display = "none"
        }
    }

    let pauss = setInterval(function(){
        fire()
    },200)
})