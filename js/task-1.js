// 1
// const doubleNumbers = numbers.map((num) => {
//   return num ** 2;
// });
// const doubleNumbers = numbers.map((num) => num ** 2);
// console.log(doubleNumbers);

// 2
// const getDoubleNumbers = (array) => {
//   return array.map((num) => {
//     return num ** 2;
//   });
// };
// const getDoubleNumbers = (array) => array.map((num) => num ** 2);
// console.log(getDoubleNumbers(numbers));
// console.log(getDoubleNumbers([10, 20, 30]));


//? Завдання 2
//Дано масив об'єктів. Створіть новий масив, що містить усі значення
// з масивів значень кожного об'єкта, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
{ id: 1, values: [1, 2, 3] },
{ id: 2, values: [4, 5, 6]},
{ id: 3, values: [7, 8, 9] },
];

const arr = data.flatMap(num => num.values);
console.log(arr);

//? Завдання 3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

const people = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];

const result = people.some(person => person.age > 20);
console.log(result);

//? Завдання 4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbers = [2, 4, 6, 8, 10];

console.log(numbers.every(num => num % 2 === 0));

// const even = (num) => {
//     return num.every((num) => {
//         return num % 2 === 0;
//     });
// };

//? Завдання 5
// Знайдіть перше непарне число

const numbersSec = [2, 1, 6, 8, 9, 10, 12];
console.log(numbersSec.find(num => num % 2 !== 0));



//? Завдання 6
// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];
console.log(numbersArray.toSorted((a, b) => a - b))


//? Завдання 7
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ['banana', 'orange', 'apple', 'pear'];
console.log(stringArray.toSorted((a, b) => a.localeCompare(b)));


const sortStrings = (array) => {
  return array.toSorted((a, b) => {
    return a.localeCompare(b);
  });
};
const sortedArray = sortStrings(stringArray);
console.log(sortedArray); 

//? Завдання 8
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];

console.log(users.toSorted((a, b) => a.age - b.age));

//? Завдання 9
// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
]

console.log(user.filter(item => item.age > 20));

//? Завдання 10
// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

const numbers2 = [1, 2, 3, 4, 5];

console.log(numbers2.reduce((sum, number) => sum + number, 0));

// Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод subtract - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
// const calc = new Calculator();


// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24


//   console.log(result); // 24

class Calculator{
    constructor(value) {
        this.value = value;
    }

    add(value) {
        this.value += value;
        return this;
    }   
    
    subtract(value) {
        this.value -= value;
        return this;
    }

    multiply(value) {
        this.value *= value;
        return this;
    }

    multiply(value) {
        this.value *= value;
        return this;
    }
    
    getResult() {
    return this.value;
    }
};

