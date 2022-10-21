// 기능 및 게임 시작 분리!
// function printNum() {
//   const userInput = document.getElementById('user-input').value;
//   document.getElementById('result').innerText = userInput;
// }

// function makePCNum() {
//   const randNum = MissionUtils.Random.pickNumberInRange(1, 9);
//   document.getElementById('pc-result').innerText = randNum
// }

export default function BaseballGame() {
  const computerInputNumbers = getComputerInput();

  this.play = function(computerInputNumbers, userInputNumbers) {
    return "결과 값 String"
  }

  

}


