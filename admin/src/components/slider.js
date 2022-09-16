import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';


const Slider=()=>{
    const [jurnal, setJurnal]=useState([]);


    const fetchData=async ()=>{
        const {data}=await axios.get("http://localhost:7000/api/jurnal");
        setJurnal(data.jurnals);
        console.log(data)
    }
    useEffect(()=>{
        fetchData()
    }, [])
    return(
        <>
            <Carousel fade>
                        {jurnal.map((jur, id)=>(
                                <Carousel.Item  key={jur.id} interval={1000}>
                            <img
                                className="d-block w-100"
                                src={jur.file}
                                alt={jur.title}
                            />
                            <Carousel.Caption>
                                <h3>{jur.title}</h3>
                                <p>{jur.text}</p>
                            </Carousel.Caption>
                        </Carousel.Item>))}
                    </Carousel>
        </>
    )
}
export default Slider