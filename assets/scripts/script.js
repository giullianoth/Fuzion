import { slideDown, slideUp } from "./effects.js"

const menuIcon = document.querySelector(".j_menu_icon"),
    menu = document.querySelector(".j_menu"),
    dropDown = document.querySelectorAll(".j_dropdown")

menuIcon.addEventListener("click", () => {
    let icon = menuIcon.querySelector("i")

    if (window.getComputedStyle(menu).display === "none") {
        icon.classList.replace("fa-bars", "fa-xmark")
        slideDown(menu)
    } else {
        icon.classList.replace("fa-xmark", "fa-bars")
        slideUp(menu)
    }
})

dropDown.forEach(item => {
    let submenu = item.querySelector(".j_submenu")

    item.addEventListener("mouseenter", () => {
        if (window.getComputedStyle(submenu).display === "none") {
            slideDown(submenu)
        }
    })

    item.addEventListener("mouseleave", () => {
        if (window.getComputedStyle(submenu).display !== "none") {
            slideUp(submenu)
        }
    })
})