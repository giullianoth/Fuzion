const imageThumbs = document.querySelectorAll(".j_immage_thumb")

export function ProductImage() {
    imageThumbs.forEach((thumb, i, arr) => {
        thumb.addEventListener("click", () => {
            arr.forEach(t => t.classList.remove("selected"))
            thumb.classList.add("selected")
        })
    })
}