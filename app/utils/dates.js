const days = {
  "0": "Sunday",
  "1": "Monday",
  "2": "Tuesday",
  "3": "Wednesday",
  "4": "Thurday",
  "5": "Friday",
  "6": "Saturday"
}

const months = {
  "0": "January",
  "1": "February",
  "2": "March",
  "3": "April",
  "4": "May",
  "5": "June",
  "6": "July",
  "7": "August",
  "8": "September",
  "9": "October",
  "10": "November",
  "11": "December"
}

function convertToFarenheit(temp) {
  return Math.round(temp * (9/5) - 459.67);
}

function getDate(unixDate) {
  const day = new Date(unixDate * 1000);
  return {
    englishDay: days[day.getDay()],
    month: months[day.getMonth()],
    monthDay: day.getDate()
  }
}

module.exports = {
  convertToFarenheit,
  getDate
}