//===работа с концом массива=====================================================================================================================================================

// pop() - удаляет последний элемент из массива

// const arr = [1, 2, 3, 6, 8];

// arr.pop();

// console.log(arr);

// push() - добавляет последний элемент из массива

// const arr = [1, 2, 3, 6, 8];

// arr.push(10);

// console.log(arr);

//===работа с концом массива SHIFT UNSHIFT=====================================================================================================================================================

// применяется редко

//===Перебор массива=====================================================================================================================================================

// const arr = [1, 2, 3, 6, 8];

// for (let i = 0; i < arr.length; i++) {
// 	// цикл будет отрабатывать до тех пор пока не закончатся элементы внутри массива
// 	сconsole.log(arr[i]);
// }

// const arr = [1, 2, 3, 6, 8];

// for (let value of arr) {
// 	console.log(value);
// }

// const arr = [1, 2, 3, 6, 8];


// arr[99] = 0;
// console.log(arr.length);

// for (let value of arr) {
// 	console.log(value);
// }

// + это метода. что мы можем использовать break и continue

//===Методы перебора массива FOR EACH просто его перебирает=====================================================================================================================================================

// forEach

// const arr = [1, 2, 3, 6, 8];

// arr.forEach(function(item, i, arr) {
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// })

// в аргумент может принимать три аргумента. 1-й аргумент который мы сейчас перебираем, назвать можно абсолютно как удобно; слудуюший аргумент это номер по порядку(индекс); 3-1 аргумент это ссылка на массив, который мы перебираем



//===Методы, которые будут заниматься трансформацие массива, те они берут исходный материал и его модифицируют=====================================================================================================================================================

// arr.map() ---  метод map может перебрать каждый элемент, но при этом его модифицируя, он вернет новый массив, который будет уже сильно отличаться от старого, все элементы будут модифицированны

// arr.filter() --- отфильтровываем массив по тому критерию который мы туда задаем, например оставить  только четные числа или отсавить те элементы у которы тип строка

// arr.every/some


// arr.reduce


// Метод split --- например мы получили строку, где через запятую мы получили товары . Мы хотим их превратить в массив, где товары будут лежать по порядку


// const arr = [2, 3, 6, 8, 10];


// const str = prompt("", "");
// const products = str.split("", "");
// console.log(products);



// а тепереь наоборот. на основаниии массива мы хотим сформровать строку, объединение элементов массива


// const str = prompt("", "");
// const products = str.split("", "");
// console.log(products.join('; '));


// метдо сортировки sort(); изначально сотрирует все как строки

// const str = prompt("", "");
// const products = str.split("", "");
// products,sort();
// console.log(products.join('; '));

// Отсортировалось в алфавитном порядке

// const arr = [2, 13, 26, 8, 10];

// arr.sort();
// console.log(arr);

// чтобы этого не было

// const arr = [2, 13, 26, 8, 10];

// arr.sort(compareNum);
// console.log(arr);

// function compareNum (a, b) {
// 	return a - b;
// }

//===Псевдомассивы --- это объект, струткрура которого совпадает с структурой массива , но у него не будет никаких псевдомассивов=====================================================================================================================================================

// const arr = [2, 13, 26, 8, 10];

// arr.sort(compareNum);
// console.log(arr);

// function compareNum (a, b) {
// 	return a - b;
// }


//===HOME WORK=====================================================================================================================================================

// Задачи:

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

// 1 - вариант

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
// 	if (arr.length === 0) {
// 		return 'Семья пуста';
// 	}

// 	const names = arr.join(' ');
// 	return `Семья состоит из: Peter Ann Alex Lind`;
// }

// console.log(showFamily(family));
// console.log(showFamily([]));


// 2 - вариант

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
// 	let str = '';
// 	arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
	
// 	arr.forEach(names => {
// 		str += `${names} `;
// 	});

// 	return str;
// }

// console.log(showFamily(family));
// console.log(showFamily([]));


// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin


// 1-й вариант
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 	  const city = arr[i].toLowerCase();
// 	  console.log(city);
// 	}
//  }
 
//  standardizeStrings(favoriteCities);

// 2-й вариант
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
// 	arr.forEach(city => {
// 		const standardizedCity = city.toLowerCase();
// 		console.log(standardizedCity);
// 	})
//  }

//  standardizeStrings(favoriteCities);


// 3-й вариант
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
// 	arr.forEach(city => {
// 		console.log(city.toLowerCase());
// 	})
//  }

//  standardizeStrings(favoriteCities);

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:

// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

// 1-й варинат
// const someString = 'This is some strange string';

// function reverse(str) {
// 	if (typeof str !== 'string') {
// 	  return 'Ошибка!';
// 	}
// 	//разбиваем строку на массив символов с помощью метода split(''), меняем порядок элементов в массиве с помощью метода reverse()
// 	const reversedArray = str.split('').reverse();
// 	//объединяем элементы массива обратно в строку с помощью метода join('')
// 	const reversedString = reversedArray.join('');
// 	return reversedString;
//  }
 
//  console.log(reverse(someString)); // 'gnirts egnarts emos si sihT'
//  console.log(reverse(123));

// let fruits = ["Яблоко", "Апельсин", "Слива"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits[0] = 'Messi';
// fruits[1] = 'Ronaldo';
// fruits[2] = 'Kossovskyi';

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// console.log(fruits[fruits.length - 1]);

// console.log(fruits.at(-2));

// pop - Удаляет последний элемент из массива и возвращает его

// console.log(fruits.pop());

// // push - Добавляет элемент в конец массива:

// console.log(fruits.push('Messi'));
// console.log(fruits);


// let fruits = ["Банан"];
// let arr = fruits;

// console.log(arr === fruits);

// arr.push('Messi');
// console.log(arr);
// console.log(fruits);

// let fruits = ["Яблоко", "Апельсин", "Слива"];
// let arr = ["Яблоко", "Апельсин", "Слива"];


// for (let fruit of fruits) {
// 	console.log( fruit );
//  }

//  for (let key in arr) {
// 	console.log( key ); 
//  }

//  for (let key in arr) {
// 	console.log( arr[key] ); // Яблоко, Апельсин, Груша
//  }


// let fruits = [];
// fruits[123] = "Яблоко";

// console.log(fruits);

// let matrix = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// 	[10, 11, 12],
//  ];

//  console.log(matrix[1][2])

//========================================================================================================================================================

// Что выведет следующий код?

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// console.log( fruits.length ); // ?

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
// Массив по ходу выполнения операций:

// let styles = ['Джаз', 'Блюз'];

// styles.push('Рок-н-ролл');

// console.log(styles);

// styles[Math.floor((styles.length - 1) / 2)] = "Классика";

// console.log(styles);

// console.log(styles.shift());
// styles.unshift("Рэп", "Регги");
// console.log(styles);


// Каков результат? Почему?

// let arr = ["a", "b"];

// arr.push(function() {
//   console.log( this );
// });

// arr[2](); // 

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0»


// function sumInput() {
// 	let numbers = [];

// 	while (true) {
// 		let value = prompt("Введите число", 0);
// 		  // Прекращаем ввод?
// 		  if (value === "" || value === null || !isFinite(value)) break;
// 		  numbers.push(+value);
// 	}

// 	let sum = 0;
// 	for (let number of numbers) {
// 		sum += number;
// 	 }
// 	 return sum;
// }


// Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// const fruit = [];

// function showFamily(arr) {
// 	if (arr.length === 0) {
// 		return 'Семья пуста';
// 	}

// 	let str = arr.join(' ');
// 	return `Семья состоит из: ${str} `

// }

// console.log(showFamily(family));
// console.log(showFamily(fruit));

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
// 	arr.forEach(city => {
// 		console.log(city.toLowerCase());
// 	});
// }

// console.log(standardizeStrings(favoriteCities));

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:

// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

// const someString = 'This is some strange string';



// function reverse(str) {
// 	if (typeof str !== 'string') {
// 		return 'Ошибка!';
// 	}
// // 	В строке кода return str.split('').reverse().join(''); мы используем несколько методов строк для выполнения этой задачи.

// // split('') разбивает строку на массив символов, где каждый символ становится отдельным элементом массива.
// // reverse() меняет порядок элементов массива на противоположный, т.е. переворачивает массив задом наперед.
// // join('') объединяет элементы массива в строку, соединяя каждый элемент без разделителей.

// 	return str.split('').reverse().join('');

// }

// console.log(reverse(someString));



