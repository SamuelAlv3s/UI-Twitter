import { Link } from "react-router-dom";
import { ChatCircle, ArrowsClockwise, Heart } from "phosphor-react";
import "./Tweet.css";

interface TweetProps {
  content: string;
}

export function Tweet({ content }: TweetProps) {
  return (
    <Link to="/tweet" className="tweet">
      <img
        src="https://avatars.githubusercontent.com/u/49680351?v=4"
        alt="Samuel Alves"
      />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Samuel Alves</strong>
          <span>@smk_2000s</span>
        </div>

        <p>{content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            22
          </button>
          <button type="button">
            <Heart />
            50
          </button>
        </div>
      </div>
    </Link>
  );
}
