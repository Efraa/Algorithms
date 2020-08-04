// https://www.urionlinejudge.com.br/judge/en/problems/view/1420

const fs = require ('fs');
const path = require ('path');
const file = path.resolve (__dirname, 'input.txt');
const input = fs.readFileSync (file, 'utf8').split('\n');

const useFormatDateToState = string => {
  const days = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
  const splitMonths = {
    begin: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'],
    end: ['JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
  };
  const months = splitMonths.begin.concat(splitMonths.end);

  let data = string.split(',');
  const state = {
    dayOfWeek: data[0],
    day: data[1].slice(0, 2),
    month: {
      label: data[1].slice(2, 5),
      id: months.indexOf(data[1].slice(2, 5))
    },
    dateString: data[1].slice(5).split(':'),
    date: new Date(),
    moment: {},
  };
  const { dateString: date, month, day } = state;
  // const hours = date[1] < 12 ? date[1] : (date[1] - 12) + date[1];
  state.date = new Date(date[0], month.id, day, date[1], date[2], date[3]);
  // state.date.setHours(hours);

  const setSeconds = seconds => {
    state.date.setSeconds(seconds);
    state.dayOfWeek = days[state.date.getDay()]
    state.day = state.date.getDate();
    state.month = {
      label: months[state.date.getMonth()],
      id: state.date.getMonth()
    }
    state.moment = {
      hours: state.date.getHours(),
      minutes: state.date.getMinutes(),
      seconds: state.date.getSeconds()
    }
  }

  return {
    days,
    months,
    setSeconds,
    state
  };
};

const countingSeconds = string => {
  const { state, setSeconds } = useFormatDateToState('QUI,28FEV2002:23:59:50');
  console.log(state);
  setSeconds(1);
  console.log(state);
};

countingSeconds();
