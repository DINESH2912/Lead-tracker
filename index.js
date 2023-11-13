let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn"); // Corrected variable name

// Check if leads exist in local storage and set myLeads accordingly
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads(); // Call renderLeads to display leads on page load
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
});

deleteBtn.addEventListener("click", function() { // Corrected variable name
    myLeads = []; // Corrected variable name
    localStorage.clear();
    renderLeads(); // Update the UI after clearing leads
});

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}
