const pic1 = document.getElementById("pic1")
const pic2 = document.getElementById("pic2")
const pic3 = document.getElementById("pic3")
const pic4 = document.getElementById("pic4")
const figcap = document.getElementById("figcap")

pic1.addEventListener('mouseover', function(){
  figcap.style.display = 'inline';
  figcap.innerText = 'Какой-то текст написанный на скорую руку';
  figcap.style.textAlign = 'center';
}
)
pic2.addEventListener("mousedown", function(){
  pic2.style.border = "red 10px solid";
}
)
pic4.addEventListener("mouseover", function(){
  pic4.src = "../img/team.jpg";
}
)
pic4.addEventListener("mouseout", function(){
  pic4.src = "../img/world.jpg"
}
)