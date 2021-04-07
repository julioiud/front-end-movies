import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Table(){

    const baseUrl = "http://localhost:8082/api/";

    const [genders, setGenders] = useState([]);

    useEffect(() => {
        getGeneros();
    }, []);

    const getGeneros = () => {
        axios.get(`${baseUrl}gender`)
        .then(response => {
            setGenders(response.data)
            console.log(response.data)
        })
        .catch(e => {
            console.log("Hubo un error " + e);
        })
    }


    return(
        
        <>
        <h2>Géneros</h2>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Id Género</th>
                <th scope="col">Género</th>
            </tr>
            </thead>
            <tbody>
                {
                    genders.map(item => 
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                        </tr>
                    

                    )
                }

            </tbody>
        </table>
        </>
    );
}
