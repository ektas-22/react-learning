import Joke from "./Joke";
import jokeData from "./jokes.js";

function JokesPage() {
  const jokeElement = jokeData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return <main>{jokeElement}</main>;
}

export default JokesPage;

//  <Joke
//         setup="I got my daughter a fridge for her birthday."
//         punchline="I can't wait to see her face light up when she opens it."
//         number={123}
//       />
//       <Joke
//         setup=" How did the hacker escape the police?"
//         punchline="He just ransomware!"
//       />
//       <Joke
//         setup="Why don't pirates travel on mountain roads?"
//         punchline="Scurvy."
//       />
//       <Joke
//         setup="Why do bees stay in the hive in the winter?"
//         punchline="Swarm."
//       />
