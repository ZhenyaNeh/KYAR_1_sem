"use strict"

const form = document.querySelector('form');
const footer = document.querySelector('p')

function order() {
    let form = document.forms[0];

    let name = form.elements.name;
    let surname = form.elements.surname;
    let fathername = form.elements.fathername;

    let email = form.elements.email;
    let country = form.elements.country;

    let presents = form.elements.present
    let present = presents.options[presents.selectedIndex].text;
    
    let colors = form.elements.color
    let color = colors.options[colors.selectedIndex].text;

    let fullname = surname.value + " " + name.value + " " + fathername.value;

    footer.innerHTML = "Здравствуйте, " + fullname + " заказ принят и будет доставлен по адресу: " + country.value + " в течении нескольких дней. Подробная информация: Вы заказали "+ present +", c упаковкой цвета " + color + ". Чек будет отправлен на почту: " + email.value + ".";
    let button = document.querySelector('#btn');
    button.disabled = "disabled";
    
}