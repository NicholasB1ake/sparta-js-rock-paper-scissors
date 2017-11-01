alert ('Lets play rock paper scissors!!');
var valuePick = prompt('Pick rock, paper or scissors');
//<------------------ Player picks number and it is set to valuePick
var computerChoices = ['rock','paper', 'scissors']
var computerChoice = Math.floor(Math.random() * computerChoices.length)
  console.log(computerChoice);
//<--------------------Computer picks array value at random
if (valuePick === computerChoices[computerChoice]){
    alert ('draw');

} else if (valuePick === 'rock' && computerChoices[1]){
  alert('Computer picks paper! Computer Wins!')

} else { //(valuePick === 'rock' && computerChoices[2])
  alert(' Computer picks scissors You Win!')
}

//<----------------------the value is compared to the players value

// if (valuePick === 'paper' && computerChoices[0]){
//     alert('Computer picks rock, computer wins!!')
//
// }else if (valuePick === 'paper' && computerChoices[2]) {
//     alert('Computer picks scissors! Computer Wins');
//
// }

//<------------------------ the score is logged
