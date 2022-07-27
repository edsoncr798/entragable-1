import { useState } from "react";
import "./App.css";
import Onclick from "./components/Onclick";
import QuoteBox from "./components/QuoteBox";
import Quotes from "./json/Quotes.json";
import colors from "./utilities/colors";

function App() {
  const getRandomElement = (data) => {
    const indexRandom = Math.floor(Math.random() * data.length);
    return data[indexRandom];
  };

  const randomQuotes = getRandomElement(Quotes);
  const randomColors = getRandomElement(colors);

  const [quotesRandom, setQuotesRandom] = useState(randomQuotes);
  const [colorRandom, setColorRandom] = useState(randomColors);

  let getRandomStatus = () => {
    const randomQuotes = getRandomElement(Quotes);
    const randomColors = getRandomElement(colors);

    setQuotesRandom(randomQuotes);
    setColorRandom(randomColors);
  };

  const backgroundApp = {
    backgroundColor: colorRandom,
  };

  return (
    <div className="App" style={backgroundApp}>
      <QuoteBox
        dataRandomQuotes={quotesRandom}
        dataRandomColors={colorRandom}
        onclick={getRandomStatus}
      />
    </div>
  );
}

export default App;
