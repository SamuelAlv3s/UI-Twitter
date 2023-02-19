import { useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Timeline.css";

export function Timeline() {
  const [tweets, setTweets] = useState(["Hello World", "Hello World 2"]);
  const [newTweet, setNewTweet] = useState("");

  function createNewTweet(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }

  function handleHotKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((event.key === "Enter" && event.ctrlKey) || event.metaKey) {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
  }
  return (
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form" onSubmit={(e) => createNewTweet(e)}>
        <label htmlFor="tweet">
          <img
            src="https://avatars.githubusercontent.com/u/49680351?v=4"
            alt="Samuel Alves"
          />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
            onKeyDown={handleHotKeyDown}
          ></textarea>
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet, index) => (
        <Tweet key={index} content={tweet} />
      ))}
    </main>
  );
}
