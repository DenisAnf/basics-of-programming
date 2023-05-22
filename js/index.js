/* Задание 1
Напишите функцию multiple(a, b), которая перемножает два числа между собой. Функция возвращает результат умножения.*/

function multiple(a, b) {
	return a * b;
}
console.log(multiple(10, 20));


/* Задание 2
Напишите функцию buildDate(day, month, year), которая принимает на вход числами день недели, месяц и год. Функция возвращает дату строкой в формате dd/mm/yyyy. */

function buildDate(day, month, year) {
	return `${day}/${month}/${year}`;
}
console.log(buildDate(23, 5, 2023));


/* Задание 3
Напишите функцию isAdult(age), которая принимает на вход возраст. Если возраст больше или равен 18, функция возвращает true. Иначе - false. */

const userAge = 35;
const userAdult = isAdult(userAge);
console.log(userAdult);

function isAdult(age) {
	return age > 18;
}


/* Задание 4
Напишите функцию getMonthByNumber(monthNumber), которая на вход принимает порядковый номер месяца от 1 до 12. Функция возвращает строкой название месяца (например, 'март'). Для решения задачи можно применить конструкцию switch-case (just google it). */


// 1 вариант
const monthNumberInSequence = 2;
const monthName = getMonthByNumber(monthNumberInSequence);
console.log(monthName);

function getMonthByNumber(monthNumber) {
	switch (monthNumber) {
		case 1: return 'Январь';
			break;
		case 2: return 'Февраль';
			break;
		case 3: return 'Март';
			break;
		case 4: return 'Апрель';
			break;
		case 5: return 'Май';
			break;
		case 6: return 'Июнь';
			break;
		case 7: return 'Июль';
			break;
		case 8: return 'Август';
			break;
		case 9: return 'Сентябрь';
			break;
		case 10: return 'Октябрь';
			break;
		case 11: return 'Ноябрь';
			break;
		case 12: return 'Декабрь';
			break;
		default: return 'Данное число не соответствует месяцам';
	}
}


// 2 вариант
const monthNumberInSequenceOther = 12;
const monthNameOther = getMonthByNumberOther(monthNumberInSequenceOther);

console.log(monthNameOther);

function getMonthByNumberOther(monthNumberOther) {
	if (monthNumberOther > 12 || monthNumberOther < 1) {
		return 'Данное число не соответствует месяцам';
	}
	else {
		const date = new Date();
		date.setMonth(monthNumberOther - 1);

		return date.toLocaleString('ru-RU', {
			month: 'long',
		});
	}
}


/* Задание 5
Напишите функцию convertRub(valueRub, currency), которая конвертирует рубли в другие валюты. Функция принимает число в рублях и валюту для перевода строкой ('USD', 'EUR', 'KZT', 'AED'). Функция возвращает результат конвертации. Для решения задачи можно применить конструкцию switch-case (just google it). */

const RUB = 5000;
const CONVERT_RATES = 'USD'
let convertValue = convertRub(RUB, CONVERT_RATES);
console.log(`${RUB} RUB = ${convertValue} ${CONVERT_RATES}`);

function convertRub(valueRub, currency) {
	const RATES = {
		USD: 0.01251,
		EUR: 0.011561,
		KZT: 5.61,
		AED: 0.045926
	};

	if (currency in RATES) {
		let result = valueRub * RATES[currency];
		return Math.round(result*100)/100;
	} else {
		return 'Неверно указано обозначение валюты, используйте USD, EUR, KZT или AED';
	}
}



