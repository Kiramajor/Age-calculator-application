let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let displayYear = document.querySelector(".display-age");
let displayMonth = document.querySelector(".display-month");
let displayDay = document.querySelector(".display-day");
let button = document.querySelector("#arrow");
let headDay = document.querySelector(".day");
let headMonth = document.querySelector(".month");
let headYear = document.querySelector(".year");
let line = document.querySelector("input");
let errorDay = document.querySelector(".error-day");
let errorMonth = document.querySelector(".error-month");
let errorYear = document.querySelector(".error-year");
let emptyDay = document.querySelector('.empty-day');
let emptyMonth = document.querySelector('.empty-month');
let emptyYear = document.querySelector('.empty-year');

const ageCalculator = () => {
  try {
    const currentDate = new Date();
    let maxDay = 31;
    let maxMonth = 12;
    let maxYear = currentDate.getFullYear();
    let maxDayForFeb = 28;
    const birthDay = parseInt(day.value);
    const birthMonth = parseInt(month.value);
    const birthYear = parseInt(year.value);

    const checkLeapYear = (year) => {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Leap year");
        maxDayForFeb = 29;
        console.log(maxDayForFeb);
      }
    };
    checkLeapYear(birthYear);

    if (birthMonth === 2) {
      maxDay = maxDayForFeb;
      console.log(maxDay);
    }

    let months = [8, 3, 5, 10];

    if (months.includes(birthMonth - 1)) {
      maxDay = 30;
    }
    if (birthDay < 1 || birthDay > maxDay) {
      errorDay.style.display = "block";
      headDay.style.color = "hsl(0, 100%, 67%)";
      day.style.border = "1px solid hsl(0, 100%, 67%)";
      throw new Error("Enter a valid date");
    }

    if (birthMonth < 0 || birthMonth > maxMonth) {
      errorMonth.style.display = "block";
      headMonth.style.color = "hsl(0, 100%, 67%)";
      month.style.border = "1px solid hsl(0, 100%, 67%)";
      throw new Error("Enter a valid Month");
    }

    if (birthYear > maxYear) {
      errorYear.style.display = "block";
      headYear.style.color = "hsl(0, 100%, 67%)";
      year.style.border = "1px solid hsl(0, 100%, 67%)";
      throw new Error("Enter a valid year");
    }

    let dateTwo = currentDate.getDate();
    let monthTwo = currentDate.getMonth();
    let yearTwo = currentDate.getFullYear();

    if (birthDay > dateTwo) {
      dateTwo += maxDay;
    }

    if (birthMonth > monthTwo) {
      monthTwo += maxMonth;
      yearTwo -= 1;
    }

    let newDate = dateTwo - birthDay;
    let newMonth = monthTwo - birthMonth;
    let newYear = yearTwo - birthYear;

    displayYear.innerHTML = newYear;
    displayMonth.innerHTML = newMonth;
    displayDay.innerHTML = newDate;
  } catch (error) {
    console.log(error.message);
  //   if (error.message.includes("date")) {
      
  //   } else if (error.message.includes("month")) {
  //     errorMonth.style.display = "block";
  //   } else if (error.message.includes("year")) {
  //     errorYear.style.display = "block";
  //   }
  }
};

button.addEventListener("click", ageCalculator);

year.addEventListener('keydown', function(e){
  if(e.key === 'Enter'){
    ageCalculator();
  }
})
year.addEventListener('keydown', (e) => e.key === 'Enter'? ageCalculator() : false);