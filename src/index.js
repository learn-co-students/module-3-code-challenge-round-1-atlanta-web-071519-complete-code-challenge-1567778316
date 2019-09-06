
  document.addEventListener('DOMContentLoaded', () => {
    getImage()

    

  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3402 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageCard = document.querySelector('#image_card')
})

 
const getImage = () => {
  return fetch('https://randopic.herokuapp.com/images/3402')
  .then(resp => resp.json())
  .then(image => {
    renderImage(image)
  })
  }

  function renderImage(image){

    image.dataset = image.id
    // debugger
        document.getElementById('image').src = 'https://randopic.herokuapp.com/images/3402'
        document.querySelector('h4#name').textContent = image.name
        document.getElementById('like_button').textContent = image.document.querySelector('like_button')
        renderImage.image
  }




  


 
  






