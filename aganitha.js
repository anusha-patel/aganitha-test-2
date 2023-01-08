const toggle = document.querySelector('.fa-circle-half-stroke');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
})

const font = document.querySelector('.fa-t');
console.log(font)
font.addEventListener('click', () => {
  document.body.classList.toggle('text');
  
})




