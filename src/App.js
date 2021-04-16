import "./App.css";
import { useState } from "react";
import { data } from "./data";

// importing Components
import { Header } from "./components/Header";
import Footer from "./components/Footer";
function App() {
  // declaring states

  const [emoji, setEmoji] = useState("");
  const [emojiMean, setEmojiMean] = useState("");

  const emojiData = Object.keys(data);

  const onChangeHandler = (e) => {
    let userInput = e.target.value;
    if (userInput === "") {
      return;
    }
    return getEmoji(userInput);
  };

  const getEmoji = (userInput) => {
    let emojiMeaning = data[userInput];

    if (!emojiMeaning) {
      return "failed to find any data";
    }
    setEmoji(userInput);
    setEmojiMean(emojiMeaning);
  };

  return (
    <div className='App'>
      <Header />
      <input
        className='userInput'
        placeholder='enter emoji name'
        onChange={onChangeHandler}
      />
      <div className='emojiOutput'>
        {emoji} {emojiMean}
      </div>
      <div className='emojiContainer'>
        <h1 style={{ textAlign: "center" }}>Emoji's We have</h1>
        <div className='emojiData'>
          {emojiData.map((item) => (
            <span key={item} className='emoji' onClick={() => getEmoji(item)}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
