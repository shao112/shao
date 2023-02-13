/*************************************************
* 透過 Google Cloud Platform 串接 Google Sheet API
**************************************************/
const MsgSheetId = '1QKdxwpTEGi_wa5B96G9GmTolHg8nPppbBzkPRImLDRo';
const MsgSheetSRange = 'Shao留言板!A2:$C';
const MsgSheetAPIKey = 'AIzaSyBIdagodBjndLFGnQ2NvcH_ZT6-NW90Gvw';
const MsgSheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${MsgSheetId}/values/${MsgSheetSRange}?key=${MsgSheetAPIKey}`;

fetch(MsgSheetUrl)
.then(response => response.json())
.then(data => {
    document.getElementById("Number_Of_Friends").innerHTML = data.values.length
    var tableBody = document.getElementById("MsgTable").getElementsByTagName("tbody")[0];

    for (var i = 0; i < data.values.length; i++) {
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        cell1.innerHTML = data.values[i][0];
        row.appendChild(cell1);

        var cell2 = document.createElement("td");
        cell2.innerHTML = data.values[i][1];
        row.appendChild(cell2);

        var cell3 = document.createElement("td");
        cell3.innerHTML = data.values[i][2];
        row.appendChild(cell3);

        tableBody.appendChild(row);
    }
})
.catch(error => {
    console.error('Error fetching data:', error);
});