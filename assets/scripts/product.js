const imageThumbs = document.querySelectorAll(".j_immage_thumb"),
    zoomArea = document.querySelector(".j_zoom_area"),
    images = [...document.querySelectorAll(".j_product_image")],
    featuredArea = document.querySelector(".j_featured_area"),
    navigation = document.querySelectorAll(".j_nav"),
    sizeSelect = document.querySelectorAll(".j_size_select"),
    sizeSelected = document.querySelector(".j_size_selected"),
    colorSelect = document.querySelectorAll(".j_color_select"),
    colorSelected = document.querySelector(".j_color_selected"),
    colorClear = document.querySelector(".j_color_clear"),
    quantityButtons = document.querySelectorAll(".j_qt_change"),
    quantityDisplay = document.querySelector(".j_qt_display")

let featured = images[0],
    imageLength = featured ? featured.offsetWidth : 0

export function ProductImage() {
    if (zoomArea) {
        zoomArea.addEventListener("mouseenter", event => {
            zoomArea.style.backgroundImage = `url(${featured.src})`
            zoomArea.style.backgroundize = "150%"
            zoomArea.style.backgroundPositionX = `${-event.offsetX / 2}px`
            zoomArea.style.backgroundPositionY = `${-event.offsetY / 2}px`
        })

        zoomArea.addEventListener("mousemove", event => {
            zoomArea.style.backgroundPositionX = `${-event.offsetX / 2}px`
            zoomArea.style.backgroundPositionY = `${-event.offsetY / 2}px`
        })

        zoomArea.addEventListener("mouseleave", () => zoomArea.style.background = "none")
    }

    imageThumbs.forEach((thumb, index, arr) => {
        thumb.addEventListener("click", () => {
            arr.forEach(t => t.classList.remove("selected"))
            thumb.classList.add("selected")

            featuredArea.style.transform = `translateX(${-imageLength * index}px)`
            featured = images[index]
        })
    })

    navigation.forEach(btn => {
        btn.addEventListener("click", () => {
            let index = images.indexOf(featured)

            if (btn.classList.contains("prev") && index > 0) {
                featured = images[index - 1]
                featuredArea.style.transform = `translateX(${-imageLength * (index - 1)}px)`

                imageThumbs.forEach(thumb => thumb.classList.contains("selected") && thumb.classList.remove("selected"))
                imageThumbs[index - 1].classList.add("selected")
            }

            if (btn.classList.contains("next") && index < images.length - 1) {
                featured = images[index + 1]
                featuredArea.style.transform = `translateX(${-imageLength * (index + 1)}px)`

                imageThumbs.forEach(thumb => thumb.classList.contains("selected") && thumb.classList.remove("selected"))
                imageThumbs[index + 1].classList.add("selected")
            }
        })
    })
}

export function SelectAttributes() {
    sizeSelect.forEach(btn => btn.addEventListener("input", () => sizeSelected.innerText = btn.value))

    colorSelect.forEach((btn, i, arr) => {
        btn.addEventListener("click", () => {
            arr.forEach(b => b.classList.remove("selected"))
            btn.classList.add("selected")
            colorSelected.innerText = btn.querySelector(".select-color").dataset.color
        })
    })

    if (colorClear) {
        colorClear.addEventListener("click", () => {
            colorSelect.forEach(btn => btn.classList.remove("selected"))
            colorSelect[0].classList.add("selected")
            colorSelected.innerText = colorSelect[0].querySelector(".select-color").dataset.color
        })
    }
}

export function ProductQuantity() {
    quantityButtons.forEach(button => {
        button.addEventListener("click", () => {
            let quantity = parseInt(quantityDisplay.innerText)
            
            if (button.classList.contains("remove")) {
                quantityDisplay.innerText = quantity > 1 ? quantity - 1 : quantity
            }

            if (button.classList.contains("add")) {
                quantityDisplay.innerText = quantity + 1
            }
        })
    })
}