function traverseTCPStates(eventList) {
  let state = "CLOSED";
  for (let i = 0; i < eventList.length; i++) {
    state = findNextState(state, eventList[i]);
    console.log(state);
    if (state === undefined) return "ERROR";
  }
  return state;
}

function findNextState(state, event) {
  switch (state) {
    case "CLOSED":
      switch (event) {
        case "APP_PASSIVE_OPEN":
          return "LISTEN";
        case "APP_ACTIVE_OPEN":
          return "SYN_SENT";
      }
      break;
    case "LISTEN":
      switch (event) {
        case "RCV_SYN":
          return "SYN_RCVD";
        case "APP_SEND":
          return "SYN_SENT";
        case "APP_CLOSE":
          return "CLOSED";
      }
      break;
    case "SYN_RCVD":
      switch (event) {
        case "APP_CLOSE":
          return "FIN_WAIT_1";
        case "RCV_ACK":
          return "ESTABLISHED";
      }
      break;
    case "SYN_SENT":
      switch (event) {
        case "RCV_SYN":
          return "SYN_RCVD";
        case "RCV_SYN_ACK":
          return "ESTABLISHED";
        case "APP_CLOSE":
          return "CLOSED";
      }
      break;
    case "ESTABLISHED":
      switch (event) {
        case "APP_CLOSE":
          return "FIN_WAIT_1";
        case "RCV_FIN":
          return "CLOSE_WAIT";
      }
      break;
    case "FIN_WAIT_1":
      switch (event) {
        case "RCV_FIN":
          return "CLOSING";
        case "RCV_FIN_ACK":
          return "TIME_WAIT";
        case "RCV_ACK":
          return "FIN_WAIT_2";
      }
      break;
    case "CLOSING":
      switch (event) {
        case "RCV_ACK":
          return "TIME_WAIT";
      }
      break;
    case "FIN_WAIT_2":
      switch (event) {
        case "RCV_FIN":
          return "TIME_WAIT";
      }
      break;
    case "TIME_WAIT":
      switch (event) {
        case "APP_TIMEOUT":
          return "CLOSED";
      }
      break;
    case "CLOSE_WAIT":
      switch (event) {
        case "APP_CLOSE":
          return "LAST_ACK";
      }
      break;
    case "LAST_ACK":
      switch (event) {
        case "RCV_ACK":
          return "CLOSED";
      }
  }
}

console.log(traverseTCPStates(["RCV_SYN", "RCV_ACK", "APP_CLOSE"]));
