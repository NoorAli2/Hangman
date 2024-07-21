import { useCallback, useEffect, useState } from "react";
import words from "./wordlist.json";
import { HangmanBody } from "./HangmanBody";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord());
  console.log(wordToGuess);
  const [guessedletters, setguessedletters] = useState<string[]>([]);

  const incorrectletters = guessedletters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectletters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedletters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedletters.includes(letter) || isLoser || isWinner) return;
      setguessedletters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedletters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedletters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key != "Enter") return;

      e.preventDefault();
      setguessedletters([]);
      setWordToGuess(getWord());
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <>
      <div
        style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            color: isWinner ? "green" : "red",
          }}
        >
          {isWinner && "Winner! Refresh to try again."}
          {isLoser && "Nice try. Refresh to try again."}
        </div>
        <HangmanBody numofguesses={incorrectletters.length} />
        <HangmanWord
          guessedletters={guessedletters}
          wordtoguess={wordToGuess}
          reveal={isLoser}
        />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard
            disabled={isWinner || isLoser}
            activeletters={guessedletters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveletters={incorrectletters}
            addguessedletter={addGuessedLetter}
          />
        </div>
      </div>
    </>
  );
}

export default App;
