import React, { Component } from "react";
import axios from 'axios';


class Img extends Component {

    state = {
        listOfFiles: []
    }

    componentDidMount = () => {
        axios.get("http://localhost:7000")
            .then(res => {
                console.log(res.data);
                this.setState({
                    listOfFiles: res.data.result
                })
                console.log(this.state.listOfFiles);
            })
    }

    render () {
        return (
            <div className="cardArea">
                {
                    this.state.listOfFiles.map(
                        file =>
                            <div className="productCard">
                                <h4>{file.name}</h4>
                                <a
                                    href={`http://localhost:7000/${file.file}`}
                                >See file</a>
                            </div>
                    )
                }
            </div>
        )
    }
}

export default Img;