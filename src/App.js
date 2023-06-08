import React, { useEffect, useState } from "react";
import Cards from "./cards";

const App = () => {
  // const [url, seturl] = useState('https://db.ygoprodeck.com/api/v7/cardinfo.php');

  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

  const [cards, setcards] = useState([]);

  const [num, setnum] = useState(0);

  const div = document.createElement("div");
  const div2 = document.createElement("div");

  function loading() {
    document.body.appendChild(div);
    div.classList.add("spinner");
    document.body.appendChild(div2);
    div2.classList.add("highlight");
  }

  function finishing() {
    div.remove();
    div2.remove();
  }

  const apiLink = async () => {
    loading();
    // console.log('down')
    const apiR = await fetch(url);
    const apiOk = await apiR.json();
    setcards(apiOk.data);
    setnum(num + 20);
    // console.log('up')
    finishing();

    console.log(apiOk.data)
    console.log(apiOk.data[9].frameType);
  };

  const apiLink2 = async () => {
    loading();
    const apiR = await fetch(url);
    const apiOk = await apiR.json();
    setcards(apiOk.data);
    if (num > 20) {
      setnum(num - 20);
    } else {
      setnum(num);
    }
    finishing();
  };

  useEffect(() => {
    apiLink();
  }, []);

  console.log(num);

  return (
    <div>
      <div className="all">
        {cards.map(
          (e, k) =>
            k < num && (
              <Cards
                key={k}
                name={e.name}
                image={e.card_images[0].image_url_cropped}
                desc={e.desc}
                atk={e.atk}
                def={e.def}
                type={e.frameType}
              />
            )
        )}
      </div>

      <div className="btns">
        <button onClick={apiLink}>More ..</button>
        <button onClick={apiLink2}>Less ..</button>
      </div>
    </div>
  );
};

export default App;
