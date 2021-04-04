// // Базовый код
// const productName = 'Дроид';
// const pricePerItem = 3500;

// // Пиши код ниже этой строки
// const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов.`;
// console.log(message)

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = 'общая сумма заказа к оплате, не забудь о стоимости доставки';
// const message = `Вы заказали дроидов на сумму ${pricePerDroid * orderedQuantity + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
// console.log(message)

// function sayHi() {
//   console.log('Привет, это моя первая функция!');
// }
// sayHi();

// function add(a, b, c) {

//   console.log(`Результат сложения равен ${a+b+c}`);
  
// }
  
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


// function checkAge(age) {
//   let message;

//   if () { // Дополни эту строку
//     message = 'Вы совершеннолетний человек';
//   } else {
//     message = 'Вы не совершеннолетний человек';
//   }

//   return message;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (ADMIN_PASSWORD === 'jqueryismyjam') { // Дополни эту строку
//     message =  'Отменено пользователем!';
//   } else if (ADMIN_PASSWORD === 'jqueryismyjam') { // Дополни эту строку
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
// }

// ---20
// if (ordered === 0) {
// message = 'В заказе еще нет товаров';}
//   else if (ordered > available) {
//     message = 'Слишком большой заказ, на складе недостаточно товаров!';}
//   else {
//     message = 'Заказ оформлен, с вами свяжется менеджер';}

// 21
// function isNumberInRange(start, end, number) {
//   const isInRange = ; // дополни эту строку

//   return isInRange;
// }


// 24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Пиши код ниже этой строки
// if ( totalSpent >= 50000 ) { discount = 0.1
// }
//    else if (totalSpent >= 20000 && totalSpent < 50000) {discount =0.05;
//     }
//      else if (totalSpent >= 5000 && totalSpent < 20000 ) {discount = 0.02;
//     }
//     else {
//     discount = 0;
//     }
//   // Пиши код выше этой строки
//   return discount;
// }

// 27

// function getSubscriptionPrice(type) {
//   let price;
//   // Пиши код ниже этой строки

//  switch (type) { // Дополни эту строку
//     case 'starter': // Дополни эту строку
//       price = 0; // Дополни эту строку
//       break;

//     case 'professional': // Дополни эту строку
//       price = 20; // Дополни эту строку
//       break;

//     case 'organization': // Дополни эту строку
//       price = 50; // Дополни эту строку
//       break;
//   }

//   // Пиши код выше этой строки
//   return price;
// }

// 29
// function getShippingCost(country) {
//   let message;
//   // Пиши код ниже этой строки
// switch (country) {
//   case 'Китай':
//     message = 'Доставка в Китай будет стоить 100 кредитов';
//     break;
//     case 'Чили':
//     message = 'Доставка в Чили будет стоить 250 кредитов';
//     break;case 'Австралия':
//     message = 'Доставка в Австралия будет стоить 170 кредитов';
//     break;case 'Ямайка':
//     message = 'Доставка в Ямайка будет стоить 120 кредитов';
//     break;
//     case 'Германия':
//     message = 'Извините, в вашу страну доставки нет';
//     break;case 'Швеция':
//     message = 'Извините, в вашу страну доставки нет';
//     break;
//   default: 'Извините, в вашу страну доставки нет';
// }
//   // Пиши код выше этой строки
//   return message;
// }

// 30
// function getNameLength(name) {
//   const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

//   return message;
// }

// 31
// const courseTopic = 'JavaSript для начинающих';
// // Пиши код ниже этой строки

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length -1];

// // Пиши код выше этой строки

// 33
// function formatMessage(message, maxLength) {
//   let result;
// // Пиши код ниже этой строки
//   if (message.length <= maxLength) { result = message;}
//     else {
// result = message.slice (0,maxLength) + '...';}
// // Пиши код выше этой строки
//   return result;
// }

// 36
// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//  result=message.toLowerCase().includes('sale')|| message.toLowerCase().includes('spam')
//   // Пиши код выше этой строки
//   return result;
// }


// Модуль 2
// 1
// function checkAge(age) {
//   if (age >= 18) { // Дополни эту строку
//     return 'Вы совершеннолетний человек';
//   }

//   return 'Вы не совершеннолетний человек';
// }

// Module_2 
// const friends = ['Mango', 'Kiwi', 'Poly',]
// friends[1] = 'Zamena'
// console.table(friends);


// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);

// const a = [1, 2, 3];
// const b = a;
// console.log(a, b)

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const LastIndex = friends.length - 1;

// for (let i = 0; i < friends.length - 1 ; i += 1) {
//     console.log('qqqq');
// }


// задание 9,
// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
// const stack = [];
//   const lastElement = array.length -1;
//   stack.push(array [0], array[lastElement])
  
//   return stack
//     // Пиши код выше этой строки
//   }

// const name = 'Манго';
// console.log(name.split(''));

// const message = 'JavaScript это интересно';
// console.log(message.split(' '));