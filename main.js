//   day

const dayEl = document.getElementById("day");
const dayLabel = document.getElementById("dayLabel");
const dayError = document.getElementById("errorDay");

// month

const monthEl = document.getElementById("month");
const monthLabel = document.getElementById("monthLabel");
const monthError = document.getElementById("errorMonth");

// year

const yearEl = document.getElementById("year");
const yearLabel = document.getElementById("yearLabel");
const yearError = document.getElementById("errorYear");

// form and button

const form = document.querySelector("form");
const button = document.querySelector("button");

//result variables

const dayResult=document.getElementById('days');
const monthResult=document.getElementById('months');
const yearResult=document.getElementById('years');

// error variables

const errorEmptyValue = "This field is required";
const errorColor = "#ff5757";
const errorWrongValue = "Must be a valid";
const errorBorder = `1px solid ${errorColor}`;

// current time

let currentDate = new Date();
let currentDay = currentDate.getUTCDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// function for error

function errorStyling(label, inputBorder) {
  label.style.color = errorColor;
  inputBorder.style.border = errorBorder;
}

//  funtion for checking leap year

function checkLeapYear(year) {

    if (((0 == year % 4) && (0 != year % 100)) || (0 == year % 400)) {
        return true;
    } else {
        return false;
    }
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let dayBorn = "";
  let monthBorn = "";
  let yearBorn = "";

  let leapyear=checkLeapYear(yearEl.value);

//   error for day

  if (dayEl.value == "") {
    dayError.textContent = errorEmptyValue;
    errorStyling(dayLabel, dayEl);
  }
  else if(dayEl.value>30 && (monthEl.value==4||6||9||11)){
    dayError.textContent=`${errorWrongValue} day`;
    errorStyling(dayLabel,dayEl);
  }
  else if(dayEl.value>31){
    dayError.textContent=`${errorWrongValue} day`;
    errorStyling(dayLabel,dayEl);
  }
  else if (dayEl.value>29 && monthEl.value==2 && leapyear==true) {
    dayError.textContent=`${errorWrongValue} day`;
    errorStyling(dayLabel,dayEl);
  } 
  else if(dayEl.value>28 && monthEl.value==2 && leapyear==false) {
    dayError.textContent=`${errorWrongValue} day`;
    errorStyling(dayLabel,dayEl);
  }
  else {
    dayBorn = dayEl.value;
    
  }

//   error for month

  if (monthEl.value == "") {
    monthError.textContent = errorEmptyValue;
    errorStyling(monthLabel, monthEl);
  } else if (monthEl.value > 12) {
    monthError.textContent = `${errorWrongValue} month`;
    errorStyling(monthLabel, monthEl);
  } else {
    monthBorn = monthEl.value;
  }

//   error for year

  if (yearEl.value == "") {
    yearError.textContent = errorEmptyValue;
    errorStyling(yearLabel, yearEl);
  } else if (yearEl.value > currentYear) {
    yearError.textContent = "Must be in the past";
    errorStyling(yearLabel, yearEl);
  } else {
    yearBorn = yearEl.value;
  }

//   result 
  if (dayBorn != "" && monthBorn != "" && yearBorn != ""){
    console.log(dayBorn,monthBorn,yearBorn);
  }
});
