'use strick'
//Строгий режим Пишем на стандарте ES6 обезательно нужно обьевлять let при создании перменных

// alert(12)
// alert(14)
// console.log('Привет')

// let result = confirm('Ты готов?')
// if (result === true) {
//     alert('Спасибо тогда приступим')
// } else {
//     prompt('Скажите пожалуйста почему?')
// }

//  let resultTwo = +prompt('Солько вам лет?') /* Поставил + что-бьы сделать его Number так как    они возврашают только string */
// if (resultTwo >= 18) {
//     alert('Ок тогда пристуми')
// } else {
//     alert('Извините но вы не совершенно летний')
// }

// console.log(typeof resultTwo)

let isChecked = false,
    isClose = false;

console.log(isChecked || !isClose) /* Вопросительный знак меняет значение false на true и наооборот */