// усложним задачу теперь нам надо найти все даты включая 18 марта 2021

const text = `ЖИЗНЬ
	В Днепре хотят перекрыть движение транспорта на косе на Красном Камне
	Создано 03.04.2021


	В Днепре планируют перекрыть движение по косе в Новокодакском районе города, на жилмассиве Красный Камень.
	Для ограничения движения там хотят установить шлагбаум.
	года
	Запретить собираются движение транспорта на 
	рекреационной территории косы в направлении острова Горелого на основании письма инспекции по вопросам 
	благоустройства горсовета от 18 марта 2021 года.`;


function findData(text) {
	const dateArr = text.match(/(\d\d\.){2}\d{4}|\d\d [а-я]{3,8} \d{4}/ig);
	// const dateArr = text.match(/((\d\d\.){2}|\d\d [а-я]{3,8} )\d{4}/ig);
	console.log(dateArr);
}
findData(text);