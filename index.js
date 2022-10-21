import getComputerInput from './src/input/getComputerInput.js'

export default function BaseballGame() {
  const computerInputNumbers = getComputerInput();

  console.log(computerInputNumbers);
  // this.play = function(computerInputNumbers, userInputNumbers) {
  //   return "결과 값 String"
  // }
}

new BaseballGame();


