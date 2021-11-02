// Вам даны две переменные x и y, менять их не нужно. При помощи
// тернарного оператора сравните их и если x больше, чем y, то выведите фразу:
//  "x больше, чем y", иначе выведите фразу: "x не больше, чем y".
{
	let x = 10, y = 7;
	console.log(x > y ? "x is more then y" : "x isn't more then y");
}


// Пользователь вводит какое - то число(num).Используя конструкцию 
// if..else, напишите код, который делает запрос: «Введите число».
// Если посетитель вводит четное число, то выводить
//  «"Число " + num + " четное"», если нечетное: 
//  "Число " + num + " нечетное

{
	const num = prompt("Enter any numer, please");
	if (!num || num === "null" || !num.trim() || typeof (+num) !== "number" || isNaN(num)) {
		alert("You've entered invalid data")
	} else if (num % 2 === 0) {
		alert(num + " is an even number")
	} else {
		alert(num + " is an odd number")
	}
}

// Напишите код, который предлагает пользователю ввести целое число. 
// Нужно вывести на экран сколько в этом числе цифр, а также положительное
// оно или отрицательное. 
// Например, "Число " + num + " однозначное положительное".
// Достаточно будет определить, является ли число однозначным,
// двухзначным или трехзначным и более.
// Чтобы узнать длину строки которую ввел юзер в prompt нужно использовать
// let a = 'string'; 
// console.log(a.length)

{
	const num = prompt("Enter any numer, please");
	const length = num.trim().length;
	let whichOne = null;

	if (!num || num === "null" || !num.trim() || typeof (+num) !== "number" || isNaN(num)) {
		whichOne = " this is not a number at all "
	} else if (+num > 0) {
		whichOne = " is positive "
	} else if (+num === 0) {
		whichOne = " is null "
	} else {
		whichOne = " is negative "
	};
	alert(num + whichOne + length + "-digit number")
}

// Определить какое из трех, введенных пользователем, чисел максимальное и 
// вывести его на экран.Пользователь вводит поочерёдно через prompt числа. 
// Используя конструкцию if..else, напишите код, который должен определять, 
// какое из введенных чисел является наибольшим.

function checkNumber(num) {
	return (num && num !== "null" && num.trim() && typeof (+num) === "number" && !isNaN(+num)) ? true : false
}

{
	num1 = prompt("Enter first numer, please");
	num2 = prompt("Enter second numer, please");
	num3 = prompt("Enter third numer, please");

	let maxNum = null;
	if (checkNumber(num1) && checkNumber(num2) && checkNumber(num3)) {
		if (+num1 > +num2 && +num1 > +num3) { maxNum = num1 }
		else if (+num2 > +num1 && +num2 > +num3) { maxNum = num2 }
		else { maxNum = num3 }
	} else {
		maxNum = "You've entered incorrect data"
	}

	alert(maxNum);
}

// У треугольника сумма любых двух сторон должна быть больше третьей. 
// Иначе две стороны просто <лягут> на третью и треугольника не получится.
// Пользователь вводит поочерёдно через prompt длины трех сторон.
// Используя конструкцию if..else, напишите код, который должен определять,
// может ли существовать треугольник при таких длинах. Т. е. нужно сравнить
// суммы двух любых строн с оставшейся третьей стороной. Чтобы треугольник существовал, 
// сумма всегда должна быть больше отдельной стороны.

{
	num1 = prompt("Enter first side of a triangle, please");
	num2 = prompt("Enter second side of a triangle, please");
	num3 = prompt("Enter third side of a triangle, please");

	let isCanExist = null;

	if (checkNumber(num1) && checkNumber(num2) && checkNumber(num3)) {
		if (+num1 < +num2 + +num3 && +num2 < +num1 + +num3 && +num3 < +num1 + +num2) {
			isCanExist = "Yes. Ttiangle can exist"
		} else {
			isCanExist = "No. You can't build a triangle"
		}
	} else {
		isCanExist = "You've entered incorrect data"
	}

	alert(isCanExist)
}
