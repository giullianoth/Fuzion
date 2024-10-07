import Modal from "./modal.js"

const cartModalButton = document.querySelector(".j_open_cart")

const cartModalElement = `
<section class="fz-cart-modal">
    <div class="fz-cart-modal__heading">
        <header class="fz-cart-modal__title">
            <h1>Carrinho</h1>
            <span class="cart-qt">2</span>
        </header>

        <i class="fa-solid fa-xmark close j_close_modal"></i>
    </div>

    <ul class="fz-cart-modal__list">
        <li class="fz-cart-modal__item">
            <div class="image">
                <a href="/produto/">
                    <img src="/assets/images/c23756ec-1f68-439c-a226-2a40cbc6bea2_1024.jpeg" alt="4 horas de Consultoria de Estilista por Jennifer Austin">
                </a>
            </div>

            <div class="info">
                <p class="name">
                    <a href="/produto/">4 horas de Consultoria de Estilista...</a>
                </p>

                <div class="qt-price">
                    <div class="qt">
                        <button class="remove">
                            <i class="fa-solid fa-minus"></i>
                        </button>
        
                        <p class="display j_qt_display">1</p>
        
                        <button class="add">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>

                    <p class="price">$120,00</p>
                </div>
            </div>
        </li>

        <li class="fz-cart-modal__item">
            <div class="image">
                <a href="/produto/">
                    <img src="/assets/images/742380_XJGKU_4215_001_100_0000_Light-Cotton-jersey-polo-shirt.jpg" alt="Camisa polo de malha de algodão">
                </a>
            </div>

            <div class="info">
                <p class="name">
                    <a href="/produto/">Camisa polo de malha de algodão</a>
                </p>

                <div class="qt-price">
                    <div class="qt">
                        <button class="remove">
                            <i class="fa-solid fa-minus"></i>
                        </button>
        
                        <p class="display j_qt_display">1</p>
        
                        <button class="add">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>

                    <p class="price">$120,00</p>
                </div>
            </div>
        </li>
    </ul>

    <div class="fz-cart-modal__subtotal">
        <p>Subtotal</p>
                        <p class="price">$240,00</p>
    </div>

    <div class="fz-cart-modal__actions">
        <p>
            <a href="/carrinho/">Ver Carrinho</a>
        </p>

        <a href="/checkout/" class="fz-button blue">Comprar</a>
    </div>
</section>
`

export default function CartModal() {
    cartModalButton.addEventListener("click", () => Modal(cartModalElement, "right"))
}