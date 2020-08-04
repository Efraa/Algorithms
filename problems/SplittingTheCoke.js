// https://www.urionlinejudge.com.br/judge/en/problems/view/1549

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const numberOfTestCases = parseInt(input[0]);
const PI = 3.1415926;
const consts = 3.0, v = 1.0;

const formula = ({
  litersAmongFriends,
  smallBaseRadius,
  baseRadius,
  heightCM
}) => Math.pow(litersAmongFriends * consts * (baseRadius - smallBaseRadius)
  / (PI * heightCM) + smallBaseRadius * smallBaseRadius * smallBaseRadius, v / consts);

const getValueOfH = ({ litersAmongFriends, smallBaseRadius, formulaValue }) =>
  (litersAmongFriends * consts / (PI * (formulaValue * formulaValue +
    formulaValue * smallBaseRadius + smallBaseRadius * smallBaseRadius)))
      .toFixed(2);

const splittingCoke = function ({
  friends,
  liters,
  smallBaseRadius,
  baseRadius,
  heightCM
}) {
  const litersAmongFriends = (liters / friends);
  const formulaValue = formula({
    litersAmongFriends: litersAmongFriends,
    smallBaseRadius: smallBaseRadius,
    baseRadius: baseRadius,
    heightCM: heightCM
  });
  const valueOfH = getValueOfH({
      litersAmongFriends: litersAmongFriends,
      smallBaseRadius: smallBaseRadius,
      formulaValue: formulaValue
  });
  console.log(valueOfH);
};

for (let caso = 1; caso <= (numberOfTestCases * 2); caso += 2) {
  const [friends, liters] = input[caso].split(' ');
  const [smallBaseRadius, baseRadius, heightCM] = input[caso + 1].split(' ');
  splittingCoke({
      friends: friends,
      liters: liters,
      smallBaseRadius: smallBaseRadius,
      baseRadius: baseRadius,
      heightCM: heightCM
  });
}
