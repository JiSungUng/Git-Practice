// import MissionUtils from "@woowacourse/mission-utils";

// console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));
// const randNum = MissionUtils.Random.pickNumberInRange(1,9)
// console.log(randNum);

// const userIn = document.getElementById('#user-input').innerHTML;
// console.log(userIn);


function printNum() {
  const userInput = document.getElementById('user-input').value;
  // console.log(userInput);
  document.getElementById('result').innerText = userInput;

}

function makePCNum() {
  const randNum = MissionUtilis.Random.pickNumberInRange(1, 9);
  document.getElementById('pc-result').innerText = randNum;
}