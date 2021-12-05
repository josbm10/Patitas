import './adopta.css';
import Card from '../../components/card';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useHistory } from 'react-router-dom';

function PageAdopta() {

    let history = useHistory();

    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const handleSearch = (event) => {
      let value = event.target.value.toUpperCase();
      let result = [];
      result = allData.filter((data) => {
          
        return data.name.search(value) !== -1;
      });
      console.log(result)
      setFilteredData(result);
    }

    const handleTall = (event) => {
        let value = event.target.value;
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
          return data.tall.search(value) !== -1;
        });
        setFilteredData(result);
      }
      const handleSex = (event) => {
        let value = event.target.value;
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
          return data.sex.search(value) !== -1;
        });
        setFilteredData(result);
      }
      const handleHair = (event) => {
        let value = event.target.value;
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
          return data.hair.search(value) !== -1;
        });
        setFilteredData(result);
      }
      const handleActivity = (event) => {
        let value = event.target.value;
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
          return data.activity.search(value) !== -1;
        });
        setFilteredData(result);
      }
   
    useEffect(() => {
      axios.get('http://localhost:4000/mascotas')
        .then(response => {
          console.log(response.data)
          setAllData(response.data);
          setFilteredData(response.data);
        })
        .catch(error => {
          console.log('Error: ' + error);
        })
    }, []);

    return (

        <div className="mascotas_container">
            <Breadcrumb className='Breadcrumb'>
                <Breadcrumb.Item onClick={() => history.push('/')}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Adopta</Breadcrumb.Item>
            </Breadcrumb>
            <div className="mascotas_filters">
        
                    <h2>Buscar :</h2>
                    <input type="text" placeholder='Nombre' onChange={(event) => handleSearch(event)} />
                
                <h2>Filtrar por:</h2>
               
                    <h2>Tamaño</h2>
                    <select name="" id="" onChange={(event) => handleTall(event)} >
                        <option value="" select >Tamaño</option>
                        <option value="Pequeño">Pequeño</option>
                        <option value="Mediano">Mediano</option>
                        <option value="Grande">Grande</option>
                    </select>
                    <h2>Sexo</h2>
                    <select name="" id="" onChange={(event) => handleSex(event)} >
                        <option value="" select >Sexo</option>
                        <option value="Hembra">Hembra</option>
                        <option value="Macho">Macho</option>
                    </select>
                    <h2>Nivel de actividad</h2>
                    <select name="" id="" onChange={(event) => handleActivity(event)} >
                        <option value="" select >Nivel de actividad</option>
                        <option value="Bajo">Bajo</option>
                        <option value="Medio">Medio</option>
                        <option value="Alto">Alto</option>
                    </select>
                    <h2>Pelo</h2>
                    <select name="" id="" onChange={(event) => handleHair(event)} >
                        <option value="" select >Pelo</option>
                        <option value="Corto">Corto</option>
                        <option value="Largo">Largo</option>
                    </select>
                    
            </div>
            <div className="mascotas_grid">
                {/* {perros.map((perro) => (
                    <Card
                        key={perro.id}
                        id={perro.id}
                        photo={perro.photo}
                        name={perro.name}
                        status={perro.status}
                    />
                ))} */}

                {filteredData.map((value) => {
                    return (
                        <Card 
                        key={value.id}
                        id={value.id}
                        photo={value.photo}
                        name={value.name}
                        status={value.status}
                         />
                    )
                })}

            </div>
        </div>
    );
}

export default PageAdopta;