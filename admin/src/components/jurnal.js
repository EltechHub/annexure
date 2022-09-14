import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Jurnal=()=>{
         const [jurnal, setJurnal]=useState([]);
         const [id, setId]=useState('')

        const fetchData=async ()=>{
            const {data}=await axios.get("http://localhost:7000/api/jurnal");
            setJurnal(data.jurnals);
        }

        const deleteHandler =async (e)=>{
         e.preventDefault();
        const remove= await axios.delete(`http://localhost:7000/api/jurnal/${id}`)
            console.log(remove);
            fetchData()

         }

      useEffect(()=>{
        fetchData()
    }, [])
    return(
        <div>
            {jurnal.map(jur=>(
               <div key={jur.id} className="card mb-3 mt-3">
                <img src={jur.img} className="card-img-top" alt={jur.title} />
                <div className="card-body">
                    <h5 className="card-title">{jur.title}</h5>
                    <p className="card-text">{jur.text}</p>
                    <div className='d-flex justify-content-start'>
                        <Link className="btn btn-primary" to={`/update/${jur.id}`}>Update</Link>
                        <form onSubmit={deleteHandler}>
                        <button type="submit" className="btn btn-danger mx-2" onClick={()=>setId(jur.id)}>Delete </button>
                    </form>
                    </div>


                </div>
            </div>
            ))}
        </div>
    )}

export default Jurnal;