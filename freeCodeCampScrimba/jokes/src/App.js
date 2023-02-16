import logo from "./logo.svg";
import "./App.css";
import Joke from "./components/Joke";

const jokes = [
  {
    Setup: "I got my daughter a fridge for her birthday",
    Punchline: "I can't wait to see her face light up when  she opens it.",
    isShown: false,
  },
  {
    Setup: "How did the hacker escape the police",
    Punchline: "He just ransomware",
    isShown: false,
  },
  {
    Setup: "Why don't pirates travel on mountain roads?",
    Punchline: "Scurvy.",
    isShown: false,
  },
  {
    Setup: "Why do bees stay in the hive in the winter?",
    Punchline: "Swarm.",
    isShown: false,
  },
  {
    Setup: "What's the best thing about Switzerland?",
    Punchline: "I don't know, but the flag is a big plus!",
    isShown: false,
  },
  {
    Punchline: "I don't know, but the flag is a big plus!",
    isShown: false,
  },
  {
    Setup: "What's the best thing about Switzerland?",
    isShown: false,
  },
];

function App() {
  return (
    <div className="App">
      <Joke jokes={jokes} />
    </div>
  );
}

export default App;
