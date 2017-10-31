alert ('Lets play rock paper scissors!!');
var valuePick = prompt('Pick rock, paper or scissors');

var computerChoices = ['rock','paper', 'scissors']
var computerChoice = Math.floor(Math.random() * computerChoices.length)
  console.log(computerChoice);

if (valuePick === computerChoices[computerChoice]){
    alert ('draw');

} else if (valuePick === 'rock' && computerChoices[1]) {
  alert('Computer picks paper! Computer Wins!')

} else if (valuePick === 'rock' && computerChoices[2]){
  alert(' Computer picks scissors You Win!')
}

// if (valuePick === 'paper' && computerChoices[0]){
//     alert('Computer picks rock, computer wins!!')
//   }else if (valuePick === 'paper' && computerChoices[2]) {
//     console.log('Computer winspap');
//
//   }
