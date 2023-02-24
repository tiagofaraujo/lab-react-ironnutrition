// src/App.js
import './App.css';
import { useState } from 'react';
import foodsDataJson from "./foods.json";
import FoodBox from './components/FoodBox';
import { Row, Divider} from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsDataJson)
  const [foodsAll, setFoodsAll] = useState(foodsDataJson)

  const addNewFood = (newFood)=>{
    const updatedFood = [...foods,newFood] 
    const updatedFoodAll = [...foodsAll,newFood]

    setFoods(updatedFood)
    setFoodsAll(updatedFoodAll)
  }

  const filterFoodList = (str) => {
    let filteredFood;
    
    if (str === "") {
      filteredFood = [...foodsAll];
    } else {
      filteredFood = foodsAll.filter((food) => {
        return food.name[0].toLowerCase() === str.toLowerCase();
      });
    }
   
    setFoods(filteredFood);
  };


  return (
    <div className="App">
      <Search filterFoodList={filterFoodList}/>
      <AddFoodForm addNewFood={addNewFood}></AddFoodForm>

      

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map(food => {
           return <FoodBox key={food.name} food={food}/>;
      })}
      </Row>
    </div>
  );
}

export default App;
