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
	for (let i = 0; i < data.tableHeader.length; i++) {
		const th = document.createElement("th");
		th.textContent = `${data.tableHeader[i]}`;
		tr.appendChild(th);
	}

	tHead.appendChild(tr);
	console.log(tHead.innerHTML);

	// create the table body
	const tBody = document.createElement("tbody");
	for (let i = 0; i < data.tableContent.length; i++) {
		const tr = document.createElement("tr");
		let bodyRows = `
				<td>${data.tableContent[i]["Student Name"]}</td>
				<td>${data.tableContent[i].Age}</td>
				<td>${data.tableContent[i].Phone}</td>
				<td>${data.tableContent[i].Address}</td>`;

		tr.innerHTML = bodyRows;
		tBody.appendChild(tr);
	}

	// add table head and body to the table container
	table.appendChild(tHead);
	tHead.after(tBody);
};

generateTable(tableInfo);

/*

Question 2
Given the array and generate order list and unordered list dynamically as following:

*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

// function to create an ordered list
const createOrderedList = (data) => {
	const ol = document.createElement("ol");
	for (let i = 0; i < list.length; i++) {
		const li = document.createElement("li");
		li.className = "lan";
		li.textContent = list[i];
		ol.appendChild(li);
	}
	const container = document.querySelector("#ordered");
	console.log("ol:" + ol.innerHTML);
	container.appendChild(ol);
};

// function to create an unordered list
const createUnorderedList = (data) => {
	const ul = document.createElement("ul");
	for (let i = 0; i < list.length; i++) {
		const li = document.createElement("li");
		li.className = "lan";
		li.textContent = list[i];
		ul.appendChild(li);
	}
	const container = document.querySelector("#unordered");
	console.log("ul:" + ul.innerHTML);
	container.appendChild(ul);
};

createOrderedList(list);
createUnorderedList(list);

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
	const select = document.createElement("select");
	for (let i = 0; i < dropDownList.length; i++) {
		const option = document.createElement("option");
		option.value = dropDownList[i].value;
		option.textContent = `${dropDownList[i].content}`;
		select.appendChild(option);
	}

	let container = document.querySelector(".opt");
	let sibling = container.children[0];
	sibling.after(select);
	console.log(container);
};

createDropdownList(dropDownList);
