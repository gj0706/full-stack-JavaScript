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
	const table = document.querySelector("#table2");

	// create table header
	let tHead = "";
	for (let i = 0; i < data.tableHeader.length; i++) {
		let headerRow = `
        <th>${data.tableHeader[i]}</th>
      `;
		tHead += headerRow;
	}
	tHead = `
    <thead>
      <tr>
        ${tHead}
      </tr>
    </thead>`;
	console.log(tHead);
	// create table body
	let tBody = "";
	for (let i = 0; i < data.tableContent.length; i++) {
		let bodyRows = `
      <tr>
        <td>${data.tableContent[i]["Student Name"]}</td>
        <td>${data.tableContent[i].Age}</td>
        <td>${data.tableContent[i].Phone}</td>
        <td>${data.tableContent[i].Address}</td>
      </tr>`;
		tBody += bodyRows;
	}
	tBody = `
    <tbody>
      ${tBody}
    </tbody>`;
	console.log("tbody:" + tBody);
	table.innerHTML = `
    ${tHead}
    ${tBody}
  `;
	console.log(table.innerHTML);
};

generateTable(tableInfo);

/*

Question 2
Given the array and generate order list and unordered list dynamically as following:

*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

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
