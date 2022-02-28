import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  //let newData;
  const [plantData, setPlantData] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('')
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        //handleFetch(data);
        setPlantData(data)        
      })
  }, [])
  const itemsToDipslay = plantData.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <main>
      <NewPlantForm  plantData={plantData} setPlantData={setPlantData} />
      <Search searchTerm={searchTerm} handlechange={setSearchTerm}/>
      <PlantList itemsToDipslay={itemsToDipslay}/>
    </main>
  );
}

export default PlantPage;
