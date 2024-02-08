let img1 = document.getElementsByClassName('pic1')
let img2 = document.getElementsByClassName('pic2')
let img3 = document.getElementsByClassName('pic3')
let img4 = document.getElementsByClassName('pic4')
let p1 = document.getElementById('diskrip1')
let p2 = document.getElementById('diskrip2')
let p3 = document.getElementById('diskrip3')
let p4 = document.getElementById('diskrip4')

img1[0].addEventListener('mouseover', function () {
  p1.style.display='inline'
  p1.innerText='Небольшая строка написанная на скорую руку'
})
img1[0].addEventListener('mouseout', function () {
    p1.style.display = 'none'
})

img2[0].addEventListener('mouseover', function () {
  p2.style.display='inline'
  p2.innerText='Небольшая строка написанная на скорую руку'
})
img2[0].addEventListener('mouseout', function () {
    p2.style.display = 'none'
})

img3[0].addEventListener('mouseover', function () {
  p3.style.display='inline'
  p3.innerText='Небольшая строка написанная на скорую руку'
})
img3[0].addEventListener('mouseout', function () {
    p3.style.display = 'none'
})

img4[0].addEventListener('mouseover', function () {
  p4.style.display='inline'
  p4.innerText='Небольшая строка написанная на скорую руку'
  img4[0].src = 'img/team.jpg'
})
img4[0].addEventListener('mouseout', function () {
    p4.style.display = 'none'
    img4[0].src = 'img/world.jpg'
})


img3[0].addEventListener('mousedown', function () {
    img3[0].style.border = 'red 10px solid'
})
img3[0].addEventListener('mouseup', function () {
  img3[0].style.border = 'none'
})
