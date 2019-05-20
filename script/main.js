
let toTopBtn = document.getElementById("toTopBtn")
showHideToTopBtn()



window.addEventListener("scroll", e => {
    showHideToTopBtn()
    // console.log("hiden",window.scrollY)
})

function showHideToTopBtn(){
    if(window.scrollY < 40){
        if(!toTopBtn.classList.contains("hiden")){
            toTopBtn.classList.add("hiden")
        }
    }else{
        toTopBtn.classList.remove("hiden")
    }
}