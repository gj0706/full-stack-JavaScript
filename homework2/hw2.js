/*

Question 1

*/

const itemsObject = [
	{ quantity: 1, price: 200 },
	{ quantity: 3, price: 350 },
	{ quantity: 5, price: 400 },
];

/*
1.1 Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
*/
const doubleArray = (arr) => {
	const doubledArr = arr.map((e) => {
		return { quantity: e.quantity * 2, price: e.price * 2 };
	});
	return doubledArr;
};

console.log(doubleArray(itemsObject));

/*
1.2 Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
*/
const filterArray = (arr) => {
	const filteredArr = arr.filter((e) => e.quantity > 2 && e.price > 300);
	return filteredArr;
};
console.log(filterArray(itemsObject));

/*
1.3 Given the array, implement a function to calculate the total value of the items.
*/
// const itemTotal = (e) => e.quality * e.price;

const totalValue = (arr) => {
	let sum = 0;
	arr.forEach((e) => {
		sum += e.quantity * e.price;
	});
	return sum;
};
console.log(totalValue(itemsObject));

/*

Question 2

Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.

*/

const string =
	" Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
	"perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

const newString1 = string
	.trim()
	.toLowerCase()
	.split(/[\s\-]+/)
	.join(" ");

const newString2 = string
	.trim()
	.toLowerCase()
	.replace(/[\s\-]+/g, " ");

console.log(newString1);
console.log(newString1 === expectedReturnString);
console.log(newString2 === expectedReturnString);

/*

Question 3

Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.

*/

const first = [
	{ uuid: 2, name: "test" },
	{ uuid: 5, name: "test5" },
	{ uuid: 3, name: "test3" },
];

const second = [
	{ uuid: 6, role: "pm" },
	{ uuid: 4, role: "engineer" },
	{ uuid: 1, role: "manager" },
	{ uuid: 2, role: "associate" },
];

const expectedReturnArray = [
	{ uuid: 1, role: "manager", name: null },
	{ uuid: 2, role: "associate", name: "test" },
	{ uuid: 3, role: null, name: "test3" },
	{ uuid: 4, role: "engineer", name: null },
	{ uuid: 5, role: null, name: "test5" },
	{ uuid: 6, role: "pm", name: null },
];

let indices = [];
let duplicated = [];
// first.forEach((e, i) => {
// 	second.forEach((d, j) => {
// 		if (e.uuid === d.uuid) {
// 			indices.push(i, j);
// 			duplicated.push({ uuid: e.uuid, role: d.role, name: e.name });
// 		}
// 	});
// });
// console.log(indices);
// console.log(duplicated);

const mergedArray = (first, second) => {
	let indices = [];
	let duplicated = [];
	first.forEach((e, i) => {
		second.forEach((d, j) => {
			if (e.uuid === d.uuid) {
				indices.push(i, j);
				duplicated.push({ uuid: e.uuid, role: d.role, name: e.name });
			}
		});
	});

	let firstFiltered = first.filter((e) => e.uuid !== first[indices[0]].uuid);
	let secondFiltered = second.filter((e) => e.uuid !== second[indices[1]].uuid);
	let merged = [...firstFiltered, ...secondFiltered, ...duplicated];
	console.log(merged);
	merged.map((e) => {
		if (e.hasOwnProperty("role") === false) {
			e.role = null;
		}
		if (e.hasOwnProperty("name") === false) {
			e.name = null;
		}
		// let newArray = { uuid: e.uuid, role: e.role, name: e.name };
		merged.sort((a, b) => a.uuid - b.uuid);
		// return merged;
	});
	return merged;
};

// let firstFiltered = first.filter((e) => e.uuid !== first[indices[0]].uuid);
// let secondFiltered = second.filter((e) => e.uuid !== second[indices[1]].uuid);
// let merged = [...firstFiltered, ...secondFiltered];
console.log(mergedArray(first, second));
// const arr1 = first.map((e) => {
// 	// return { uuid: e.uuid, name: e.name, role: null };
// 	if (e.hasOwnProperty("role") === false) {
// 		e.role = null;
// 	}
// 	if (e.hasOwnProperty("name") === false) {
// 		e.name = null;
// 	}
// 	return { uuid: e.uuid, role: e.role, name: e.name };
// });
// // console.log(arr1);

// const arr2 = second.map((e) => {
// 	if (e.hasOwnProperty("name") === false) {
// 		e.name = null;
// 	}
// 	if (e.hasOwnProperty("role") === false) {
// 		e.role = null;
// 	}
// 	return { uuid: e.uuid, role: e.role, name: e.name };
// });
// console.log(arr2);
// const mergedArray = [...arr1, ...arr2];
// console.log(mergedArray);

// const merged = first.map((item) => Object.assign({}, item, second[i]));
// console.log(merged);

// let merged = [...first, ...second];
// console.log(merged);
