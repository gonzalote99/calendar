let today = new Date();
let dayInt = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();


let calendaryBody = document.getElementById('days');


let months = [
  "January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

let nextbtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');


nextbtn.onclick = function() {
  next();
};

prevBtn.onclick = function() {
  previous();
};

showCalendar(month, year);

function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();
  calendaryBody.innerHTML = "";
  let totalDays = daysInMonth(month ,year);

  blankDates(firstDay);

  for(let day = 1; day <= totalDays; day++) {
    let cell = document.createElement('li');
    let cellText = document.createTextNode(day);

    if (
      dayInt ===  day &&
      month === today.getMonth() &&
      year === today.getFullYear()

    ) {
      cell.classList.add('active');
    }

    cell.setAttribute('data-day', day);
    cell.setAttribute('data-month', month);
    cell.setAttribute('data-year', year);

    cell.classList.add('singleDay');
    cell.appendChild(cellText)
    calendaryBody.appendChild(cell);
  }

  document.getElementById('month').innerHTML = months[month];
  document.getElementById('year').innerHTML = year;


}

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0 ).getDate()
}

function blankDates(count) {
  for(let x = 0; x < count; x++) {
    let cell = document.createElement('li');
    let cellText = document.createTextNode("");
    cell.appendChild(cellText);
    calendaryBody.appendChild(cell)
  }
}

function next() {
  year = month === 11 ? year + 1 : year;
  month = (month + 1) % 12;
  showCalendar(month, year);
}

function previous() {
  year = month === 0 ? year - 1: year;
  month = month === 0 ? 11: month - 1;
  showCalendar(month, year);

}
