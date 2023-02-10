import Dock from "./Dock";
import Header from "./Header";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/popup.css";
import "./styles/dock.css";
import Popup from "./Popup";
import { useState } from "react";
import News from "./News";

function App() {
  const [finderPopup, setFinderPopUp] = useState(false);
  const [newsPopup, setNewsPopup] = useState(false);

  const [popup, setPopup] = useState({
    finder: finderPopup,
    news: newsPopup,
  });

  const popupStateChanger = {
    finder: setFinderPopUp,
    news: setNewsPopup,
  };

  const finder = () => {
    return (
      <Popup popup={""} state={popup.finder} stateChanger={setFinderPopUp} />
    );
  };

  const news = () => {
    return (
      <Popup popup={<News />} state={popup.news} stateChanger={setNewsPopup} />
    );
  };

  return (
    <div className="App">
      <Header />
      {popup.finder ? finder() : ""}

      {popup.news ? news() : ""}

      <Dock state={popup} stateChanger={setPopup} />
    </div>
  );
}

export default App;
