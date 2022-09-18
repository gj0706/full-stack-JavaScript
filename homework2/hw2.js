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

// method 1: use map() and return a newly updated object for each element in the array
const doubleArray1 = (arr) => {
	const doubledArr = arr.map((e) => {
		return { quantity: e.quantity * 2, price: e.price * 2 };
	});
	return doubledArr;
};

// method 2: use destruction
const doubleArray2 = (arr) => {
	const doubledArr = arr.map(({ quantity, price }) => {
		quantity = quantity * 2;
		price = price * 2;
		return { quantity, price };
	});
	return doubledArr;
};

// test
let doubled1 = doubleArray1(itemsObject);
let doubled2 = doubleArray2(itemsObject);
console.log(doubled1);
console.log(doubled2);

/*
1.2 Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
*/

// use filter() to filter out elements
const filterArray = (arr) => {
	const filteredArr = arr.filter((e) => e.quantity > 2 && e.price > 300);
	return filteredArr;
};

// test
let filtered = filterArray(itemsObject);
console.log(filtered);

/*
1.3 Given the array, implement a function to calculate the total value of the items.
*/

// method 1: use forEach() to iterate array and acuumulate sum
const totalValue1 = (arr) => {
	let sum = 0;
	arr.forEach((e) => {
		sum += e.quantity * e.price;
	});
	return sum;
};

// method 2: use reduce() 	note: reduce does not change the original array
const totalValue2 = (arr) => {
	let reduced = arr.reduce((acc, obj) => {
		return acc + obj.quantity * obj.price;
	}, 0);
	return reduced;
};

// test
let total1 = totalValue1(itemsObject);
let total2 = totalValue2(itemsObject);
console.log(total1);
console.log(total2);

/*

Question 2

Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.

*/

const string =
	" Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
	"perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

// method 1: use split() and join()
const newString1 = string
	.trim()
	.toLowerCase()
	.split(/[\s\-]+/)
	.join(" ");

// method 2: use replace()
const newString2 = string
	.trim()
	.toLowerCase()
	.replace(/[\s\-]+/g, " ");

// test
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

const mergeArray = (first, second) => {
	// 1. find the indices of objects in the two arrays that share the same uuid, merge the objects and get a new object
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

	// 2. filter out the duplicated objects, merge the rest of the two arrays
	let firstFiltered = first.filter((e) => e.uuid !== first[indices[0]].uuid);
	let secondFiltered = second.filter((e) => e.uuid !== second[indices[1]].uuid);
	let merged = [...firstFiltered, ...secondFiltered];

	// 3. check if each object has a certain property, if it doesn't, create one with null value
	merged.map((e) => {
		if (e.hasOwnProperty("role") === false) {
			e.role = null;
		}
		if (e.hasOwnProperty("name") === false) {
			e.name = null;
		}
	});

	// 4. append the duplicated object to the final array, and sort by uuid
	let final = [...merged, ...duplicated];
	final.sort((a, b) => a.uuid - b.uuid);
	return final;
};

// test
let merged = mergeArray(first, second);
console.log(merged);
