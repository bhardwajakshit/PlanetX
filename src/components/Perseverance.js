import React from "react";
import NavBar from "./NavBar";
import { Component } from "react";

const api_key = process.env.REACT_APP_NASA_KEY;    
const APIurl = `https://api.nasa.gov/mars-photos/api/v1/rovers/Perseverance/latest_photos?api_key=${api_key}`;

class Perserverance extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          marspic: [],
        };
    }
  
    componentDidMount() {
        fetch(APIurl)
            .then(response => response.json())
            .then(response => {
                this.setState({
                  marspic:response.latest_photos[0].img_src
                 
                  
                })
            })
    }

    render() {
   const {marspic} = this.state;
      console.log(marspic)
        return (
          <>
          <NavBar />
          <div>
          <br />
          <a href={this.state.image}>
          <img  alt='mars from perseverance' src={this.state.marspic}  className="mars-photo"/>
          </a>
          <p className='desText'>Perseverance's latest photo from Mars</p>
            </div>
            <br />
            <br></br>
          </>
       )
   }
}

export default Perserverance;