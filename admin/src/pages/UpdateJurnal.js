import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

const UpdateJurnal=()=>{
    const [title, setTitle]=useState('')
    const [text, setText]=useState('')
    const [img, setImg]=useState('')
    const [order_number, setOrder_number]=useState('')

    const {id}=useParams();
    const navigate=useNavigate();

    const fetchData=async ()=>{
        const {data}=await axios.get(`http://localhost:7000/api/jurnal/${id}`)
        //console.log(data)
        setTitle(data.title)
        setText(data.text)
        setImg(data.img)
        setOrder_number(data.order_number)
    }

    const updateHandler=async (e)=>{
        e.preventDefault()
        const updata= await axios.put(`http://localhost:7000/api/jurnal/${id}`, {
            title:title,
            text:text,
            img:img,
            order_number:order_number
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
                    <label htmlFor="order" className="form-label">Order</label>
                    <input type="text" className="form-control" id="order" name="order" onChange={e=>setOrder_number(e.target.value)} value={order_number}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Text</label>
                    <input type="text" className="form-control" id="text" name="text" onChange={e=>setText(e.target.value)} value={text}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Rasm</label>
                    <input type="text" className="form-control" id="img" name="img" onChange={e=>setImg(e.target.value)} value={img}/>
                </div>
                <button type="submit" className="btn btn-primary">Saqlash</button>
            </form>
        </div>
    )
}

export default UpdateJurnal;