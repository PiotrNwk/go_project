// vanilla JS logic for testing
import servicesData from '../../data/services.js';

export function runServicesTest() {
  console.log("✅ Services test script loaded");
}

export function renderMainTable(data) {
console.log("✅ renderMainTable test script loaded");
const mainTableBody = document.querySelector('table');
mainTableBody.id = "mainTable";
mainTableBody.innerHTML = '';

// Create thead and header row
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
headerRow.className = "border border-gray-300 px-3 py-2 text-left whitespace-nowrap font-semibold";

// Get column names dynamically from data
let allColumns = Object.keys(servicesData[0]);
let mainColumns = allColumns.slice(0, 6);
let allValues = Object.values(servicesData[0]);
let detailColumns = allColumns.slice(6);

mainColumns.forEach(col => {
  const th = document.createElement("th");
  th.textContent = col;
  th.className = "border border-gray-300 px-3 py-2 text-left whitespace-nowrap font-semibold";
  headerRow.appendChild(th);
});

// Important: append header row to thead, and thead to table
thead.appendChild(headerRow);
mainTableBody.appendChild(thead);

// Optional: create tbody

const tbody = document.createElement("tbody");

let mainValues = allValues.slice(0, 6);
console.log("Main Values:", mainValues);

mainValues.forEach(val => {
  const tr = document.createElement("tr");
  tr.textContent = val;
  tr.className = "border border-gray-300 px-3 py-2 text-left whitespace-nowrap font-semibold";
  tbody.appendChild(tr);
});

// if (servicesData && servicesData.length > 0) {
//   const valuesData = Object.values(servicesData[0]);
//   valuesData.forEach(item => {
//     // console.log("Item:", item);
//   });
// }

mainTable.appendChild(tbody);

}

// Render detail table
export function showDetails(item) {
console.log("✅ showDetails test script loaded");
// console.log("Detail table columns:", detailColumns);
}