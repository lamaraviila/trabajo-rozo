window.addEventListener('DOMContentLoaded', getApi)

function getApi() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(Data => Data.forEach(element => creatProducts(element)))
}

function creatProducts(products) {
  const cardsProducts = document.createElement('button')
  cardsProducts.classList.add('btn-product')

  const conteinerCard= document.createElement('div')
  conteinerCard.classList.add('card')

  const imgCard = document.createElement('img')
  imgCard.src = products.image
  imgCard.alt = products.title
  imgCard.width ='150'
  imgCard.height= '150'

  const titleCard = document.createElement('h2')
  titleCard.textContent = products.title

  const rating = document.createElement('div')
  rating.classList.add('rating')



  cardsProducts.append(conteinerCard,imgCard,titleCard,)

  document.querySelector('.block3').append(cardsProducts)

}