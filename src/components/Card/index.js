import {Component} from "react";
import Home from "../Home"
import AllTab from "../AllTab";
import "./index.css";

class Card extends Component {
    state = {
        datalist:[]
    }

    componentDidMount(){
        this.getdatafrombackend()
    }

    getdatafrombackend = async ()=>{
        const response = await fetch('/cards')
        const data = await response.json();
        // console.log(data)
        this.setState({datalist:data})
    }

    render(){
        const {datalist} = this.state
        return(         
            <div> 
                <Home />
                <AllTab  details={datalist}/>
            </div>
        )
    }
}

export default Card