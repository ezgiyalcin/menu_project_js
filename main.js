import { menu } from './db.js'
import { buttonsData } from './db.js'

const menuContainer = document.getElementById('menu-container')
const buttonsArea = document.getElementById('buttons-area')

document.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu)
    showMenuButtons("all")
}
)


function displayMenuItems(menuItems) {


    let displayMenu = menuItems.map((item) =>
        `
<a href="productDetail.html?id=${item.id}" id="card" class="d-flex gap-3 flex-column flex-md-row text-decoration-none text-dark">
<img class="rounded shadow" src=${item.image} alt="">
<div class="">
    <div class="d-flex justify-content-between">
        <h5>${item.title}</h5>
        <p class="text-success"> $ ${item.price}</p>
    </div>

    <p class="lead">${item.description}</p>
</div>

</a>
`
    )
    displayMenu = displayMenu.join(' ')

    menuContainer.innerHTML = displayMenu

}



buttonsArea.addEventListener('click',searchCategory)

function searchCategory(e) {
    const categoryBtn = e.target.dataset.category

    const filteredMenu = menu.filter((menuItem) =>
        menuItem.category === categoryBtn)


    if (categoryBtn === "all") {
        displayMenuItems(menu)

    } else {
        displayMenuItems(filteredMenu)
    }

showMenuButtons(categoryBtn)
}

function showMenuButtons(active) {
    buttonsArea.innerHTML = ''
    buttonsData.forEach((btn) => {
        const buttonElement = document.createElement('button')

        buttonElement.className = 'btn btn-outline-dark filter-btn'

      
        buttonElement.innerText = btn.text

        buttonElement.dataset.category = btn.data

        console.log(buttonElement)
        if(buttonElement.dataset.category === active){
            buttonElement.classList.add('bg-dark')
            buttonElement.classList.add('text-light')
        }
        buttonsArea.appendChild(buttonElement)
    }
    )
}