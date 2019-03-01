// 1 упражнение
//var num = 1;
//
//function check(num) {
//    while (num < 100) {
//    num++;
//    if (num % 2 === 0 && num != 2) {
//        check();
//    } else if (num % 3 === 0 && num != 3) {
//        check();
//    } else if (num % 5 === 0 && num != 5) {
//        check();       
//    } else if (num % 7 === 0 && num != 7) {
//        check();
//    } else {
//        console.log(num);
//    }
//}
//};
//
//check(num);

//2 упражнение массив с товарами массив с ценами

var goods = ['мяч','обруч', 'лото', 'лыжи', 'клюшка'];
var prices = [5, 10, 15, 20, 25, 0];
var userBag = [];
var userPrice = [];
var n = 0;
var summa = 0;

var countBasketPrice = function(){
    summa = summa + userPrice[n];
    return summa;
}

do {
    var choice = + prompt('Что вы хотите купить? \n\r 1 - Мяч \n\r 2 - Обруч \n\r 3 - Лото \n\r 4 - Лыжи \n\r 5 - Клюшка \n\r 6 - Хватит');
    if (choice < 1 || choice > 6 || isNaN(choice)) {
        console.log('Введите корректный номер товара')
    } else if (choice != 6) {
        userBag.push(goods[choice - 1]); 
        userPrice.push(prices[choice - 1]);
        console.log('В вашу корзину добавлено: ' + userBag[n] + ' по цене ' + userPrice[n]);             
        countBasketPrice();
        n++;
        console.log('Общая сумма покупок: ' + summa);
    }
} while (choice != 6);