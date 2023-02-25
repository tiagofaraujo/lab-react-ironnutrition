import React from 'react';
import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
    const [search, setSearch] = useState("");

    const handleSelect = e => {
        setSearch(e.target.value);
        props.filterFoodList(e.target.value)
    
        console.log("selected", e.target.value);
      };


  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleSelect}/>
    </div>
  );
}

export default Search;