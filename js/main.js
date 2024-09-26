const select=document.querySelector("#filter-select")
const allcards = document.querySelectorAll(".card-athlete")

console.log(select)
select.addEventListener("change", ()=>{
    allcards.forEach(item =>{
        
        if (select.value == item.querySelector('span').textContent) {
            item.classList.remove("disable")
        }else{
            item.classList.add("disable")
        }
    })
})

