import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
        <div>
        <h1 className='animate-character'> PlanetX 
        <a href='https://github.com/bhardwajakshit' target="_blank" className='github'><Icon icon= "line-md:github-loop" style="color: white;"></Icon></a>
        </h1>
        </div>
        <h1 className='stars'>
            <Link className='home-link' to="/NasaPhoto">See into the stars!</Link>
        </h1>
        <h1 className='wildfire'>
            <Link className='home-link' to="/WildFire">Track Wildfire</Link>
        </h1>
        <br/><br/><br/><br/><br/><br/><br/><br/>

            <h1 className='mars'>
            <Link className='home-link' to="/Perseverance">Perseverance Vision</Link>
            </h1>
            <h1 className='earth'>
            <Link className='home-link' to="/Earth">Planet Earth</Link>
            </h1>
        </>
    )
}