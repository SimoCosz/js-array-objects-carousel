const slide = [
  {
    title: 'Svezia',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    image: 'img copia/01.jpg',
  },
  {
    title: 'Svizzera',
    description: 'Lorem ipsum',
    image: 'img copia/02.jpg',
  },
  {
    title: 'Gran Bretagna',
    description:   'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    image: 'img copia/03.jpg',
  },
  {
    title: 'Germania',
    description:   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    image: 'img copia/04.jpg',
  },
  {
    title: 'Paradise',
    description:   'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    image: 'img copia/05.jpg',
  },
]

// const items = [
//   'img/01.jpg',
//   'img/02.jpg',
//   'img/03.jpg',
//   'img/04.jpg',
//   'img/05.jpg'
// ];

// const title = [
//   'Svezia',
//   'Svizzera',
//   'Gran Bretagna',
//   'Germania',
//   'Paradise'
// ]

// const text = [
//   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//   'Lorem ipsum',
//   'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//   'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ]

let currentIndex = 0

// cerco dove andare a inserire l'immagine + titolo + descrizione nell'html
// VARIABILI
const slideWrapper = document.querySelector('.slide-wrapper')
const controlImage = document.querySelector('.control-image')
const next = document.querySelector('.go-down')
const prev = document.querySelector('.go-up')
// creo un ciclo per andare ad creare le varie varianti
// attivo il ciclo al click della freccia


  for (let i = 0; i < slide.length; i++ ){
    const image = slide[i].image;
    const title = slide[i].title;
    const description = slide[i].description;

  const item = `
    <div class="item">
      <img src="${image}" alt="">
      <div class="description">
        <h6 class="titolo">${title}</h6>
        <p class="paragrafo">${description}</p>
      </div>
    </div>
    ` 
    slideWrapper.innerHTML += item
  }
  
const itemImage = [...document.getElementsByClassName('item')]
itemImage[currentIndex].classList.add('active')

prev.addEventListener('click', function(){
  itemImage[currentIndex].classList.remove('active')
  itemControl[currentIndex].classList.remove('active')

  if( currentIndex > 0){
    currentIndex--
    itemImage[currentIndex].classList.add('active')
    itemControl[currentIndex].classList.add('active')
  } else {
    currentIndex = slide.length - 1
  }
  itemImage[currentIndex].classList.add('active')
  itemControl[currentIndex].classList.add('active')
  
})

next.addEventListener('click', function(){
  itemImage[currentIndex].classList.remove('active')
  itemControl[currentIndex].classList.remove('active')
  
  if (currentIndex < slide.length - 1){
    currentIndex++
    itemImage[currentIndex].classList.add('active')
    itemControl[currentIndex].classList.add('active')
  } else {
    currentIndex = 0
  }
  itemImage[currentIndex].classList.add('active')
  itemControl[currentIndex].classList.add('active')
})


for (let i=0; i < slide.length; i++){
  const image = slide[i].image;

  const navImage = `
  <div class="controls ">
  <img class="image" src="${image}" alt="">
  </div>  
  `  
  controlImage.innerHTML += navImage
}  

const itemControl = [...document.getElementsByClassName('image')]
itemControl[currentIndex].classList.add('active')
