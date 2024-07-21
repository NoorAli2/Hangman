interface Props {
  reveal?: boolean;
  guessedletters: string[];
  wordtoguess: string;
}

export function HangmanWord({ reveal=false, guessedletters, wordtoguess }: Props) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        gap: ".25em",
        fontSize: "6em",
        fontFamily: "monospace",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {wordtoguess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility: guessedletters.includes(letter) || reveal
                ? "visible"
                : "hidden",
                color: !guessedletters.includes(letter) && reveal ? "red" : "black"
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
