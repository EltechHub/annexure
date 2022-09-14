import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const AddJurnal=()=>{
    const [title, setTitle]=useState('')
    const [text, setText]=useState('')
    const [date, setDate]=useState('')
    const [status, setStatus]=useState('')
    const [author, setAuthor]=useState('')
    const [img, setImg]=useState('')
    const [order_number, setOrder_number]=useState('')

    const navigate=useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault()
     const adding=   await axios.post("http://localhost:7000/api/jurnal/add",{
            title:title,
            text:text,
            date:date,
            status:status,
            author:author,
            img:img,
            order_number:order_number
        })
        navigate('/');
        console.log(adding);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Mavzu</label>
                    <input type="text" className="form-control" id="title" aria-describedby="title" name="title" onChange={e=>setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Text</label>
                    <input type="text" className="form-control" id="text" name="text" onChange={e=>setText(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Sana</label>
                    <input type="date" className="form-control" id="date" name="date" onChange={e=>setDate(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Xolati</label>
                    <input type="text" className="form-control" id="status" name="status" onChange={e=>setStatus(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="order" className="form-label">Order</label>
                    <input type="text" className="form-control" id="order" name="order" onChange={e=>setOrder_number(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Muallif</label>
                    <input type="text" className="form-control" id="author" name="img" onChange={e=>setAuthor(e.target.value)}/>
                </div>
               {/* <div className="mb-3">
                    <label htmlFor="img" className="form-label">Rasm</label>
                    <input type="text" className="form-control" id="img" name="order_number" onChange={e=>setImg(e.target.value)}/>
                </div>*/}


                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Rasm2</label>
                    <input type="file" className="form-control" id="img" name="img" onChange={e=>setImg(e.target.value)}/>
                </div>


                <button type="submit" className="btn btn-primary">Saqlash</button>
            </form>
        </div>
    )
}

export default AddJurnal;