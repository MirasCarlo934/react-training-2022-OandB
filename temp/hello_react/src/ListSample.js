import React, {useEffect, useState} from "react";

export default function ListSample() {
  const [fruits, setFruits] = useState([]);

  useEffect(function(){
    setFruits(["Apple", "Banana", "Orange"])
  }, []);

  return(
    <List items={fruits}/>
  )
}

function List({items}) {
  return(
    <ul>
      {
        items.map(item => <li>{item}</li>)
      }
    </ul>
  )
}