import React, { useEffect, useState } from 'react';
import Cards from "./cards";

const Search = () => {

  const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
  const [cardArray , setcardArray] = useState([])
  
  const div = document.createElement("div");
  const div2 = document.createElement("div");

  function loading() {
    document.body.appendChild(div);
    div.classList.add("spinner");
    
  }

  function finishing() {
    div.remove();
  }

  const apiFetch = async () => {
    loading()
    const apiF = await fetch(url)
    const apiJ = await apiF.json()
    console.log(apiJ.data)
    setcardArray(apiJ.data)
    finishing()
  }

  useEffect(()=>{
    apiFetch() ;
  },[])
  
  const [searchResult , setsearchResult] = useState([])
  const [searchLength , setsearchLength] = useState([])
  const [maxResult , setmaxResult] = useState()

  const [inputVal, setinputVal] = useState()

  function searchIt(e) {

    const kk = e.target.value.toUpperCase()
    const gg = cardArray.filter(ele => ele.name.toUpperCase().includes(kk))
    const le = gg.length

    if(kk !== ''){
      setinputVal(kk)
      setsearchResult(gg)
      setsearchLength(le)
      setmaxResult(20)
      if(le < 20){
        setmaxResult(le)
      }
    }
    
    else {
      setsearchLength(0)
      setmaxResult(0)
      setinputVal('')
    }

  }

  return (
    <div className="compSearch">

      <input type="search" id="searching" onChange={searchIt} placeholder="Search Name Card ..." />
      
      {
        searchLength > 0 ? 
      
          <div>
            <p>Found ( {searchLength} ) - - Max Show ( {maxResult} )</p>
            <p>This "{inputVal}" Founded .. </p>
          </div>
          : 
          <div>
            <p>This "{inputVal}" Not Founded .. </p>
          </div>
      }
      
      {
        // searchLength > maxResult 
        searchLength > maxResult ?
        
        <div>
          <button onClick={()=>{
        
            if(searchLength > maxResult){
              setmaxResult(maxResult + 20)
              if(searchLength - maxResult < 20){
                setmaxResult(searchLength)
              }
            }
            
            }}>Load More</button>
        </div>  : ''
      }
      
      <div className="searched">
        {
          searchResult.map((e,k)=>
            k < maxResult && (
                <Cards 
                    key={k}
                    name={e.name}
                    image={e.card_images[0].image_url_cropped}
                    desc={e.desc}
                    atk={e.atk}
                    def={e.def}
                    type={e.frameType}
                />
          ))
        }
      </div>
      
    </div>
  );
}

export default Search;
