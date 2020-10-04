// import moment here; use this package in each functio

const moment = require('moment');// this is how to import the moment API?

const today = () => {
  // write code for dates.today
  let todaysDate = moment().format('dddd');//this format will alow the day to be returned.
  return todaysDate;

}

const calendar = () => {
  // write code for dates.calendar
  let calendarDate = moment().format('MMM DD, YYYY');//this will return the date including the month but will be abreviated to three letters
  return calendarDate;

}

const currentTime = () => {
  // write code for dates.currentTime
  let theTime = moment().format('hh:mm:ss A');//this is the format that will show the time with a 0 before the first number
  return theTime;

}

module.exports = {
  today,
  calendar,
  currentTime
}