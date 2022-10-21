<<<<<<< HEAD
import getComputerInput from './src/input/getComputerInput.js'

export default function BaseballGame() {
  const computerInputNumbers = getComputerInput();
=======
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

  
>>>>>>> 48d8a490b39b1d7102c9c39625d6b88918b8bc40

  console.log(computerInputNumbers);
  // this.play = function(computerInputNumbers, userInputNumbers) {
  //   return "결과 값 String"
  // }
}

<<<<<<< HEAD
new BaseballGame();

=======
>>>>>>> 48d8a490b39b1d7102c9c39625d6b88918b8bc40

