import { useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { PaperPlaneRight } from "phosphor-react";

import "./Status.css";

export function Status() {
  const [answers, setAnswers] = useState(["Answer1", "Answer2", "Answer3"]);
  const [newAnswer, setNewAnswer] = useState("");

  function createNewAnswer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((event.key === "Enter" && event.ctrlKey) || event.metaKey) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt in doloremque dolorum perspiciatis! Maxime tempore velit accusantium perspiciatis laboriosam veniam modi, distinctio, similique repellendus vero nostrum debitis numquam rerum." />

      <Separator />

      <form className="answer-tweet-form" onSubmit={createNewAnswer}>
        <label htmlFor="tweet">
          <img
            src="https://avatars.githubusercontent.com/u/49680351?v=4"
            alt="Samuel Alves"
          />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            onKeyDown={handleHotKeyDown}
          ></textarea>
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer, index) => (
        <Tweet key={index} content={answer} />
      ))}
    </main>
  );
}
