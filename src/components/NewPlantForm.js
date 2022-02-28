import React,{useState}from "react";

function NewPlantForm({plantData,setPlantData}) {
  const [inputValues, setInputValues] = useState({
    plantName: "",
    image: "",
    price: "",
  });
  function handleChange(event){
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setPlantData([...plantData,inputValues]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
