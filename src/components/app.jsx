import {LaunchList} from "./launchList";
import {Map} from "./map";
import {useEffect, useState} from "react";
import {SpaceX} from "../api/spacex";

function App(){

    const [launches, setLaunches] = useState([]);
    const [launchPads,setLaunchPads] = useState([]);
    const spacex = new SpaceX();
    
    useEffect(()=>{
        spacex.launchpads().then(data =>{
            setLaunchPads(data)
        })
    },[]);

    useEffect(()=>{
        spacex.launches().then(data =>{
            setLaunches(data)
        })
    },[]);


    return(
        <main className='main'>
            
            <LaunchList launches = {launches}/>
            <Map launchPads = {launchPads}/>
        </main>
    )
}

export {App};
