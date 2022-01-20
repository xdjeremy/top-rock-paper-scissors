const computerPlay = () => {
  const hand = ["rock", "paper", "scissors"];
  return hand[Math.floor(Math.random() * 3)];
};

const playRound = (playerSelection, computerSelection) => {
  const conditions = [
    {
      user: "rock",
      computer: "rock",
      out: "Its a tie!",
      score: 0,
    },
    {
      user: "rock",
      computer: "paper",
      out: "You Lose! Paper beats Rock",
      score: 0,
    },
    {
      user: "rock",
      computer: "scissors",
      out: "You Win! Rock beats Scissors",
      score: 1,
    },
    {
      user: "paper",
      computer: "rock",
      out: "You Win! Paper beats Rock",
      score: 1,
    },
    {
      user: "paper",
      computer: "paper",
      out: "It's a tie!",
      score: 0,
    },
    {
      user: "paper",
      computer: "scissors",
      out: "You Lose! Scissors beats Paper",
      score: 0,
    },
    {
      user: "scissors",
      computer: "rock",
      out: "You Lose! Rocks beats Scissors",
      score: 0,
    },
    {
      user: "scissors",
      computer: "paper",
      out: "You Win! Scissors beats Paper",
      score: 1,
    },
    {
      user: "scissors",
      computer: "scissors",
      out: "It's a tie!",
      score: 0,
    },
  ];

  const player = playerSelection;
  const computer = computerSelection;

  for (let res in conditions) {
    if (
      conditions[res].user == player &&
      conditions[res].computer == computer
    ) {
      const { user, computer, out, score } = conditions[res];
      return {
        score: score,
        message: out
      };
    }
  }
};

const game = () => {
  let gameCount = 0;
  let currentScore = 0;
  do {
    let choice = prompt('choice:');
    let { score, message } = playRound(choice, computerPlay());
    currentScore += score;
    console.log(message);
    gameCount++;
  } while (gameCount < 5);

  console.log(currentScore);
};

game();