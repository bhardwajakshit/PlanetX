import React from "react";
import { Component } from "react";
import NavBar from "./NavBar";
import moment from 'moment'; 

const api_key = process.env.REACT_APP_NASA_KEY;

const ePhotoAPI = 'https://api.nasa.gov/EPIC/api/natural/images?api_key='+api_key;

class Earth extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          earthPic: [],
          earthDate: [],
          imageCaption: [],
          imageLat: [],
          imageLong: []
        };
    }
  
    componentDidMount() {  
        fetch(ePhotoAPI)
            .then(response => response.json())
            .then(response => {
                this.setState({
                  earthPic:response[0].image,
                  earthDate:response[0].date,
                  imageCaption:response[0].caption,
                  imageLat:response[0].centroid_coordinates.lat,
                  imageLong:response[0].centroid_coordinates.lon    
                })
            })
            
    }
  
    render() {
      const {earthPic, earthDate, imageCaption, imageLat, imageLong} = this.state;
      console.log(earthDate, earthPic, imageCaption, imageLat, imageLong)
      const date= earthDate
      const month= moment(date).format('MM')
      const day= moment(date).format('DD')
      const year=moment(date).format('YYYY')
      console.log(month,day,year)
  
  const lat = imageLat;
  const long = imageLong;
  
  const image= `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${this.state.earthPic}.png`
  
      return (
        <>
        <NavBar />
        <br/>
          <a href={image}>
            <img  alt="Earth from DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument." src={image} className="earth-photo"/>
            </a>
            <p className='desText'>{this.state.imageCaption} on {month}/{day}/{year}.</p>
            <p className='desText'>Geographical coordinates that the satellite is looking at:  <br></br>Longitude: {lat} || Latitude: {long}</p>
            <br></br>
            <br></br>
            <br></br>  
        </>
      );
    }; 
  }
export default Earth;
  