/*

Question 1

Given the following array and implement the table dynamically

*/

const tableInfo = {
	tableHeader: ["Student Name", "Age", "Phone", "Address"],
	tableContent: [
		{
			"Student Name": "John",
			Age: 19,
			Phone: "455 - 983 - 0903",
			Address: "123 Ave, San Francisco, CA, 94011",
		},
		{
			"Student Name": "Alex",
			Age: 21,
			Phone: "455 - 983 - 0912",
			Address: "456 Rd, San Francisco, CA, 94012",
		},
		{
			"Student Name": "Josh",
			Age: 22,
			Phone: "455 - 345 - 0912",
			Address: "789 Dr, Newark, CA, 94016",
		},
		{
			"Student Name": "Matt",
			Age: 23,
			Phone: "321 - 345 - 0912",
			Address: "223 Dr, Sunnyvale, CA, 94016",
		},
	],
};

const generateTable = (data) => {
	const table = document.querySelector("#table");
	const tHead = document.createElement("thead");
	const tr = document.createElement("tr");

	// create the table header
	const header = data.tableHeader.map((ele) => {
		// 这里返回的是一个<th>Student name</th>... 的node array
		let th = document.createElement("th");
		th.textContent = ele;
		return th;
	});
	tr.append(...header);
	tHead.append(tr);

	// create the table body
	const createTds = (ele) => {
		let td = document.createElement("td");
		td.textContent = ele;
		return td;
	};
	const tBody = document.createElement("tbody");
	const tRow = data.tableContent.map((ele) => {
		// rRow is a node list
		let tr = document.createElement("tr");
		let tdData = Object.values(ele);
		let tds = tdData.map((d) => {
			let td = createTds(d);
			return td;
		});
		tr.append(...tds);
		return tr;
	});

	tBody.append(...tRow);

	// add table head and body to the table container
	table.append(tHead);
	table.append(tBody);
};

generateTable(tableInfo);

/*

Question 2
Given the array and generate order list and unordered list dynamically as following:

*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

// function to create ordered and unorderedlist
const createList = (data, type, id) => {
	const lst = document.createElement(type);
	const liList = data.map((ele) => {
		const li = document.createElement("li");
		li.className = "lan";
		li.textContent = ele;
		return li;
	});
	lst.append(...liList);
	const container = document.querySelector("#" + id);
	container.append(lst);
};
createList(list, "ol", "ordered");
createList(list, "ul", "unordered");
// const createOrderedList = (data) => {
// 	const ol = document.createElement("ol");
// 	for (let i = 0; i < list.length; i++) {
// 		const li = document.createElement("li");
// 		li.className = "lan";
// 		li.textContent = list[i];
// 		ol.appendChild(li);
// 	}
// 	const container = document.querySelector("#ordered");
// 	console.log("ol:" + ol.innerHTML);
// 	container.appendChild(ol);
// };

// // function to create an unordered list
// const createUnorderedList = (data) => {
// 	const ul = document.createElement("ul");
// 	for (let i = 0; i < list.length; i++) {
// 		const li = document.createElement("li");
// 		li.className = "lan";
// 		li.textContent = list[i];
// 		ul.appendChild(li);
// 	}
// 	const container = document.querySelector("#unordered");
// 	console.log("ul:" + ul.innerHTML);
// 	container.appendChild(ul);
// };

// createOrderedList(list);
// createUnorderedList(list);

/*

Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list

*/

const dropDownList = [
	{ value: "newark", content: "Newark" },
	{ value: "santaClara", content: "Santa Clara" },
	{ value: "unionCity", content: "Union City" },
	{ value: "albany", content: "Albany" },
	{ value: "dalyCity", content: "Daly City" },
	{ value: "sanJose", content: "San Jose" },
];

const createDropdownList = (data) => {
	const container = document.querySelector(".opt");
	const select = document.createElement("select");
	const dropDownList = data.map(({ value, content }) => {
		const option = document.createElement("option");
		option.value = value;
		option.textContent = content;
		return option;
	});
	select.append(...dropDownList);
	container.append(select);
	// let sibling = container.children[0];
	// sibling.after(select);
	// console.log(container);
};

createDropdownList(dropDownList);

// append(): 把元素一个一个 append到table里, appendChild() 如果只有一个元素就用appendChild()
