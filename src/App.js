import { useState } from "react";
import hex from "./util/hex";
import RandomSwatch from "./components/RandomSwatch";
import PlayerSwatch from "./components/PlayerSwatch";
import HexForm from "./components/HexForm";
import ErrorMessage from "./components/ErrorMessage";
import "./styles/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [randomHex, setRandomHex] = useState(hex.getRandomHexCode());
  const [playerHex, setPlayerHex] = useState("");
  const [error, setError] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.children[1];
    if (input.validity.patternMismatch) {
      setError(
        "That’s not a valid hex code. Use any digits or letters A through F."
      );
    } else if (input.validity.valueMissing) {
      setError("Enter a hex code.");
    } else {
      setScore(
        (lastScore) =>
          lastScore +
          hex.getScore(hex.compareHexCodes(playerHex.toUpperCase(), randomHex))
      );
      setHasSubmitted(true);
      setTimeout(() => {
        setRandomHex(hex.getRandomHexCode());
        setPlayerHex("");
        setHasSubmitted(false);
      }, 2000);
    }
  };

  const handleHexChange = (e) => {
    setPlayerHex(e.target.value);
    setError("");
  };

  return (
    <>
      <header>
        <h1>Hex Guesser</h1>
        <p className="info">
          Try to guess the hex code of the color below. It's pretty hard.
        </p>
      </header>
      <section>
        <h2>Score</h2>
        <p className="score">{score}</p>
      </section>
      <main>
        <RandomSwatch hex={randomHex} hasSubmitted={hasSubmitted} />
        <PlayerSwatch hex={playerHex} hasSubmitted={hasSubmitted} />
        <HexForm
          onHexChange={handleHexChange}
          onSubmit={handleSubmit}
          hex={playerHex}
          hasSubmitted={hasSubmitted}
        />
        <ErrorMessage error={error} />
      </main>
    </>
  );
}

export default App;
