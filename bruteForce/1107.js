const fileName = "./1107.txt";
let [channel, N, brokens] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");
if (brokens) brokens = brokens.split(" ");
const solve = () => {
  if (channel === "100") {
    return 0;
  }
  const diffToOneHundred = Math.abs(+channel - 100);
  let answer = diffToOneHundred;
  for (let diff = 0; diff <= diffToOneHundred; diff += 1) {
    const nowChannelMinus = +channel - diff;
    const nowChannelPlus = +channel + diff;
    let pressMinus = `${nowChannelMinus}`.length + diff;
    let pressPlus = `${nowChannelPlus}`.length + diff;
    if (brokens)
      for (let j = 0; j < brokens.length; j += 1) {
        if (`${nowChannelMinus}`.includes(brokens[j]) === true) {
          pressMinus = diffToOneHundred;
        }
        if (`${nowChannelPlus}`.includes(brokens[j]) === true) {
          pressPlus = diffToOneHundred;
        }
      }
    const press = Math.min(pressMinus, pressPlus);
    answer = Math.min(answer, press);
  }
  return answer;
};
console.log(solve());
