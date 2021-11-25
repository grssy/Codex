import axios from "axios";

export async function getCurrentDateTime() {
  let year = "",
    month = "",
    day = "",
    hours = "",
    minutes = "";

  const response = await axios.get("http://worldclockapi.com/api/json/utc/now");

  for (let i = 0; i < 16; i++) {
    if (i >= 0 && i <= 3) {
      year += response.data.currentDateTime[i];
    } else if (i > 4 && i <= 6) {
      month += response.data.currentDateTime[i];
    } else if (i > 7 && i <= 9) {
      day += response.data.currentDateTime[i];
    } else if (i > 10 && i <= 12) {
      hours += response.data.currentDateTime[i];
    } else if (i > 13 && i <= 15) {
      minutes += response.data.currentDateTime[i];
    }
  }

  hours = eval(hours - 3);

  return day + "/" + month + "/" + year + " " + hours + ":" + minutes;
}
