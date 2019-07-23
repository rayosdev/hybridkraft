
let toTopBtn = document.getElementById("toTopBtn")
showHideToTopBtn()



window.addEventListener("scroll", e => {
    showHideToTopBtn()
    // console.log("hiden",window.scrollY)
})

function showHideToTopBtn(){
    if(window.scrollY < 40){
        if(!toTopBtn.classList.contains("hidden")){
            toTopBtn.classList.add("hidden")
        }
    }else{
        toTopBtn.classList.remove("hidden")
    }
}