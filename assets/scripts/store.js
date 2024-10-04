const priceRange = document.querySelector(".j_price_range"),
    rangeHandles = priceRange ? priceRange.querySelectorAll(".handle") : null,
    priceRangeValueMin = document.querySelector(".j_price_range_value .min"),
    priceRangeValueMax = document.querySelector(".j_price_range_value .max"),
    priceRangeProgress = priceRange ? priceRange.querySelector(".progress") : null,
    minValue = rangeHandles ? parseInt(rangeHandles[0].min) : 0,
    maxValue = rangeHandles ? parseInt(rangeHandles[0].max) : 0,
    rangeInterval = maxValue - minValue,
    rangeGap = 20,
    categoriesFilter = document.querySelectorAll(".j_store_categories .item"),
    tags = document.querySelectorAll(".j_tags .item")

export function PriceRange() {
    if (rangeHandles) {
        rangeHandles.forEach(handle => {
            handle.addEventListener("input", (event) => {
                let min = parseInt(rangeHandles[0].value)
                let max = parseInt(rangeHandles[1].value)
                let leftOffset = ((min - minValue) * 100) / rangeInterval
                let rightOffset = ((maxValue - max) * 100) / rangeInterval
        
                if (max - min >= rangeGap) {
                    priceRangeValueMin.innerText = min
                    priceRangeValueMax.innerText = max
        
                    priceRangeProgress.style.left = `${leftOffset}%`
                    priceRangeProgress.style.right = `${rightOffset}%`
                } else {
                    if (event.target.classList.contains("min")) {
                        rangeHandles[0].value = max - rangeGap
                    }
        
                    if (event.target.classList.contains("max")) {
                        rangeHandles[1].value = min + rangeGap
                    }
                }
            })
        })
    }
}

export function Filter() {
    categoriesFilter.forEach((item, i, arr) => {
        item.addEventListener("click", () => {
            arr.forEach(i => i !== item && i.classList.remove("selected"))
            item.classList.toggle("selected")
        })
    })

    tags.forEach(tag => tag.addEventListener("click", () => tag.classList.toggle("selected")))
}