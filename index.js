let i = 0;
const x = []
const o = []

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
                if (ooo) alert("выиграл O");
                const xxx = the_right_combination.some((item) => x.includes(item[0]) && x.includes(item[1]) && x.includes(item[2]));
                if (xxx) alert("выиграл x");

            }, 50)
            i++;

        }
    });
};

func();
