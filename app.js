window.addEventListener('DOMContentLoaded', getApi)

const modal = document.querySelector('.modal')
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
  imgCard.alt = products.price
  imgCard.width ='150'
  imgCard.height= '150'

  const titleCard = document.createElement('h2')
  titleCard.textContent = products.title

  const rating = document.createElement('div')
  rating.classList.add('rating')

  cardsProducts.append(conteinerCard,imgCard,titleCard,)
  document.querySelector('.block3').append(cardsProducts)

  modal.style.visibility= 'hidden'

  //MODAL
  cardsProducts.addEventListener('click', function creatModal() {


    const contentModal = document.createElement('div')
    contentModal.classList.add('myModal')
  
    const btnModal = document.createElement('button')
    btnModal.classList.add('delet-modal')
    btnModal.textContent = 'X'
    
 
  
    const textparrafo = document.createElement('p')
    textparrafo.textContent = products.description
  
    const imgModal = document.createElement('img')
    imgModal.classList.add('img-modal')
    imgModal.src = products.image
    
    const h2Modal = document.createElement('h2')
    h2Modal.textContent = products.price
    const h3Modal = document.createElement('h3')
    h3Modal.textContent = products.category
    
    contentModal.append(btnModal,textparrafo,imgModal,h2Modal,h3Modal)
    document.querySelector('.modal').appendChild(contentModal)
    modal.style.visibility= 'visible'


    btnModal.addEventListener('click', function myButton() {
      modal.style.visibility= 'hidden'
    })
  })

}
