import React from "react";
import PlantCard from "./PlantCard";

function PlantList({itemsToDipslay}) {
 
   const handleFetch = itemsToDipslay.map(e=>{
     //console.log(e.id);
      return(
        <PlantCard key={e.id} plant={e}></PlantCard>
      )
    })
  
  
  return (
    <ul className="cards">{handleFetch}</ul>
  );
}

export default PlantList;
