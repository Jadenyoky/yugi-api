import React, { useEffect, useState } from "react";
import Cards from "./cards";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import Search from './search'
import _ from 'lodash'


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
    console.log(cards)
  };


  useEffect(() => {
    apiLink();
  }, []);

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

  const [searchShow, setsearchShow] = useState(false)

  return (
    <>
    {/* <Splide aria-label="My Favorite Images">
      <SplideSlide>
        <h1>
          Hello World!
        </h1>
      </SplideSlide>
      <SplideSlide>
        <h1>
          Hello World! 2
        </h1>
      </SplideSlide>
    </Splide> */}

        <div className="backgroundBody"></div>
        <div className="header">
          Yugi Api !
        </div>
        <div className="searchIcon"
          onClick={()=> {
            setsearchShow(!searchShow)
            document.body.style.overflowY = 'hidden'
          }} >
          <FontAwesomeIcon  icon={faSearch}/>
        </div>

      {
        searchShow === true ? 

          (
            <div style={{
              zIndex: '30'
            }}>
              <FontAwesomeIcon className="xmarkSearch" icon={faXmark} onClick={()=> {
                setsearchShow(!searchShow)
                document.body.style.overflowY = 'scroll'
              }} />
              <Search />
            </div>
          ) : ''
      }

      <div className="all">
        {
        // _.shuffle(cards)
        cards.map(
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
                level={e.level}
              />
            )
        )}
      </div>

      <div className="btns">
        <button onClick={apiLink}>More ..</button>
        <button onClick={apiLink2}>Less ..</button>
      </div>
    </>
  );
};

export default App;
