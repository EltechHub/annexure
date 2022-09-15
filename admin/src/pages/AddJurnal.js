import React, { Component } from "react";
import axios from 'axios';
class AddJurnal extends Component {

    state = {
        title: '',
        text: '',
        file: null,
        order_number: ''
    }

    handleChange = (event) => {
        this.setState({
            title: document.getElementById('title').value,
            text: document.getElementById('text').value,
            order_number: document.getElementById('order_number').value
        })
    }

    fileSelectedHandler = (event) => {
        let file = event.target.files[0].name;
        this.setState({
            file: event.target.files[0],
            filename: document.getElementById('file').value
        })
        console.log(file);
    }

    fileUploadHandler = (event) => {

        event.preventDefault();

        let formData = new FormData();

        formData.append('title', this.state.title);
        formData.append('text', this.state.text);
        formData.append('file', this.state.file);
        formData.append('order_number', this.state.order_number);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post("http://localhost:7000", formData, config)
            .then (res => {
                console.log(res.data);
                console.log(this.state.filename);
                console.log(formData);
            })
    }

    render () {
        return (
            <div>
                <form encType="multipart/form">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Mavzu</label>
                        <input type="text" className="form-control" id="title" aria-describedby="title" name="title" onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Text</label>
                        <input type="text" className="form-control" id="text" name="text" onChange={this.handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="order" className="form-label">Order</label>
                        <input type="number" className="form-control" id="order_number" name="order" onChange={this.handleChange}/>
                    </div>

                        <div className="mb-3">
                        <label htmlFor="file" className="form-label">Rasm</label>
                        <input type="file" className="form-control" id="file" name="file" onChange={this.fileSelectedHandler}/>
                        </div>


                        <button type="submit" onClick={this.fileUploadHandler} className="btn btn-primary">Saqlash</button>
                        </form>
                        </div>
        )
    }
}
export default AddJurnal;














/*
import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const AddJurnal=()=>{
    const [title, setTitle]=useState('')
    const [text, setText]=useState('')
    const [file, setImg]=useState('')
    const [order_number, setOrder_number]=useState('')

    const navigate=useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault()
     const adding=   await axios.post("http://localhost:7000/api/jurnal/add",{
            title:title,
            text:text,
            file:file,
            order_number:order_number
        })
        navigate('/');
        console.log(adding);
    }
    return(


        <div>
            <form onSubmit={handleSubmit} >
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
                    <label htmlFor="order" className="form-label">Order</label>
                    <input type="text" className="form-control" id="order" name="order" onChange={e=>setOrder_number(e.target.value)}/>
                </div>
               {/!* <div className="mb-3">
                    <label htmlFor="img" className="form-label">Rasm</label>
                    <input type="text" className="form-control" id="img" name="order_number" onChange={e=>setImg(e.target.value)}/>
                </div>*!/}

                <div className="mb-3">
                    <label htmlFor="file" className="form-label">Rasm</label>
                    <input type="file" className="form-control" id="file" name="file" onChange={e=>setImg(e.target.value)}/>
                </div>


                <button type="submit" className="btn btn-primary">Saqlash</button>
            </form>
        </div>



    )
}

export default AddJurnal;*/
