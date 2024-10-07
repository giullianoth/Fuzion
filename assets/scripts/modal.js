import { fadeIn, fadeOut } from "./effects.js"

const modalElement = document.querySelector(".j_modal"),
    modalWrapper = () => document.querySelector(".j_modal_wrapper"),
    modalContent = () => document.querySelector(".j_modal_content"),
    closeModal = () => document.querySelectorAll(".j_close_modal")

export default function Modal(content, orientation) {
    modalElement.innerHTML = `
    <div class="fz-modal__wrapper j_modal_wrapper">
        <div class="fz-modal__content j_modal_content"></div>
    </div>
    `

    modalContent().innerHTML = content
    modalWrapper().classList.add(orientation)
    fadeIn(modalElement, "flex")

    if (modalWrapper().classList.contains("right")) {
        setTimeout(() => modalWrapper().classList.add("active"), 10)
    }

    closeModal().forEach(element => {
        element.addEventListener("click", ({ target }) => {
            if (target.classList.contains("j_close_modal")) {
                fadeOut(modalElement)
                
                if (modalWrapper().classList.contains("right")) {
                    modalWrapper().classList.remove("active")
                }

                setTimeout(() => {
                    modalElement.innerHTML = ""
                }, 300)
            }
        })
    })
}