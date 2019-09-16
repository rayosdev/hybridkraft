
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


// phone-number-copy

let phoneCopyAnkers = document.querySelectorAll('.copy-number')

phoneCopyAnkers.forEach(anker => {
    anker.addEventListener('click', e => {
        e.preventDefault()
        let tmpInput = document.createElement('input')
        tmpInput.innerText = anker.innerText
        console.log(anker.innerText.replace(/(\+47| |\D)/g, ''))
    })
});
