import React, { useState } from "react";

export default function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const words = {
    apple: "A round red or green fruit.",
    book: "Something you read.",
    happy: "Feeling good and smiling.",
    ocean: "A huge body of salt water."
  };

  return (
    <div>
      <p>Type: apple, book, happy, ocean</p>
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <button onClick={() => setMeaning(words[word] || "Word not found")}>
        Search
      </button>
      <p>{meaning}</p>
    </div>
  );
}
