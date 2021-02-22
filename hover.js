document.body.addEventListener('mouseout', function(e) {
  if(e.target.classList.contains('overlay-image')){
    e.target.classList.add('overlay-image-none')
    e.target.classList.remove('overlay-image-hide')
    e.target.nextElementSibling.classList.add('image-tagline')
    e.target.nextElementSibling.classList.remove('tagline-show')
  }
})

document.body.addEventListener('mouseover', function(e) {
  if(e.target.classList.contains('overlay-image') || e.target.classList.contains('image-text')){
    e.target.classList.add('overlay-image-hide')
    e.target.classList.remove('overlay-image-none')
    e.target.nextElementSibling.classList.add('tagline-show')
    e.target.nextElementSibling.classList.remove('image-tagline')
  }
})




