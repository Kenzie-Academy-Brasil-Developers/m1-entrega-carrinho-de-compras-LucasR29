const currency = function(number){
    return new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL', minimumFractionDigits: 2}).format(number);
};


const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    },
    
]

function sum(array){
    let result = 0
    for(let key in array){
        result += array[key].price
    }
    return result.toFixed(2)
}

let header = document.createElement('header')
let title = document.createElement('h1')
title.innerText = 'Virtual Market'
header.appendChild(title)


let divFinal = document.createElement('div')
let spanTotal = document.createElement('span')
let spanValue =  document.createElement('span')
let sumProducts = currency(sum(productsCart))
spanValue.innerText = sumProducts
spanTotal.innerText = 'Total'
divFinal.append(spanTotal, spanValue)
divFinal.classList.add('final')



let liNav = document.createElement('li')
let spanNav1 = document.createElement('span')
let spanNav2 = document.createElement('span')
liNav.classList.add('nav')
spanNav1.innerText = 'Item'
spanNav2.innerText = 'Valor'
liNav.append(spanNav1,spanNav2)


let ProductsList = document.createElement('ul')
ProductsList.append(liNav)
let Main = document.createElement('main')
let ButtonEnd = document.createElement('button')
let sectionMain = document.createElement('section')

sectionMain.append(divFinal, ButtonEnd)
ButtonEnd.innerText = "Finalizar compra"
document.body.append(header, Main)
Main.append(ProductsList, sectionMain)

for(let key in productsCart){
    let ProductDetails = document.createElement('li')
    let spanPrice = document.createElement('span')
    let spanName = document.createElement('span')
    spanPrice.innerText = currency(productsCart[key].price)
    spanName.innerText = productsCart[key].name
    ProductDetails.append(spanName,spanPrice)
    ProductsList.appendChild(ProductDetails)
    
}




