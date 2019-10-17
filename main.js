'use strict';
/*function getRandText(n) {
    var txt = "Сдучайные целые числа (от 1 до 10):<br>";
    for (var k = 1; k <= n; k++) {
        txt += myRand() + "*";
    }

    return txt;
}
document.write(getRandText(20));

function myRand() {
    return 1 + Math.floor(10 * Math.random());
}



document.write("<h4>Листинг 1.2<h4>");

/*function rever(value) {
    var tmp = 0;
    var flag = 0 > value;
    flag && (value *= -1);
    while (value > 0) {
        tmp *= 10;
        tmp += value % 10;
        value = parseInt(value / 10);
    }
    return flag ? -tmp : tmp;
}
alert(rever(123456789));

function reverseStr(str) {
    return str.split("").reverse().join("");
}
alert(reverseStr("1,2,3,4,5,6,7"));*/
/*var objA = {
    name: "Иван Петров",
    age: 38,
    show: function() {
        document.write("<u>Имя</u>:" + this.name + "<br>");
        document.write("<u>Возраст</u>:" + this.age + "<br>");
    }
}
document.write("<b>Объект objA:</b><br>");
objA.show();
var objB = objA;
document.write("<b>Овъект objB:</b><br>");
objB.show();
objA.name = "Петр Иванов";
objA.age++;
document.write("<b>Овъект objA:</b><br>");
objA.show();
document.write("<b>Овъект objB:</b><br>");
objB.show();


function fun1() {
    var chbox = document.getElementById('one');
    if (chbox.checked) {
        alert('Выбран');
    } else {
        alert('Не выбран');
    }
}


function fun1() {
    var radi = document.getElementsByName('r1');
    for (var i = 0; i < radi.length; i++) {
        if (radi[i].checked) {
            alert('Выбран' + " " + i + " " + 'элемент');
        }
    }
}


function fun2() {
    var sel = document.getElementById('mySelect').selectedIndex;
    var options = document.getElementById('mySelect').options;
    alert('Выбрана опция ' + options[sel].text);
}


function fun3() {
    var rng = document.getElementById('r2');
    var div = document.getElementById('test');
    div.style.width = rng.value + 'px';
}



document.getElementById('nev').onmouseover = function(event) {
    var target = event.target;
    if (target.className == 'menu-item') {
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }

}

document.onmouseover = function(event) {
    var target = event.target;
    console.log(event.target);
    if (target.className != 'menu-item' && target.className != 'submenu') {
        closaMenu();
    }
}

function closeMenu() {
    var menu = document.getElementById('nav');
    var subm = document.getElementsByClassName('submenu');
    for (var i = 0; i < subm.length; i++) {
        subm[i].style.style.display = "none";
    }
}*/
/*function checkAge(age) {
    return (age > 18) || alert('А родители разрешили');
}

function check(age) {
    return (age > 18) ? true : alert('А родители в курсе');
}*/
/*function min(a, b) {
    if (a > b) {
        alert(b);
    } else {
        alert(a);
    }
}
min(15, 5);

function getValues(a, b) {
    return (a > b) ? alert(b) : alert(a);
}
getValues(17, 20);*/


/*function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
let x = prompt('Введите значение');
let n = prompt('Введите второе значение');
if (n < 0) {
    alert(`Степень ${n} не поддерживается! Введите целое число`);
} else {
    alert(pow(x, n));
}*/
/*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );*/

/*let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}
ask(
    'Вы согласны?',
    () => { alert('Вы согласились.') },
    () => { alert('Вы отменили выполнение.') }
)*/
/*function chislo() {
    let num = '';
    for (let i = 4; i <= 400; i++) {
        num += i + ' ';
    }
    return num;
}
console.log(chislo());*/
/*function num() {
    let chislo = '';
    for (let i = 4; i <= 13; i += 3) {
        chislo += i + ' ';
    }
    return chislo;
}
console.log(num());*/
/*function num() {
    let Num1 = '';
    for (let i = 654; i >= 0; i--) {
        Num1 += i + '<br>';
    }
    return Num1;
}
document.write(num());*/

/*function Num() {
    let num = '';
    for (let i = -4; i <= 100; i++) {
        num += i + ' , ';
    }
    return num;
}
document.write(Num());*/
/*function multiply() {
    let num = '';
    for (let i = 1; i <= 9; i++) {
        num += '(' + 7 + ' * ' + i + ' = ' + 7 * i + ') ' + '<br>';
    }
    return num;
}
document.write(multiply());*/
/*function Num() {
    let num1 = '';
    for (let i = 1000; i <= 2000; i++) {
        num1 += '&#' + i + ' ';
    }
    return num1;
}
document.write(Num());*/
/*function Num() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum += i;
        document.write(sum + ' ');
    }
    return sum;
}
document.write(Num());*/
/*function Proithvedenie() {
    let mult = 1;
    for (let i = 1; i <= 3; i++) {
        mult *= i;
    }
    return mult;
}
document.write(Proithvedenie());*/
/*let user = {}
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pate';
delete user.name;*/
/*function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}*/
/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let obj = 0;
for (let key in salaries) {
    obj += salaries[key];
}

document.write(obj);*/

/*let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof menu[key] == 'number') {
            menu[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
alert('width = ' + menu.width + '<br>' + 'height = ' + menu.height + '<br>' + 'title = ' + menu.title);*/
/*let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // ключи
    alert(key); // name, age, isAdmin
    // значения ключей
    alert(user[key]); //John, 30, true
}*/







/*function reverse1(str) {
    let split = str.split("");
    let reverse = split.reverse();
    let join = reverse.join("");
    return join;
}

alert(reverse1("Геюга"));


function reverse2(str) {
    return str.split("").reverse().join("");
}

alert(reverse2("Кракатао"));


function reverse3(str) {
    let newString = " ";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
alert(reverse3("cofeco"));*/

/*function random(q, w) {
    return q + Math.random() * (w - q);

}

console.log(Math.round(random(1, 150)));
console.log(random(1, 200).toFixed(2));
console.log(random(1, 1000).toFixed(2));*/


/*function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return rand.toFixed(0);
}
console.log(randomInteger(1, 10));


function random(min, max) {
    let rand = min + Math.random() * ((max + 1) - min);
    return Math.floor(rand);
}
console.log(random(1, 100));*/

/*let str = `Hello`;

// получаем первый символ
alert(str[0]); // H
alert(str.charAt(0)); // H

// получаем последний символ
alert(str[str.length - 1]); // o*/

/*
alert('Interface'.toUpperCase()); // INTERFACE
alert('Interface'.toLowerCase()); // interface
alert('Interface' [0].toLowerCase()); // 'i'
*/

/*
let str = "Widget with id";

if (str.indexOf("Widget") != -1) {
    alert("Совпадение есть"); // теперь работает
}
*/


/*
let str = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
alert( str.slice(0, 5) );
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
alert( str.slice(0, 1) );
*/

/*
function ucFirst() {
    let str = "красота";
    //if (!str) return str;
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
}
console.log(ucFirst());
*/

/*
function checkSpam(str) {
    let fuckSting = str.toLowerCase();
    return fuckSting.includes('viagra') || fuckSting.includes('xxx');
}
console.log(checkSpam('Viagra'));
console.log(checkSpam('xxx'));
console.log(checkSpam('Mers'));

*/



/*function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}
console.log(truncate('Долговато я ебался!', 18));
*/

/*
function truncate1(str, maxlength) {
    if (str.length >= maxlength) {
        console.log(str.slice(0, maxlength - 1) + '…');
    } else {
        return str;
    }
}
console.log(truncate1('Всем привет! Как делишки?', 10));
*/

/*
function extractCurrencyValue(str) {
    return str.includes('$');
}
console.log(extractCurrencyValue('$6000'));
*/
/*
function extractCurrencyValue(str) {
    return str.slice(1);
}
console.log(extractCurrencyValue('$6000'));
*/

/*
let styles = ['Джаз', 'Блюз', ];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
styles.shift();
styles.unshift('Рэп', 'Регги');
console.log(styles);
*/

/*
let styles = ['Джаз', 'Блюз', 'Рэп', 'Регги'];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
styles.shift();
styles.unshift('Рэп', 'Регги');
console.log(styles);
*/

/*function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt('Введите числа: ', 0);
        // Прекращаем ввод?
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += i;
    }
    return sum;
}
alert(sumInput());
*/
/*function camelize(str) {
    //Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
    return str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}
console.log(camelize('map-split-join'));
*/



/*function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
let arr = [1, 3, 5, 6, 2, 7];
let filterR = filterRange(arr, 3, 7);
console.log(filterR);
*/

/*function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
filterRangeInPlace(arr, 1, 5);
console.log(arr);
*/


/*function revers(arr) {
    let split = arr.split('');
    let reverse = split.reverse();
    let join = reverse.join(', ');
    return join;
}
alert(revers('qwerty'));
*/

/*let arr = [1, 2, 3, 4, -5];
arr.sort((a, b) => a - b);
console.log(arr);
*/

/*
//Сортировать в обратном порядке
let arr = ["HTML", "JavaScript", "CSS"];
let sortArr = arr.concat().sort();
console.log(sortArr, arr);
*/
/*
//Сортировать в обратном порядке
function copySorted(arr) {
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr)
console.log(sorted, arr);*/






//Создать расширяемый калькулятор
function Calculator() {

}


/*
//У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
function nameS() {

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [vasya, petya, masha];
    let names = users.map(i => i.name);
    return names;
}
console.log(nameS());*/

/*function nameS() {


    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [vasya, petya, masha];

    let usersMapped = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id,
    }))
    return usersMapped;
}
console.log(nameS());*/

/*
//Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [vasya, petya, masha];


sortByAge(users);

// теперь: [vasya, masha, petya]
console.log(users[0], users[1], users[2]);*/


/*
//Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
let num = [1, 2, 3];
shuffle(num);
console.log(num);*/



/*
//Он запускает shuffle 1000000 раз и считает вероятность появления для всех возможных вариантов arr:
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  // подсчёт вероятности для всех возможных вариантов
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
  // показать количество всех возможных вариантов
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
  }



  //Более правельный пример!!! Алгоритм «Тасование Фишера — Йетса» намного быстрее, так как в нём нет лишних затрат на сортировку!!!
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // подсчёт вероятности для всех возможных вариантов
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
  // показать количество всех возможных вариантов
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
  }*/



/*
//Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
function reducE(users) {
    return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

console.log(reducE(arr)); // (25 + 30 + 29) / 3 = 28*/


/*
//Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
    let result = [];
    //for (let item of arr) – современный синтаксис только для значений элементов (к индексам нет доступа).
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }

    }
    return result;
}
console.log(unique(strings));
*/