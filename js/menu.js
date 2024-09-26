
const searchSvg = document.querySelector("#search-svg")
const CloseSvg = document.querySelector("#close-svg")
const searchBar = document.querySelector(".search")

searchSvg.addEventListener("click",()=>{
    searchBar.classList.add("active")
})

CloseSvg.addEventListener("click",()=>{
    searchBar.classList.remove("active")
})
