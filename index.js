let i = 0;
let x = []
let o = []

const the_right_combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
]

const func = () => {
    const box = document.getElementById("box");
    const ma = document.querySelector("#win-model")
    const md = document.getElementById("w1")
    box.addEventListener("click", (e) => {
        if (e.target.classList.contains("box-0")) {

            if (i % 2 == 0 && !e.target.querySelector(".ooo").classList.contains("flex")) {
                e.target.querySelector(".xxx").classList.replace("hidden", "flex");
                x.push(+e.target.id)
            } if (i % 2 != 0 && !e.target.querySelector(".xxx").classList.contains("flex")) {
                e.target.querySelector(".ooo").classList.replace("hidden", "flex");
                o.push(+e.target.id)
            }
            setTimeout(() => {
                const ooo = the_right_combination.some((item) => o.includes(item[0]) && o.includes(item[1]) && o.includes(item[2]));
                if (ooo) {
                    md.textContent += " o"
                    ma.classList.toggle("hidden")
                };
                const xxx = the_right_combination.some((item) => x.includes(item[0]) && x.includes(item[1]) && x.includes(item[2]));
                if (xxx) {
                    md.textContent += " x"
                    ma.classList.toggle("hidden")
                }

                if (o.length + x.length == 9 && md.textContent.at(-1) == "л") {
                    md.textContent = "НИЧЬЯ"
                    ma.classList.toggle("hidden")
                    console.log(56789);

                }

            }, 50)
            i++;

        }
    });
};

func();

let restart = () => {
    let box = document.querySelectorAll(".box-0")
    const md = document.getElementById("w1")
    let btn = document.querySelector(".btnh")
    const ma = document.querySelector("#win-model")
    btn.addEventListener("click", (e) => {
        box.forEach((x) => {
            if (x.children.item(1).classList.contains("flex")) {
                x.children.item(1).classList.replace("flex", "hidden")
            }
            else if (x.children.item(0).classList.contains("flex")) {
                x.children.item(0).classList.replace("flex", "hidden")
            }
        })
        md.textContent = "выиграл"
        o = []
        x = []
        i = 0
        ma.classList.toggle("hidden")
    })
}
restart()