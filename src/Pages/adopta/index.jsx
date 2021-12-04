import './adopta.css';
import Card from '../../components/card';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useHistory } from 'react-router-dom';

function PageAdopta() {

    let history = useHistory();
    // const [perros, setPerros] = useState([]);
    // function getPerros() {
    //     axios
    //         .get('http://localhost:4000/mascotas')
    //         .then((response) => {
    //             setPerros(response.data);
    //         })
    //         .catch((e) => { });
    // }
    // useEffect(() => {
    //     getPerros();
    // }, []);
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const handleSearch = (event) => {
      let value = event.target.value.toUpperCase();
      let result = [];
      console.log(value);
      result = allData.filter((data) => {
        return data.name.search(value) != -1;
      });
      setFilteredData(result);
    }

    const handleTall = (event) => {
        let value = event.target.value;
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
          return data.tall.search(value) != -1;
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

    return (

        <div class="mascotas_container">
            <Breadcrumb className='Breadcrumb'>
                <Breadcrumb.Item onClick={() => history.push('/')}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Adopta</Breadcrumb.Item>
            </Breadcrumb>
            <div class="mascotas_filters">
                <div style={{ margin: '0 auto', marginTop: '10%' }}>
                    <label>Buscar:</label>
                    <input type="text" placeholder='Buscar' onChange={(event) => handleSearch(event)} />
                </div>
                <h2>Filtrar por:</h2>
                <form action="" >
                    <h2>Edad</h2>
                    <select name="" id="" onChange={(event) => handleTall(event)} >
                        <option value="" select >Talla</option>
                        <option value="Pequeño">Pequeño</option>
                        <option value="Mediano">Mediano</option>
                        <option value="Grande">Grande</option>
                    </select>
                    <ul>
                        <li> <input type="checkbox" id="age_1to3" value='3' name="edad"/>
                            <label htmlFor="age_1to3">1-3 años</label>
                        </li>
                        <li> <input type="checkbox" id="age_4to7" value='7' name="edad"/>
                            <label htmlFor="age_4to7">4-7 años</label>
                        </li>
                        <li> <input type="checkbox" id="age_7plus" value='8' name="edad"/>
                            <label htmlFor="age_7plus">+7 años</label>
                        </li>
                    </ul>

                    <h2>Tamaño</h2>
                    <ul>
                        <li> <input type="checkbox" id="tall_small" value='Pequeño'  />
                            <label htmlFor="tall_small">Pequeño</label>
                        </li>
                        <li><input type="checkbox" id="tall_medium" value='Mediano'  />
                            <label htmlFor="tall_medium">Mediano</label>
                        </li>
                        <li> <input type="checkbox" id="tall_large" value='Grande' />
                            <label htmlFor="">Grande</label>
                        </li>
                    </ul>

                    <h2>Sexo</h2>
                    <ul>
                        <li> <input type="checkbox" id="sex_female" value='Hembra' />
                            <label htmlFor="sex_female">Hembra</label>
                        </li>
                        <li> <input type="checkbox" id="sex_masculine" value='Macho' />
                            <label htmlFor="sex_masculine">Macho</label>
                        </li>
                    </ul>


                    <h2>Nivel de actividad</h2>
                    <ul>
                        <li><input type="checkbox" id="activity_low" value='Bajo' />
                            <label htmlFor="activity_low">Bajo</label>
                        </li>
                        <li> <input type="checkbox" id="activity_medium" value='Mediano'  />
                            <label htmlFor="activity_medium">Mediano</label>
                        </li>
                        <li>
                            <input type="checkbox" id="activity_high" value='Alto'  />
                            <label htmlFor="activity_high">Alto</label>
                        </li>
                    </ul>

                    <h2>Largo de pelo</h2>
                    <ul>
                        <li> <input type="checkbox" id="hair_long" value='Largo'  />
                            <label htmlFor="hair_long">Largo</label>
                        </li>
                        <li> <input type="checkbox" id="hair_cut" value='Corto'  />
                            <label htmlFor="hair_cut">Corto</label>
                        </li>
                    </ul>
                    <button>Aplicar</button>
                </form>
            </div>
            <div class="mascotas_grid">
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