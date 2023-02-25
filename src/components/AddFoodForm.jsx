import React from "react";
import { Divider, Input, Button } from 'antd';
import { useState } from 'react';


// Iteration 4
function AddFoodForm(props) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0)

    function handleSubmit (event){
        event.preventDefault()
          const newFood = {
            name:name,
            image:image,
            calories:calories,
            servings:servings
        }
        props.AddFoodForm(newFood)
        //Reset the state
        setName('')
        setImage ('')
        setCalories (0)
        setServings (0)
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(e) =>setName(e.target.value)} />

      <label>Image</label>
      <Input value={image} type="number" onChange={(e) =>setImage(e.target.value)} />

      <label>Calories</label>
      <input value={calories} type="number" onChange={(e) =>setCalories(e.target.value)} />

      <label>Servings</label>
      <input value={servings} type="number" onChange={(e) =>setServings(e.target.value)} />

      <Button type="submit">Create</Button>
    </form>
  );
}

export default AddFoodForm;