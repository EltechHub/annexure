import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

const UpdateJurnal=()=>{
    const [title, setTitle]=useState('')
    const [text, setText]=useState('')
    const [file, setImg]=useState('')
    const [pin, setOrder_number]=useState('')

    const {id}=useParams();
    const navigate=useNavigate();

    const fetchData=async ()=>{
        const {data}=await axios.get(`http://localhost:7000/api/jurnal/${id}`)
        //console.log(data)
        setTitle(data.title)
        setText(data.text)
        setImg(data.file)
        setOrder_number(data.pin)
    }

    const updateHandler=async (e)=>{
        e.preventDefault()
        const updata= await axios.put(`http://localhost:7000/api/jurnal/${id}`, {
            title:title,
            text:text,
            file:file,
            pin:pin
        });
        console.log(updata);
        navigate('/')
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <div>
            <form onSubmit={updateHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Mavzu</label>
                    <input type="text" className="form-control" id="title" aria-describedby="title" name="title" onChange={e=>setTitle(e.target.value)} value={title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="pin" className="form-label">Pin/Unpin</label>
                    <input type="text" className="form-control" id="pin" name="pin" onChange={e=>setOrder_number(e.target.value)} value={pin}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Text</label>
                    <input type="text" className="form-control" id="text" name="text" onChange={e=>setText(e.target.value)} value={text}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="file" className="form-label">Rasm</label>
                    <input type="file" className="form-control" id="file" name="file" onChange={e=>setImg(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Saqlash</button>
            </form>
        </div>
    )
}

export default UpdateJurnal;