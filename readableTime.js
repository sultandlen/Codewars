function humanReadable(seconds) {
  let HH = Math.floor(seconds / 3600);
  let MM = Math.floor((seconds % 3600) / 60);
  let SS = Math.floor((seconds % 3600) % 60);
  if (HH < 10) HH = `0${HH}`;
  if (MM < 10) MM = `0${MM}`;
  if (SS < 10) SS = `0${SS}`;
  return `${HH}:${MM}:${SS}`;
}

console.log(humanReadable(0));
