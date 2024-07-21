import styles from "./Keyboard.module.css";

const KEYS: string[] = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

interface Props {
  disabled?: boolean;
  activeletters: string[];
  inactiveletters: string[];
  addguessedletter: (letter: string) => void;
}

export function Keyboard({
  disabled = false,
  activeletters,
  inactiveletters,
  addguessedletter,
}: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(70px,1fr)",
        fontSize: "2rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        gap: ".2rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeletters.includes(key);
        const isInactive = inactiveletters.includes(key);
        return (
          <button
            onClick={() => addguessedletter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isInactive || isActive || disabled == true}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
