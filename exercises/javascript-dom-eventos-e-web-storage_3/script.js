function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let ulDays = document.getElementById('days');

  for (let dezDay of dezDaysList) {
    let day = document.createElement('li');
    ulDays.appendChild(day);
    day.innerText = dezDay;
  }
}
createDaysOfTheMonth();

// Exercício 2
function createHolidayButton(buttonString) {
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  document.getElementsByClassName('buttons-container')[0].appendChild(button);
  button.innerText = buttonString;
}
createHolidayButton('Feriados');

// Exercício 3
function createHolidays() {
  const holidays = [24,25,31];
  let days = document.querySelectorAll('#days li');
  for (let day of days) {
    if (holidays.includes(parseInt(day.innerText))) {
      day.classList = 'holiday';
    }
  }
}
createHolidays();

let button = document.getElementById('btn-holiday');
button.addEventListener('click', changeHolidayBackgroundColor);
function changeHolidayBackgroundColor() {
  let holidayList = document.getElementsByClassName('holiday');
  for (let holiday of holidayList) {
    if (holiday.style.backgroundColor) {
      holiday.style.backgroundColor = '';
    } else {
      holiday.style.backgroundColor = 'rgba(193, 247, 207)';
    }
  }
}

// Exercício 4
function createFridayButton(buttonString) {
  let button = document.createElement('button');
  button.id = 'btn-friday';
  document.getElementsByClassName('buttons-container')[0].appendChild(button);
  button.innerText = buttonString;
}
createFridayButton('Sexta-Feira');
