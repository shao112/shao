/*************************************************
* 透過 Google Cloud Platform 串接 Google Sheet API
**************************************************/
const MembersSheetId = '1QKdxwpTEGi_wa5B96G9GmTolHg8nPppbBzkPRImLDRo';
const MembersSheetRange = 'Members!A2:$C';
const MembersSheetAPIKey = 'AIzaSyBIdagodBjndLFGnQ2NvcH_ZT6-NW90Gvw';
const MembersSheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${MembersSheetId}/values/${MembersSheetRange}?key=${MembersSheetAPIKey}`;

    fetch(MembersSheetUrl)
    .then(response => response.json())
    .then(data => {

        for (var i = 0; i < data.values.length; i++) {
            var carousel_item_div = document.createElement("div");
            carousel_item_div.className = 'carousel-item';

            var img = document.createElement("img");
            img.className = "d-block w-50 mx-auto";
            img.src = data.values[i][0];
            console.log(data.values[i][0])

            var title_div = document.createElement("div");
            title_div.className = "member-title text-center mx-auto w-75 mt-3"
            var title = data.values[i][1];
            // console.log(data.values[i][1])
            title_div.innerHTML = title;

            var member_img = document.getElementById('MembersImg');
            member_img.appendChild(carousel_item_div).appendChild(img);
            carousel_item_div.appendChild(title_div);
            // member_img.appendChild(title_div);

        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });