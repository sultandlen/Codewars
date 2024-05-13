function formatDuration(seconds) {
  if (seconds === 0) return "now";
  let divideForYears = 60 * 60 * 24 * 365;
  let divideForDays = 60 * 60 * 24;
  let divideForHours = 60 * 60;
  let divideForMinutes = 60;

  let years = Math.floor(seconds / divideForYears);
  let days = Math.floor((seconds % divideForYears) / divideForDays);
  let hours = Math.floor(
    ((seconds % divideForYears) % divideForDays) / divideForHours
  );
  let mins = Math.floor(
    (((seconds % divideForYears) % divideForDays) % divideForHours) /
      divideForMinutes
  );
  let secs =
    (((seconds % divideForYears) % divideForDays) % divideForHours) %
    divideForMinutes;

  let formattedTime = [];
  if (years > 0) {
    formattedTime.push(years > 1 ? `${years} years` : `${years} year`);
  }
  if (days > 0) {
    formattedTime.push(days > 1 ? `${days} days` : `${days} day`);
  }
  if (hours > 0) {
    formattedTime.push(hours > 1 ? `${hours} hours` : `${hours} hour`);
  }
  if (mins > 0) {
    formattedTime.push(mins > 1 ? `${mins} minutes` : `${mins} minute`);
  }
  if (secs > 0) {
    formattedTime.push(secs > 1 ? `${secs} seconds` : `${secs} second`);
  }

  if (formattedTime.length === 1) {
    return formattedTime[0];
  } else if (formattedTime.length === 2) {
    return formattedTime.join(" and ");
  } else {
    return (
      formattedTime.slice(0, -1).join(", ") + " and " + formattedTime.slice(-1)
    );
  }
}
