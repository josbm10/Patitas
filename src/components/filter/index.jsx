import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Filter() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const handleSearch = (event) => {
    let value = event.target.value;
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.name.search(value) !== -1;
    });
    setFilteredData(result);
  }

  useEffect(() => {
    axios('http://localhost:4000/mascotas')
      .then(response => {
        console.log(response.data)
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.log('Error getting fake data: ' + error);
      })
  }, []);

  const styles = {
    display: 'inline',
    width: '30%',
    height: 50,
    float: 'left',
    padding: 5,
    border: '0.5px solid black',
    marginBottom: 10,
    marginRight: 10
  }

  return (
    <div className="App">
      <div style={{ margin: '0 auto', marginTop: '10%' }}>
        <label>Search:</label>
        <input type="text" onChange={(event) => handleSearch(event)} />
      </div>
      <div style={{ padding: 10 }}>
        {filteredData.map((value) => {
          return (
            
            <div key={value.id}>
              <div style={styles}>
                {value.name}
              </div>
            </div>
          )
        })}
      </div>
    </div>)
}
export default Filter;
