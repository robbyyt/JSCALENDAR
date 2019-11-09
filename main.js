
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let displayInfo = document.getElementById("dateinfo");
let inputYear = document.getElementById('year');
let inputMonth = document.getElementById('month');

function showCalendar(year,month) {

    let firstDay = new Date(year, month, 0).getDay();
    let numberOfDays = 32 - new Date(year, month, 32).getDate();
    console.log("NUMBER OF DAYS: ",numberOfDays);
    let table = document.getElementById("calendar-body");
    table.innerHTML="";
    displayInfo.innerHTML = months[month] + " " + year;
    inputYear.value = year;
    inputMonth.value = month;
    let day = 1;

    for(let tableRow = 0 ; tableRow < 6; tableRow++ ) {
        let row=document.createElement('tr');
        for( let weekDay = 0 ; weekDay < 7 ; weekDay++ ) {

            if(tableRow === 0 && weekDay<firstDay) { //celulele goale de la inceputul lunii
                let cell = document.createElement('td');
                let text = document.createTextNode("");
                cell.appendChild(text);
                row.appendChild(cell);
            }
            else {
                if(day > numberOfDays) {
                    break;
                }
                else {
                    let cell = document.createElement('td');
                    let text = document.createTextNode(day);
                    if(today.getDate() === day && today.getFullYear() === year && today.getMonth()=== month) {
                        cell.classList.add('bg-info');
                    }
                    cell.appendChild(text);
                    row.appendChild(cell);
                    day++;
                }
            }
        }
        table.appendChild(row);
    }

}

function nextMonth () {
    if(currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    }
    else {
        currentMonth++;
    }
    showCalendar(currentYear,currentMonth);
}

function prevMonth() {
    if(currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    }
    else {
        currentMonth--;
    }

    showCalendar(currentYear,currentMonth);
}

function updateCalendar() {
    currentYear = parseInt(inputYear.value);
    currentMonth = parseInt(inputMonth.value);
    showCalendar(currentYear,currentMonth);
}


showCalendar(currentYear,currentMonth);