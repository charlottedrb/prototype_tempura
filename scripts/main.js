items = document.querySelectorAll(".nav-item")
items.forEach((item) => {
    item.addEventListener("click", () => {
        for(let itemWhenClick of items)  {
            itemWhenClick.classList.remove("active")
        }
        item.classList.add("active")
    })
})