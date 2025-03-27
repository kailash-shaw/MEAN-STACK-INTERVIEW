class practice {
	constructor() {

	}

	/***:- ordering with single string value like "hello" or 1546879-:***/
	stringAscending(params) {
		let string = params;
		let stringArray = string.split('');

		let strLength = string.length;
		for (let i = 0; i < strLength - 1; i++) {
			for (let j = 0; j < strLength - 1 - i; j++) {

				/***:- sign > for ascending and sign < for descending -:***/
				if (stringArray[j] > stringArray[j + 1]) {
					let temp = stringArray[j];
					stringArray[j] = stringArray[j + 1];
					stringArray[j + 1] = temp;
				}

			}

		}

		return stringArray.join('')
	}

	/***:- ordering with array string value["kailash", "shaw","kailash"] or [5,9,8,7,5,8,9,7]  -:***/
	arrayAscending(params) {
		let arrayVal = params;

		let strLength = arrayVal.length;
		for (let i = 0; i < strLength - 1; i++) {
			for (let j = 0; j < strLength - 1 - i; j++) {

				/***:- sign > for ascending and sign < for descending -:***/
				if (arrayVal[j] > arrayVal[j + 1]) {
					let temp = arrayVal[j];
					arrayVal[j] = arrayVal[j + 1];
					arrayVal[j + 1] = temp;
				}

			}

		}

		return arrayVal;
	}


	/***:- ordering with string with comma like "1,5,8,9,7,9" or "kailash, shaw, shaw"  -:***/
	stringWithComma(params) {
		let string = params;
		let stringArray = string.split(',');
		let strLength = stringArray.length;
		for (let i = 0; i < strLength - 1; i++) {
			for (let j = 0; j < strLength - 1 - i; j++) {
				if (stringArray[j] > stringArray[j + 1]) {
					let temp = stringArray[j];
					stringArray[j] = stringArray[j + 1];
					stringArray[j + 1] = temp;

				}
			}
		}
		return stringArray.join(',');
	}


	/***:- remove duplicate string with comma like "1,5,8,9,7,9" or "kailash, shaw, shaw"  -:***/
	removeDuplicateStringWithComma(params) {
		let string = params;
		let stringArray = string.split(',');
		let strLength = stringArray.length;
		let result = [];
		for (let i = 0; i < strLength; i++) {
			if (result.indexOf(stringArray[i]) === -1) {
				result.push(stringArray[i]);
			}


		}
		return result.join(',');
	}

	filterDuplicateLetterFromString(params) {
		let string = params;
		let stringArray = string.split('');

		let strLength = string.length;
		console.log(strLength);

		let result = [];

		for (let i = 0; i < strLength; i++) {
			if (result.indexOf(stringArray[i]) === -1) {
				result.push(stringArray[i]);
			}
		}

		return result.join('');

	}

	/***:- remove duplicate from array string value or integer value  -:***/
	filterDuplicateFromArray(params) {

		let arrayVal = params;

		/***:- 1 options  -:***/
		// return [...new Set(arrayVal)];

		/***:- 2 options  -:***/
		let strLength = arrayVal.length;
		let result = [];

		for (let i = 0; i < strLength; i++) {
			if (result.indexOf(arrayVal[i]) === -1) {
				result.push(arrayVal[i]);
			}
		}

		return result;



	}


	/***:- maximum and minimum number using for loop  -:***/
	maxNumber(params) {

		// const max = Math.max(...params);
		// const min = Math.min(...params);

		let arrayVal = params;
		let max = arrayVal[0];
		for (let i = 0; i < arrayVal.length; i++) {
			if (arrayVal[i] < max) {
				max = arrayVal[i];
			}
		}
		return max;
	}
}


let obj = new practice();
// console.log(obj.stringAscending('51654'));
// console.log(obj.arrayAscending([1, 5, 6, 4, 5]));
// console.log(obj.stringWithComma("1,5,6,4,5"));
//console.log(obj.removeDuplicateStringWithComma("1,5,6,4,5"));
// console.log(obj.filterDuplicateLetterFromString('hello'));
// console.log(obj.filterDuplicateFromArray(["kailash", "shaw", "kailash"]));
console.log(obj.maxNumber([5, 9, 7, 5, 1, 6, 8, 9, 7]));
