import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import $ from 'jquery'
import data from './map_data.json'
import './sampleMap.css';

// 
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';





// 
export default class SampleMap extends Component {
    // 
    map;


    // constructor def
    constructor(props){
        super(props);
        this.state={

        }
    }
    // end of constructor def


    // even def


    // end of event def

    // 



    // 
    componentDidMount(){
        // 
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            // style: 'mapbox://styles/mapbox/streets-v11',
            style: 'mapbox://styles/mapbox/dark-v10',
            center:[78.9629,20.5937],
            zoom: 5
        });
        
       



    }




    render() {
        return (
            <div className="agri_crop_main_wrapper">

                {/* left side bar  */}
                <div className="side_bar">
                 <div className="row">
                   <div className="ag_cn_logo">
                    <img src="images/agrilogo.jpg" alt=""/>
                   </div>
                   <hr/>
                 </div>   
                
                </div>

                {/* map body section */}
                <div className="map_data_body">
                <div ref={el => this.mapContainer = el} className="sample_map" />
                </div>




                 
               
                
            </div>
        )
    }
}
