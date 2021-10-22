import React, { useEffect, useState } from 'react';
import { FaBeer } from 'react-icons/fa';


const Temp = () =>{

    
    const[city, setcity] = useState();
    const[search, setsearch] = useState("Patna");


    useEffect(()=>{
        const fetchApi = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f3ebb1459cce110c65d04a5925f4c55f`;
            const resoponse = await fetch(url);
            const resJson = await resoponse.json();
            console.log(resJson);
            setcity(resJson.main);
        };
        fetchApi();
    },[search])

    
    return(
        <>
            <h1 className="heading">Weather Api</h1>
            <div className="box">
                <div className="Inputfield">
                    <input type="search" value={search} placeholder="Search City" className="tempsearch" onChange={(event)=>{setsearch(event.target.value)}}/>
                </div>

                {!city ? (
                        <p>No Data Found</p>
                    ) : (
                        <>
                            <div className="info">
                                <div className="Icon">
                                    <i class="fas fa-cloud"></i>
                                </div>
                                <h2 className="location">
                                    {search}
                                </h2>
                                <h3 className="temps">
                                {FaBeer} Temprature : {city.temp} 
                                </h3>
                                <p>Pressure : {city.pressure}</p>
                                <p>Maxmium Temprature : {city.temp_max}</p>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Temp