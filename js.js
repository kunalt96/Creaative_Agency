const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})

// navigation.addEventListener('click',()=>{
//     navigation.classList.toggle('active')
// })
