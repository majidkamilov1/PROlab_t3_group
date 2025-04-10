let addFood = () => {
    let btn = document.querySelector(".btnOFh")
    let window = document.querySelector(".modelWindow")
    btn.addEventListener("click", (e) => {
        window.classList.toggle("hidden")
    })
}
addFood()